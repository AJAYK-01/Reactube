import { Card, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Paragraph from 'antd/lib/skeleton/Paragraph';
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

    const bgColor = '#1D3557';
    const textColor = '#CDEAE5';

    return(
        <div style={{ margin: '20px' }} >
          <span title={details['title']}>
             <Card
                onClick={() => {openPlayer()}}
                hoverable
                style={{ borderColor: bgColor, backgroundColor: bgColor,
                    width: 450/1.8, height: 400/2}}
                cover={
                    <img 
                        alt="" 
                        src={details['videoThumbnails'][3]['url']} 
                        height={280/2}
                        width={500/2}
                    />
                }
            >
                <Meta title={
                  <div style={{color: textColor, textOverflow: 'ellipsis', overflow: 'hidden'}} >
                        {details['title']}
                  </div>
                }
                    // description={details['description']} 
                />
            </Card>
          </span>

            { playerOpen ? 
                ( <VideoPlayer videoLink={"https://youtube.com/watch?v="+details['videoId']}
                    onClose={() => closePlayer() }   />) 
                : (<div />)  
            }

        </div>
    )
}

export default ResultCard;