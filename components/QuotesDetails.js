import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Quotes() {
    const [authors, setAuthors] = useState([]);

    const url = 'https://quote-garden.herokuapp.com/api/v2/authors/';
    const author = "?page=1&limit=10";
    const { authorName } = useParams();

    const getDetails = async () => {
        try {
            const res = await fetch(url + authorName + author);
            const data = await res.json();
            setAuthors(data.quotes);
            console.log(data.quotes)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div>
            <h2>{authors.quoteAuthor}</h2>
            <nav>
                {authors.map(author =>
                    <ul key={author._id}>
                        <li>{`"${author.quoteText}"`}</li>
                    </ul>
                )}
            </nav>
            <Link to="/">
                <button className="go-back">
                    Go back!
                </button>
            </Link>
        </div>
    )
}

export default Quotes