import logo from '../images/Netflix.svg';
// import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='bg-slate-900'>
            <div className='flex flex-row p-5 items-center justify-between '>
                <Link to="/">
                <img src={logo} alt="logo" width={120} className="mr-10" />
                </Link>
                <ul className='flex space-x-4  list-none font-semibold text-base  md:text-xl font-serif text-white cursor-pointer'>
                    <li className='hover:animate-pulse hover:text-red-700'><Link to="/">Home</Link></li>
                    <li className='hover:animate-pulse hover:text-red-700'><Link to="shows">Tv Shows</Link></li>
                    <li className='hover:animate-pulse hover:text-red-700'><Link to="movies">Movies</Link></li>
                    <li className='hover:animate-pulse hover:text-red-700'><Link to="watchlist">Watch List</Link></li>
                </ul>
                {/* <div className='flex items-center rounded-lg px-3 py-1 border-2 border-[#E50914] bg-white'>
                      <AiOutlineSearch className='text-2xl'/>
                    <input type="text" placeholder='Enter movie name' 
                    className='focus:outline-none ml-2 placeholder:text-black' />
                </div> */}
            </div>

        </div>
    );
}

export default Navbar;