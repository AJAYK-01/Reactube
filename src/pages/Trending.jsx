import { Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingCard from '../components/LoadingCard';
import ResultCard from '../components/ResultCard';

function Trending(props) {

    const { trending, invidious, invidious2 } = props;
    const [ trendingVids, setTrending ] = useState([]);

    const getTrending = () => {
        axios.get(invidious+'/api/v1/trending/')  
        .then((res) => {
            setTrending(res.data);
        }).catch((err) => {
            console.log('caught');

            //retrying with alternative invidious instance
            axios.get(invidious2+'/api/v1/trending/')  
            .then((res) => {
                setTrending(res.data);
            }).catch(() => {
                alert("Invidious api is down :(");
                return
            })
            return

        })
    }
    

    useEffect(() => {
        // the length check condition is for the case when trending is clicked but results not loaded yet.
        if(trending === true && trendingVids.length === 0)
            getTrending();
    });

    return(
        <div>
            <Row justify='center' >
                {  trendingVids.length !== 0 && trending === true 
                    ? trendingVids.map( video => {
                    return(
                   
                        <ResultCard details={video} />
                      
                    )
                }) : [...Array(12)].map( i => {
                    if(trending)
                        return(<LoadingCard />)
                    else
                        return(<div />)
                } )
            }
            </Row>
        </div>
    )     
}

export default Trending;