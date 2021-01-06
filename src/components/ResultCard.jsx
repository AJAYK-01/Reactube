import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const ResultCard = (props) => {

    const { details } = props;

    const [ playerOpen, setPlayer ] = useState(false);

    const openPlayer = () => {
        console.log("in card open");
        setPlayer(true);
    }

    const closePlayer = () => {
        setPlayer(false);
    }

    return(
        <div style={{ margin: '20px' }} >
             <Card
                onClick={() => {openPlayer()}}
                hoverable
                style={{ width: 450/1.8, height: 400/2 }}
                cover={
                    <img 
                        alt="" 
                        src={details['videoThumbnails'][3]['url']} 
                        height={270/2}
                        width={500/2}
                        
                    />
                }
            >
                <Meta title={details['title']} 
                    // description={details['description']} 
                />
            </Card>

            { playerOpen ? 
                ( <VideoPlayer videoLink={"https://youtube.com/watch?v="+details['videoId']}
                    onClose={() => closePlayer() }   />) 
                : (<div />)  
            }

        </div>
    )
}

export default ResultCard;