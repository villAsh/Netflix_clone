import { Link } from "react-router-dom";
import { useContext, memo, useState } from "react";
import { AiFillHeart } from 'react-icons/ai'
import MediaContext from "../TypeContext";

function TrendCard({ poster, title, id, media_type, link_path }) {
    const { type, setType } = useContext(MediaContext)
    const [like,setLike] = useState(false);
    const img_500 = "https://image.tmdb.org/t/p/w500";

    const getMedia = (media) => {
        const _type = { ...type };
        _type.id = id;
        _type.media = media
        setType(_type);
        console.log(_type)
    }
    const AddFav = (e) => {
        e.preventDefault();
        setLike(!like)
    }
    return (
        <Link to={`${link_path}/${id}`} onClick={() => getMedia(media_type)}>

            <div className="mx-5 p-5 flex flex-col items-end  hover:bg-gray-700 hover:cursor-pointer">
                <button className="absolute text-white" onClick={(e) => AddFav(e)}>
                    <AiFillHeart  style={{fill : like ? "#E50914" : "white",fontSize : '2rem'}}/>
                </button>
                <img src={`${img_500}/${poster}`} alt={title} />
                <h1 className="text-xl font-bold text-[#E50914]">{title}</h1>

            </div>
        </Link>
    );
}

export default memo(TrendCard);