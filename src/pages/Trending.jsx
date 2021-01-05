import { Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResultCard from '../components/ResultCard';

function Trending(props) {

    const { trending } = props;
    const [ trendingVids, setTrending ] = useState([]);

    const getTrending = () => {
        axios.get('https://invidious.snopyta.org/api/v1/trending')
        .then((res) => {
            setTrending(res.data);
        })
    }

    useEffect(() => {
        if(trending === true && trendingVids.length === 0)
            getTrending();
        if(trending === false )
            setTrending([]);
    });

    return(
        <div>
            <Row justify='center' >
                {  trendingVids.length !== 0 ? trendingVids.map( video => {
                    return(
                        <ResultCard details={video} />
                    )
                }) : [...Array(10)].map( i => {
                    return(
                        // <ResultCard loading={true} details={null} />
                        <div />
                    )
                } )
            }
            </Row>
        </div>
    )     
}

export default Trending;