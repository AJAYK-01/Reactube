import React, { useState } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {

    const bgColor = '#1D3557';

    const { videoLink, onClose } = props;
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
                
                <div style={{display: 'flex', justifyContent: 'center', backgroundColor: bgColor}} >
                    <ReactPlayer url={videoLink} playing={true} controls={true} pip={true} />
                </div>
            </Modal>
        </div>
    );
};

export default VideoPlayer;