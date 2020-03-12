export default function Index() {
    return (
        <div>
            <h1>David</h1>
            <p>Hello Next.js</p>
            <img src="static/mercedes.jpg" alt="carro" />
            <style jsx>{`
                h1 {
                    color: brown;
                }
                div:global(p) {
                    color: salmon;
                }
                img {
                    max-width: 40%;
                    display: block;
                    margin: 0 auto;
                }
            `}</style>

            <style jsx global>
                {`
                    body {
                        background: yellow;
                    }
                `}
            </style>
        </div>
    );
}
