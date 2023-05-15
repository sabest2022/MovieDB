import FilterDropDown from "../FilterDropDown/FilterDropdown";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.REACT_APP_API_KEY;
export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <MovieCard movie={movie} />
                </Link>
            ))}
        </div>
    );
}

    // return (
    //     <div>

    //         <FilterDropDown />
    //         <MovieCard />
    //     </div>
    // );
// }
