export default function Loading() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '60vh', width: '100%' }}>
            <div className="network-loader">
                <style dangerouslySetInnerHTML={{__html: `
                    .network-loader {
                        position: relative;
                        width: 80px;
                        height: 80px;
                        animation: spin-loader 6s linear infinite;
                    }
                    .node {
                        position: absolute;
                        width: 14px;
                        height: 14px;
                        background: #0052cc;
                        border-radius: 50%;
                        animation: pulse-node 1.5s infinite ease-in-out;
                    }
                    .node-1 { top: 0; left: 33px; animation-delay: 0s; }
                    .node-2 { bottom: 0; left: 0; animation-delay: 0.5s; }
                    .node-3 { bottom: 0; right: 0; animation-delay: 1s; }
                    
                    .line {
                        position: absolute;
                        background: rgba(0, 178, 255, 0.4);
                        border-radius: 2px;
                        z-index: -1;
                    }
                    /* Calculated positions to visually connect the 3 dots in an equilateral-like triangle */
                    .line-1 { width: 2px; height: 60px; top: 12px; left: 24px; transform: rotate(-35deg); animation: pulse-line 1.5s infinite 0.25s; }
                    .line-2 { width: 2px; height: 60px; top: 12px; right: 24px; transform: rotate(35deg); animation: pulse-line 1.5s infinite 0.75s; }
                    .line-3 { width: 62px; height: 2px; bottom: 6px; left: 9px; animation: pulse-line 1.5s infinite 1.25s; }

                    @keyframes pulse-node {
                        0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 82, 204, 0); }
                        50% { transform: scale(1.4); box-shadow: 0 0 20px rgba(0, 178, 255, 0.8); background: #00b2ff; }
                    }
                    @keyframes pulse-line {
                        0%, 100% { opacity: 0.2; box-shadow: 0 0 0 rgba(0, 178, 255, 0); }
                        50% { opacity: 1; box-shadow: 0 0 10px rgba(0, 178, 255, 0.5); }
                    }
                    @keyframes spin-loader {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}} />
                
                <div className="line line-1" />
                <div className="line line-2" />
                <div className="line line-3" />
                
                <div className="node node-1" />
                <div className="node node-2" />
                <div className="node node-3" />
            </div>
        </div>
    );
}
