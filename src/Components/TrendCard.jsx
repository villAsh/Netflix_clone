import { Link } from "react-router-dom";
function TrendCard({ poster, title, id }) {
    const img_500 = "https://image.tmdb.org/t/p/w500";
    return (
        <Link to={`trending/${id}`}>
            <div className="mx-5 p-5 flex flex-col items-center hover:bg-gray-700 hover:cursor-pointer">
                <img src={`${img_500}/${poster}`} alt={title} />
                <h1 className="text-xl font-bold text-[#E50914]">{title}</h1>
            </div>
        </Link>
    );
}

export default TrendCard;