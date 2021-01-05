import { Card } from 'antd';
import React from 'react';

const LoadingCard = () => {

    return(
        <div style={{ margin: '20px' }}>
            <Card loading={true} style={{ width: 450/1.8, height: 400/2 }}/>
        </div>
    )
}

export default LoadingCard;