import React from 'react';
import { Button, message } from 'antd';

const SendStateLess = props => {
  const showAlert = () => {
    message.success(`${props.item} ajouté`);
  };

  const handleClick = () => {
    setTimeout(showAlert, 3000);
  };

  return (
    <>
      <Button type={'primary'} onClick={handleClick}>Ajouter</Button>
      <span className={'component-type'}>(Fonction)</span>
    </>
  );
};

export default SendStateLess;