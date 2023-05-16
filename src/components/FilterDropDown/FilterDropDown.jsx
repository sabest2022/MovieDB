import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const apiKey = '014ec40c3ca3ced9279ad3586e5594fa';
export default function FilterDropDown({ selectedFilter, onFilterChange }) {


    // Fetch movies based on selected filter
    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://api.themoviedb.org/3/movie/${selectedFilter}?api_key=${apiKey}`
    //             );
    //             const movies = response.data.results;
    //             // Handle the fetched movies as needed
    //             console.log('Fetched movies:', movies);
    //         } catch (error) {
    //             console.error('Error fetching movies:', error);
    //         }
    //     };

    //     fetchMovies();
    // }, [selectedFilter]);


    return (
        <select value={selectedFilter} onChange={onFilterChange}>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
        </select>
    );
}
