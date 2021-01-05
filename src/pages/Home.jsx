import { Row } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Trending from './Trending';

export default function Home() {

    const [ results, setResults ] = useState([]);
    const [ trending, setTrending ] = useState(true);

    const searchVideos = (searchTerm) => {
        searchTerm = encodeURI(searchTerm);
        axios.get('https://invidious.snopyta.org/api/v1/search?q='+searchTerm)
        .then((res) => {
            console.log(res.data);
            setTrending(false);
            setResults(res.data);
            if (res.data.length === 0)
                setTrending(true)
        });
    }

    return(
        <div style={{ justifyContent: 'center' }} >
            <SearchBar 
                onSearch={ (value) => searchVideos(value) }
            />

            <Row justify='center' >
                { results.map( result => {
                    return(
                        <ResultCard details={ result } />
                    )
                })}
            </Row>

            <Trending trending={trending} />

        </div>
    );
}