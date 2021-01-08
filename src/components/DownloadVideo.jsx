import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Row } from 'antd';
import React, { useState } from 'react';

const DownloadVideo = (props) => {

    const { link, title, stopPlay } = props;
    const [ quality, setQuality ] = useState('134');
    const [ qtyText, setQtyText ] = useState('480p')

    const handleOptionClick = (e) => {
        console.log(e);
        const qty = e['key'];
        setQtyText(qty);
        if (qty === '360p') {
            setQuality('134');
        }
        else if(qty === '480p') {
            setQuality('135');
        }
        else if(qty === '720p') {
            setQuality('136');
        }
        else if(qty === 'Audio only') {
            setQuality('audioonly');
        }
    }

    const options = (
        <Menu onClick={handleOptionClick}>
            <Menu.Item key="Audio only" >
            Audio only
            </Menu.Item>
            <Menu.Item key="360p" >
            360p
            </Menu.Item>
            <Menu.Item key="480p" >
            480p
            </Menu.Item>
            <Menu.Item key="720p" >
            720p
            </Menu.Item>
            <Menu.Item key="1080p" >
            1080p
        </Menu.Item>
      </Menu>
    )

    const downloadVideo = () => {
        stopPlay();
        window.open(`https://saber-giddy-aardwolf.glitch.me/`
            +`download?url=${link}&title=${title}&qty=${quality}`);     
    }


    return(
        <Row justify='space-around' style={{paddingTop: '10px', paddingBottom: '10px'}} >
            <Button type='primary' onClick={() => downloadVideo()} >
                Download <DownloadOutlined />
            </Button>
            <Dropdown overlay={options}>
                <Button type='primary' >
                    {qtyText} <DownOutlined />
                </Button>
            </Dropdown>
        </Row>
    )
}

export default DownloadVideo;