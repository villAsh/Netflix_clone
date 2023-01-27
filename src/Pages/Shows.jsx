import axios from "axios";
import { useState,useEffect } from "react";
import TrendCard from "../Components/TrendCard";
import APP_API from "../api";
function Shows(){
    const [shows,setShows] = useState();

    useEffect(() => {
        const getShows = async () =>{
            const { data } = await axios
            .get(`
            https://api.themoviedb.org/3/tv/popular?api_key=${APP_API}&language=en-US&page=1`);
            console.log("Shows...",data.results);
            setShows(data);
        }

        getShows();
    },[])

    return(
        <div className="pt-10 bg-slate-900">
        <h1 className="text-[#E50914] text-4xl font-bold md:ml-7">Tv Shows</h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 lg:grid-cols-5 place-content-center">
            {shows.map(show => <TrendCard />) }
        </div>
    </div>
    );
}

export default Shows;