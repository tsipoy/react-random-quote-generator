import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
const url = `https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10`;


function RandomQuotes() {
    const [random, setRandom] = useState({});


    const getQoutes = async () => {
        try {
            const res = await fetch(API_URL);
            console.log(res)
            const data = await res.json();
            setRandom(data.quote);
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getQoutes();
    }, [])

    const [quotesByAuthor, setQuotesByAuthor] = useState({});
    console.log(quotesByAuthor);

    const getAuthorQuotes = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setQuotesByAuthor(data.quotes);
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getAuthorQuotes()
    }, [])

    return (
        <div>
            <div className="randomBtn-wrapper">
                <button className="randomBtn" onClick={() => getQoutes()}>Random</button>
            </div>
            <p>{random.quoteText}</p>
            <ul>
                <Link to={`/authors/${random.quoteAuthor}`}>
                    <h4 className="authorBtn">{random.quoteAuthor}</h4>
                    {/* <p>{random.quoteText}</p> */}
                </Link>
            </ul>
        </div>
    )
}


export default RandomQuotes