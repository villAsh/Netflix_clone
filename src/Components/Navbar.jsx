import logo from '../images/Netflix.svg';
import {AiOutlineSearch} from 'react-icons/ai';
function Navbar() {
    return (
        <div>
            <div className='flex flex-row p-5 items-center justify-between'>
                <img src={logo} alt="logo" width={120} className="mr-10" />
                <ul className='flex space-x-4  list-none font-semibold  text-xl font-serif text-white cursor-pointer'>
                    <li className='hover:animate-pulse hover:text-red-700'>Home</li>
                    <li className='hover:animate-pulse hover:text-red-700'>Tv Shows</li>
                    <li className='hover:animate-pulse hover:text-red-700'>Movies</li>
                    <li className='hover:animate-pulse hover:text-red-700'>My List</li>
                </ul>
                <div className='flex items-center rounded-lg px-3 py-1 border border-[#E50914]'>
                      <AiOutlineSearch className='text-2xl text-white'/>
                    <input type="text" placeholder='Enter movie name' 
                    className='focus:outline-none ml-2 bg-transparent placeholder:text-white placeholder-shown:text-white ' />
                </div>
            </div>

        </div>
    );
}

export default Navbar;