import React, { useEffect, useState } from "react";

const API_URL = `https://pprathameshmore.github.io/QuoteGarden/`;

function RandomQuotes() {
    const [random, setRandom] = useState([]);

    const getQoutes = async () => {
        try {
            const res = await fetch(API_URL);
            console.log(res)
            const data = await res.json();
            setRandom(data);
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getQoutes();
    })

    return(
        <div>
            {random.map((quote) => {
                <p>{quote.quoteAuthor}</p>
            })}
        </div>
    )
}


export default RandomQuotes