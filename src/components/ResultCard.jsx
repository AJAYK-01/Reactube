import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';

const ResultCard = (props) => {

    const { details } = props;

    return(
        <div style={{ margin: '20px' }} >
             <Card
                onClick={() => window.open('https://youtu.be/'+details['videoId'], '_blank') }
                hoverable
                style={{ width: 450, height: 400 }}
                cover={
                    <img alt="thumbnail" src={details['videoThumbnails'][3]['url']} 
                        height={270}
                        width={500}
                        
                    />
                }
            >
                <Meta title={details['title']} description={details['description']} />
            </Card>
        </div>
    )
}

export default ResultCard;