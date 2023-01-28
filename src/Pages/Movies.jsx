import axios from 'axios';
import { useState, useEffect } from 'react';
import TrendCard from '../Components/TrendCard';
import {AiOutlineSearch} from 'react-icons/ai';
import APP_API from '../api';
function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios
                .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_API}&language=en-US&page=1`)
            // console.log(data.results)
            setMovies(data.results);

        }

        fetchMovies();
    }, [])
    return (
        <div className="pt-10">
            <div className='flex justify-between'>
            <h1 className="text-[#E50914] text-4xl font-bold md:ml-7">Top Movies</h1>
            <div className='flex items-center p-2 border border-red-600 rounded-full md:mr-8'>
                <AiOutlineSearch  className='text-3xl mr-2'/>
                <input type="text" placeholder="Enter Movie Name" className='outline-none'/>
            </div>
            </div>
           
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 lg:grid-cols-5 place-content-center">
                {movies.map((show) => <TrendCard link_path="movie"
                    poster={show?.poster_path} title={show?.title || show?.name}
                    key={show?.id} id={show?.id} media_type="movie" />)}
            </div>
        </div>
    );
}

export default Movies;