import React, { useState } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';
import DownloadVideo from './DownloadVideo';

const VideoPlayer = (props) => {

    const bgColor = 'grey';

    const { videoLink, title, onClose } = props;
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleCancel = () => {
        setIsModalVisible(false);
        onClose();
    };

    return (
        <div>
            <Modal visible={isModalVisible}  onCancel={handleCancel} footer={null} centered={true}
                closeIcon={<div/>} width='640px' destroyOnClose={true}
                bodyStyle={{display: 'contents', justifyContent:'center'}}>
                
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',
                    backgroundColor: bgColor}} >
                    <ReactPlayer url={videoLink} style={{maxWidth: '100%'}} playing={true} controls={true} pip={true} />
                    
                    <DownloadVideo link={videoLink} title={title} stopPlay={handleCancel} />
                    
                </div>
            </Modal>
        </div>
    );
};

export default VideoPlayer;