import React from 'react';
import { Button, message } from 'antd';

const SendStateLess = props => {
  const showAlert = () => {
    message.success(`Followed ${props.item}`);
  };

  const handleClick = () => {
    setTimeout(showAlert, 3000);
  };

  return <Button type={'primary'} onClick={handleClick}>Suivre (from StateLess)</Button>
};

export default SendStateLess;