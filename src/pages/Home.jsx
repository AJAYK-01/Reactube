import axios from 'axios';
import React, { useState } from 'react';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';

export default function Home() {

    const [ results, setResults ] = useState([]);

    const searchVideos = (searchTerm) => {
        searchTerm = encodeURI(searchTerm);
        axios.get('https://invidious.snopyta.org/api/v1/search?q='+searchTerm)
        .then((res) => {
            console.log(res.data);
            setResults(res.data);
        });
    }

    return(
        <div style={{ justifyContent: 'center' }} >
            <SearchBar 
                onSearch={ (value) => searchVideos(value) }
            />

            <div style={{ display: 'grid', justifyContent: 'center' }} >
                { results.map( result => {
                    return(
                        <ResultCard details={ result } />
                    )
                })}
            </div>

        </div>
    );
}