import { useState,useEffect } from "react";
import { BsFillPlayFill,BsInfoCircle } from "react-icons/bs";

function Uncharted(){
    const [info , setInfo] = useState({});
    useEffect(() => {
        const fetchData = () => {
             fetch('http://www.omdbapi.com/?t=uncharted&apikey=86336876')
            .then(res => res.json())
            .then(data => setInfo(data))
        }

        fetchData();
        
    },[]);
    console.log(info);
    return(
        <div className="md:h-[70vh] grid grid-cols-1 place-content-center content-center container mx-auto">
            <div className="text-7xl font-bold text-white">
                <h1>{info.Title}</h1>
            </div>
            <div className="md:text-2xl text-white md:w-2/3 pt-5">
                <p>{info.Plot}</p>
            </div>
            <div className="pt-5 flex items-center space-x-4">
                <button className="bg-white px-8 py-1 rounded-lg flex items-center text-2xl font-bold"><BsFillPlayFill  className="text-5xl"/> Play</button>
                <button className="bg-stone-400 px-8 py-1 rounded-lg flex items-center text-2xl font-bold"> More <BsInfoCircle className="ml-3 text-3xl"/></button>
            </div>
        </div>
    );
}

export default Uncharted;