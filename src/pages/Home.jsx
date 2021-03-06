import { Button, Col, Row, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingCard from '../components/LoadingCard';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Trending from './Trending';
import { FireOutlined, ThunderboltOutlined } from '@ant-design/icons';

export default function Home() {

    const [ results, setResults ] = useState([]);
    const [ trending, setTrending ] = useState(true);
    const invidious2 = 'https://au.ytprivate.com';
    const invidious = 'https://invidious.kavin.rocks';

    const searchVideos = (searchTerm) => {
        if(searchTerm !== '') {
            setTrending(false);
            setResults([])
            searchTerm = encodeURI(searchTerm);
            let url = '';
            if(searchTerm === 'trendingmusic')
                url = '/api/v1/trending?type=music';
            else
                url = '/api/v1/search?q='+searchTerm;

            axios.get( invidious + url ).then((res) => {
                setResults(res.data);
                if (res.data.length === 0)
                    setTrending(true)
                else
                    setTrending(false)
            }).catch(() => {
                //retrying with alternative invidious instance
                axios.get( invidious2 + url ).then((res) => {
                    setResults(res.data);
                    if (res.data.length === 0)
                        setTrending(true)
                    else
                        setTrending(false)
                }).catch(() => {
                    alert('Invidious api is down :(');
                    return 
                });
                return
                
            });
        }
    }

    const TrendingButton = () => {
        return(
            <Button type='primary' shape='round' icon={<FireOutlined />}
                onClick={()=> {
                        setTrending(true); setResults([]);
                }}
            >
                <span style={{whiteSpace: 'nowrap'}}>Trending</span>
            </Button>
        )
    }

    const MusicButton = () => {
        return(
            <Button type='primary' shape='round' icon={<ThunderboltOutlined />}
                onClick={()=> {
                        searchVideos('trendingmusic');
                }}
            >Music</Button>
        )
    }

    useEffect(() => {
        //sending wake up call to probably sleeping heroku youtube-dl backend
        fetch('https://reactube-yandex.herokuapp.com/')
        .then((res) => {
            // console.log('wakeup sent');
            console.log('.');
        })
    }, []);

    return(
        <div style={{ justifyContent: 'center' }} >
            <div style={{marginBottom: '10px'}} > 
                <Row justify='space-between' align='middle' style={{paddingTop: '15px'}} >
                    
                    <Col xs={0} md={2} />

                    <Col xs={24} sm={24} md={4} >
                      <Row justify='center' style={{cursor: 'pointer'}}
                        onClick={()=>{window.location.reload(true)}} >
                        
                        <img src={window.location.origin + '/logo192.png'} alt={<div/>}
                            style={{height: '40px', objectFit: 'contain', 
                            paddingRight: '8px', paddingTop: '2px'}} 
                        />  
                        <Typography style={{color: 'white', fontSize: '30px'}} >ReacTube</Typography>
                      
                      </Row>
                    </Col>

                    <Col xs={0} sm={0} md={3}>
                       <TrendingButton />
                    </Col>
                    
                    <Col xs={0} sm={0} md={3}>
                        <MusicButton />
                    </Col>

                    <Col xs={2} sm={2} md={3} />

                    <Col xs={20} sm={20} md={6} >
                        <SearchBar onSearch={ (value) => searchVideos(value) }
                    />
                    </Col>

                    <Col xs={2} sm={2} md={3} />

                    <Col xs={24} sm={24} md={0} style={{paddingTop: '12px'}} ></Col>

                    <Col xs={12} sm={12} md={0}>
                       <TrendingButton />
                    </Col>
                    
                    <Col xs={12} sm={12} md={0}>
                        <MusicButton />
                    </Col>

                    <Col xs={0} sm={0} md={3} />
  
                </Row>
            </div>

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

            <Trending trending={trending} invidious={invidious} invidious2={invidious2} />

        </div>
    );
}