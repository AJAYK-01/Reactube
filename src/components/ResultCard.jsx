import { Card, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';

const ResultCard = (props) => {

    const { details, loading } = props;
    const [ cardDetails, setDetails ] = useState(details);

    // useEffect(() => {
    //     if(!details)
    //     {
    //         setDetails({ 'videoId': 'hvjhjh', 'title': 'null', 
    //         'videoThumbnails': 
    //         [{'url': ''}, {'url': 'https://google.com'}, {'url': 'https://google.com'}, 
    //         {'url': ''}], 'description': 'null' })
    //     }
    //     else
    //         setDetails(details);
    // })

    return(
        <div style={{ margin: '20px' }} >
            {/* <Skeleton loading={loading} active > */}
             <Card
                // loading={loading}
                onClick={() => window.open('https://youtu.be/'+cardDetails['videoId'], '_blank') }
                hoverable
                style={{ width: 450/1.8, height: 400/2 }}
                cover={
                    <img 
                        alt="" 
                        src={cardDetails['videoThumbnails'][3]['url']} 
                        height={270/2}
                        width={500/2}
                        
                    />
                }
            >
                <Meta title={cardDetails['title']} 
                    // description={cardDetails['description']} 
                />
            </Card>
            {/* </Skeleton> */}
        </div>
    )
}

export default ResultCard;