import { Link } from "react-router-dom";
import { useContext,memo } from "react";
import MediaContext from "../TypeContext";

function TrendCard({ poster, title, id,media_type }) {
    const {type, setType} = useContext(MediaContext)
    const img_500 = "https://image.tmdb.org/t/p/w500";

    const getMedia = (media) =>{
        const _type = {...type};
        _type.id = id;
        _type.media = media
        setType(_type);
        console.log(_type)
    }
    return (
        <Link to={`trending/${id}`} onClick={() => getMedia(media_type)}>
            <div className="mx-5 p-5 flex flex-col items-center hover:bg-gray-700 hover:cursor-pointer">
                <img src={`${img_500}/${poster}`} alt={title} />
                <h1 className="text-xl font-bold text-[#E50914]">{title}</h1>
            </div>
        </Link>
    );
}

export default memo(TrendCard);