import axios from 'axios';
import { useState, useEffect } from 'react';
import TrendCard from '../Components/TrendCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { APP_API, unavailable } from '../config';
function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios
                .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_API}&language=en-US&page=1`)
            // console.log(data.results)
            setMovies(data.results);

        }

        fetchMovies();
    }, []);

    //Search Movies
    const handleClick = (e) => {
        e.preventDefault();
        console.log(search);
        searchMovies();
    }
    const searchMovies = async () => {
        const { data } = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${APP_API}&
        language=en-US&query=${search}&page=1&include_adult=false`);
        console.log(data.results);
        setMovies(data.results)
    }

    useEffect(() => {
        searchMovies();
    }, []);
    return (
        <div className="pt-10 bg-slate-900">
            <div className='flex justify-between'>
                <h1 className="text-[#E50914] text-4xl font-bold md:ml-7">Top Movies</h1>
                <div className='flex items-center p-2 border border-red-600 rounded-full md:mr-8 bg-white'>
                    <AiOutlineSearch className='text-3xl mr-2' />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Movie Name" className='outline-none' />
                    <button className='px-6 py-1 rounded-full text-white bg-[#E50914]' onClick={handleClick}>Show</button>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 lg:grid-cols-5 place-content-center">
                {movies.map((show) => <TrendCard link_path="movie"
                    poster={show.poster_path} title={show?.title || show?.name}
                    key={show?.id} id={show?.id} media_type="movie" />)}
            </div>
        </div>
    );
}

export default Movies;