import axios from "axios";
import { useState, useEffect } from "react";
import TrendCard from "../Components/TrendCard";
import APP_API from "../api";
function Shows() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const getShows = async () => {
            const { data } = await axios
                .get(`
            https://api.themoviedb.org/3/tv/popular?api_key=${APP_API}&language=en-US&page=1`);
            console.log("Shows...", data.results);
            setShows(data.results);
        }

        getShows();
    }, [])

    return (
        <div className="pt-10">
            <h1 className="text-[#E50914] text-4xl font-bold md:ml-7">Top Tv Shows</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 lg:grid-cols-5 place-content-center">
                {shows.map((show) => <TrendCard link_path="tv"
                 poster={show?.poster_path} title={show?.title || show?.name}
                  key={show?.id} id={show?.id} media_type="tv" />)}
            </div>
        </div>
    );
}

export default Shows;