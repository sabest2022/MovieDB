import FilterDropDown from "../FilterDropDown/FilterDropdown";
// import dotenv from 'dotenv';
// dotenv.config();
import MovieCard from "../MovieCard/MovieCard";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieList.css';

const apiKey = '014ec40c3ca3ced9279ad3586e5594fa';
export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('popular');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${selectedFilter}?api_key=${apiKey}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [selectedFilter]);

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    return (
        <div className="container">
            <div>
                <FilterDropDown selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
            </div>

            <div className="movie-grid">

                {movies.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-release-date">{movie.release_date}</p>
                        </div>
                    </Link>
                ))}
            </div>
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
