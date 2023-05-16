import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import { useState } from "react";
import React from "react";
export default function MovieDetails({ movie }) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            {/* Display other movie details as needed */}
        </div>
    );
}
    // const { id } = useParams();
    // const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
//                 setMovie(response.data);
//                 console.log(movie);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };

//         fetchMovieDetails();
//     }, [id]);

//     if (!movie) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>{movie.title}</h1>
//             <p>{movie.overview}</p>
//             {/* Display other movie details as needed */}
//         </div>
//     );
// }

