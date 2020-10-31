import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;


function RandomQuotes() {

    const [random, setRandom] = useState({});

    const getQoutes = async () => {
        try {
            const res = await fetch(API_URL);
            console.log(res)
            const data = await res.json();
            setRandom(data.quote);
            console.log(data.quote)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getQoutes();
    }, [])

    return (
        <div>
            <h1>Random quotes generator</h1>
            <div className="randomBtn-wrapper">
                <button className="randomBtn" onClick={() => getQoutes()}>
                    Random
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
                        </svg>
                    </span>
                </button>
            </div>
            <p>{`"${random.quoteText}"`}</p>
            <div className="authorBtn">
                <Link to={`/authors/${random.quoteAuthor}`} random={random}>
                    <div className="divAuthor">
                        <h4>{random.quoteAuthor}</h4>
                        <span>
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                            </svg>
                        </span>
                    </div>
                    <small>{random.quoteGenre}</small>
                </Link>
            </div>
        </div>
    )
}


export default RandomQuotes