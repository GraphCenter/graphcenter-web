'use client';

import { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    accent: boolean;
    phase: number;
}

const LINK_DISTANCE = 160;
const NODE_DENSITY = 13000; // px^2 per node
const ACCENT_RATIO = 6; // roughly 1-in-6 nodes carries the Bright Blue accent

// Cursor interactivity — nodes get pushed away from the pointer and draw a
// temporary "hub" of connecting lines back to it, like the original site.
const CURSOR_REPEL_DISTANCE = 120;
const CURSOR_REPEL_STRENGTH = 2.2;
const CURSOR_LINK_DISTANCE = 220;

const BASE_RGB = '0, 82, 204'; // Deep Blue — the logo's own palette
const ACCENT_RGB = '0, 178, 255'; // Bright Blue

/**
 * Ambient sitewide graph-node network — restored per user request, recolored
 * entirely in the GraphCenter logo's two blues, and made interactive: nodes
 * near the cursor are gently pushed away and draw connecting lines back to
 * it, echoing the original site's behavior.
 */
export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let nodes: Node[] = [];
        let rafId = 0;
        const mouse: { x: number | null; y: number | null } = { x: null, y: null };

        const buildNodes = () => {
            const count = Math.max(24, Math.floor((width * height) / NODE_DENSITY));
            nodes = Array.from({ length: count }, (_, i) => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.18,
                vy: (Math.random() - 0.5) * 0.18,
                r: Math.random() * 1.3 + 1.3,
                accent: i % ACCENT_RATIO === 0,
                phase: Math.random() * Math.PI * 2,
            }));
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
            buildNodes();
        };

        resize();
        window.addEventListener('resize', resize);

        const handleMove = (x: number, y: number) => {
            mouse.x = x;
            mouse.y = y;
        };
        const handlePointerMove = (e: PointerEvent) => handleMove(e.clientX, e.clientY);
        const handleTouchMove = (e: TouchEvent) => {
            const t0 = e.touches[0];
            if (t0) handleMove(t0.clientX, t0.clientY);
        };
        const handleLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleLeave);
        document.addEventListener('mouseleave', handleLeave);

        let t = 0;
        const tick = () => {
            t += 1;
            ctx.clearRect(0, 0, width, height);

            const mx = mouse.x;
            const my = mouse.y;

            // Update positions: base drift, gently bouncing off the viewport
            // edges, plus a push away from the cursor when nearby.
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;

                if (mx !== null && my !== null) {
                    const dx = n.x - mx;
                    const dy = n.y - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CURSOR_REPEL_DISTANCE && dist > 0.01) {
                        const force = (1 - dist / CURSOR_REPEL_DISTANCE) * CURSOR_REPEL_STRENGTH;
                        n.x += (dx / dist) * force;
                        n.y += (dy / dist) * force;
                    }
                }
            }

            // Edges — only between nearby nodes, fading out with distance
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK_DISTANCE) {
                        const alpha = (1 - dist / LINK_DISTANCE) * 0.11;
                        ctx.strokeStyle = `rgba(${BASE_RGB}, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // Cursor hub — nearby nodes draw a connecting line back to the
            // pointer, brightening the closer they are.
            if (mx !== null && my !== null) {
                for (const n of nodes) {
                    const dx = n.x - mx;
                    const dy = n.y - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CURSOR_LINK_DISTANCE) {
                        const alpha = (1 - dist / CURSOR_LINK_DISTANCE) * 0.45;
                        ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(mx, my);
                        ctx.lineTo(n.x, n.y);
                        ctx.stroke();
                    }
                }
                ctx.beginPath();
                ctx.fillStyle = `rgba(${ACCENT_RGB}, 0.5)`;
                ctx.arc(mx, my, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Nodes — mostly a faint Deep Blue dot, occasionally a Bright
            // Blue accent that softly twinkles
            for (const n of nodes) {
                const twinkle = n.accent ? 0.34 + Math.sin(t * 0.02 + n.phase) * 0.12 : 0.26;
                ctx.beginPath();
                ctx.fillStyle = n.accent
                    ? `rgba(${ACCENT_RGB}, ${twinkle})`
                    : `rgba(${BASE_RGB}, ${twinkle})`;
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }

            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleLeave);
            document.removeEventListener('mouseleave', handleLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
}
