import { Card } from 'antd';
import React from 'react';

const LoadingCard = () => {

    const bgColor = '#1D3557';

    return(
        <div style={{ margin: '20px' }}>
            <Card loading={true} 
                style={{ backgroundColor: bgColor, borderColor: bgColor, width: 450/1.8, height: 400/2 }}/>
        </div>
    )
}

export default LoadingCard;