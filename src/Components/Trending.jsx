import axios from "axios";
import TrendCard from "./TrendCard";
import { useEffect,useState } from "react";
import Movies from "../Pages/Movies";
function Trending(){

    const [trends, setTrends] = useState([]);
    const fetchTrend = async () =>{
        const {data} = await axios
        .get('https://api.themoviedb.org/3/trending/all/day?api_key=9d60ba9e1046ed1f753664c24eb0410a')
        console.log(data.results);
        setTrends(data.results);

    }   
    useEffect(()=>{
        fetchTrend();
    },[])
    return(
        <div className="pt-10 bg-slate-900">
            <h1 className="text-[#E50914] text-4xl font-bold md:ml-7">Trending Now</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center">
                { trends && trends.map((data) => <TrendCard poster={data?.poster_path} title={data?.title || data?.name} key={data?.id} id={data?.id} media_type={data?.media_type} />)}
            </div>
        </div>
    );
}

export default Trending;