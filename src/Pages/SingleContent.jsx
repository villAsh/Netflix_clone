import axios from "axios";
import { useState,useEffect,useContext,memo } from "react";
import MediaContext from "../TypeContext";
import APP_API from "../api";

function SingleContent() {
    //TO USE MEDIA_TYPE FOR SPECIFIC TV/MOVIE
    const {type} = useContext(MediaContext);

    //FOR IMAGE
    const img_500 = "https://image.tmdb.org/t/p/w500";
    //TO GET SINGLE DATA OBJECT
    const [Data,setData] = useState({})
    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await axios
            .get(`https://api.themoviedb.org/3/${type.media}/${type.id}?api_key=${APP_API}`)
            console.log(data)
            setData(data);
            // console.log(Data)
        }

        fetchMovie();
    },[type.id,type.media]);
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly h-[87vh]">
            <img src={`${img_500}/${Data?.poster_path}`}
                className="md:h-[80vh]"
                alt="movie poster" />
            <div className="space-y-3 ml-10">
                <h1 className="md:text-5xl font-bold">{Data?.title || Data?.name}</h1>
                <h3 className="text-2xl text-justify">{Data?.release_date}</h3>
                <h5 className="text-xl text-black font-bold">{Data?.runtime ? "Mintues" : ""}</h5>
                <hr />
                <h3 className="text-2xl text-center text-black font-serif font-bold">{Data?.tagline}</h3>
                <p className="text-lg font-semibold font-sans">{Data?.overview}</p>
                <hr />
                <button  className="bg-[#E50914] hover:bg-red-700 hover:text-white text-white px-8 py-2">
                    <a href={Data?.homepage} target="_blank" rel="noreferrer">Watch Now</a>
                </button>
            </div>

        </div>
    );
}

export default memo(SingleContent);