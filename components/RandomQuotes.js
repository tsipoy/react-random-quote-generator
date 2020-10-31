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
                <button className="randomBtn" onClick={() => getQoutes()}>Random</button>
            </div>
            <p>{`"${random.quoteText}"`}</p>
            <div className="authorBtn">
                <Link to={`/authors/${random.quoteAuthor}`} random={random}>
                    <h4>{random.quoteAuthor} →</h4>
                    <small>{random.quoteGenre}</small>
                </Link>
            </div>
        </div>
    )
}


export default RandomQuotes