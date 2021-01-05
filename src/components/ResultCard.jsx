import { Card, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';

const ResultCard = (props) => {

    const { details } = props;

    return(
        <div style={{ margin: '20px' }} >
             <Card
                onClick={() => window.open('https://youtu.be/'+details['videoId'], '_blank') }
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
        </div>
    )
}

export default ResultCard;