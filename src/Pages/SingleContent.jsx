import axios from "axios";
import { useState,useEffect } from "react";
function SingleContent() {
    const api = ''

    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await axios
            .get(`https://api.themoviedb.org/3/$`)
        }
    })
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly h-[87vh]">
            <img src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                alt="movie poster" />
            <div className="space-y-3 ml-10">
                <h1 className="md:text-5xl font-bold">Netflix</h1>
                <h3 className="text-2xl text-justify">20-03-2020</h3>
                <p>aksjdfldsfjdslkfjsdlkfjsdflkdsjflksdjfdslkfjsdlkfjsdlkfjdsflkdsjflkdsjflksdjflskdfjs
                dlkfjsdlkfjsdlkfsjdflskdjfdslkfjsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdlfksjdflkdsjfl
                ksdjflksdjfdslkfjdslkfjsdlkfjsdlfasdsadasdasdsadsad</p>
            </div>

        </div>
    );
}

export default SingleContent;