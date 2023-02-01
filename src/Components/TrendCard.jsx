import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai'
import MediaContext from "../TypeContext";
import { unavailable } from "../config";

//TRENIDING CARD WHICH SHOWS THE INDIVIDUAL SHOWS AND MOVIES.
function TrendCard({ poster, title, id, media_type, link_path }) {
     //usign context from global state
    const { type, setType } = useContext(MediaContext)
    
    //STATE FOR LIKED WHICH WILL BE ADDED INTO WATCHLIST.
    const [like,setLike] = useState(false);

    //DEFAULT POSTER LINK WHICH WILL BE APPLIED BEFORE EVERY POSTER URL.
    const img_500 = "https://image.tmdb.org/t/p/w500";

    //FINDING MEDIA AND ID SO THAT IT WILL BE SENT TO GLOBAL STATE
    const getMedia = (media) => {
        const _type = { ...type };
        _type.id = id;
        _type.media = media
        setType(_type);
        console.log(_type)
    }

    const timed = setTimeout(() => {
        setLike(false)
    },2000)
    //FUNCTION FOR LIKE.
    const AddFav = (e,id) => {
        e.preventDefault();
        setLike(true)
        console.log("liked id...",id)
    }


    return (
        <Link to={`${link_path}/${id}`} onClick={() => getMedia(media_type)}>

            <div className="mx-5 p-5 flex flex-col items-end  hover:bg-gray-700 hover:cursor-pointer">
                <button className="absolute text-white" onClick={(e) => AddFav(e,id)}>
                    <AiFillHeart  style={{fill : like ? "#E50914" : "white", fontSize : '3rem'}}/>
                </button>
                <img src={poster ? `${img_500}/${poster}` : unavailable} alt={title} />
                <h1 className="text-xl font-bold text-[#E50914]">{title}</h1>

            </div>
        </Link>
    );
}

export default TrendCard;