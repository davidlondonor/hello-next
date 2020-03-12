export default function Index() {
    return (
        <div>
            <header>Podcast</header>
            <style jsx>{`
                header {
                    color: white;
                     background: linear-gradient(
                            0deg,
                            rgba(2, 0, 36, 1) 0%,
                            rgba(9, 40, 121, 1) 0%,
                            rgba(0, 212, 255, 1) 100%
                        );
                    padding: 14px;
                    text-align: center;
                }
              
                );
            `}</style>

            <style jsx global>
                {`
                    body {
                        margin: 0;
                        font-family: system-ui;
                    }
                `}
            </style>
        </div>
    );
}
