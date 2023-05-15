import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
    );
}

    //     return (
//         <div>
//             <MarkAsSeenBtn />
//         </div>
//     );
// }

