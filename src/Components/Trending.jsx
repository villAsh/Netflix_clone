import axios from "axios";
import TrendCard from "./TrendCard";
import { useEffect, useState } from "react";
import {APP_API} from "../config";
function Trending() {

    const [trends, setTrends] = useState([]);

    useEffect(() => {
        const fetchTrend = async () => {
            const { data } = await axios
                .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APP_API}`)
            console.log(data.results);
            setTrends(data.results);

        }

        fetchTrend();
    }, [])
    return (
        <div className="pt-10 bg-slate-900">
            <h1 className="text-[#E50914] text-4xl font-bold md:ml-7">Trending Now</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center">
                {trends && trends.map((data) => <TrendCard poster={data?.poster_path} title={data?.title || data?.name} key={data?.id} id={data?.id} media_type={data?.media_type} link_path="trending" />)}
            </div>
        </div>
    );
}

export default Trending;