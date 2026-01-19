function App() {
    const title = "Harry Potter and the Philosopher’s Stone";
    const author = "J. K. Rowling";
    const genre = "Fantasy";
    const pages = 223;

    const photo = "/images/book.jpg";

    const reviews = [
        "Magical and cozy story.",
        "Easy to read and very engaging.",
        "Perfect start of the series.",
    ];

    return (
        <div
            style={{
                fontFamily: "Arial",
                padding: 20,
                maxWidth: 800,
                margin: "0 auto",
                textAlign: "center",

            }}
        >
            <h1>My Favorite Book</h1>

            <img
                src={photo}
                alt={title}
                style={{
                    width: 200,
                    borderRadius: 8,
                    marginBottom: 20,

                }}
            />

            <p><b>Title:</b> {title}</p>
            <p><b>Author:</b> {author}</p>
            <p><b>Genre:</b> {genre}</p>
            <p><b>Pages:</b> {pages}</p>

            <h2>Reviews</h2>

            <ul style={{ listStylePosition: "inside",
                padding: 0,
            }}>
                {reviews.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
