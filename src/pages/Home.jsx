import { Button, Row } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import LoadingCard from '../components/LoadingCard';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Trending from './Trending';

export default function Home() {

    const [ results, setResults ] = useState([]);
    const [ trending, setTrending ] = useState(true);

    const searchVideos = (searchTerm) => {
        if(searchTerm !== '') {
            setTrending(false);
            setResults([])
            searchTerm = encodeURI(searchTerm);
            axios.get('https://invidious.kavin.rocks/api/v1/search?q='+searchTerm)
            .then((res) => {
                console.log(res.data);
                setResults(res.data);
                if (res.data.length === 0)
                    setTrending(true)
                else
                    setTrending(false)
            });
        }
    }

    return(
        <div style={{ justifyContent: 'center' }} >

            <Row justify='space-around' >
                <div/>
                <div/>
                <Button 
                    onClick={()=> {
                        // if(!trending) {
                            setTrending(true); setResults([]);
                    }}
                >Trending</Button>
                <SearchBar 
                    onSearch={ (value) => searchVideos(value) }
                />
                <div/>
                <div/>
            </Row>

            <Row justify='center' >
                { results.length !== 0 ? results.map( result => {
                        return(
                            <ResultCard details={ result } />
                        )
                    }) : [...Array(12)].map(i => {
                        if(!trending)
                            return(<LoadingCard />);
                        else
                            return(<div />);
                    })
            }
            </Row>

            <Trending trending={trending} />

        </div>
    );
}