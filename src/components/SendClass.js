import React, { PureComponent } from 'react';
import { Button, message } from 'antd';

class SendClass extends PureComponent {
  showAlert = () => {
    const { item } = this.props;
    message.success(`${item} ajouté`);
  };

  handleClick = () => {
    setTimeout(this.showAlert, 3000);
  };

  render() {
    return (
      <>
        <Button type={'danger'} onClick={this.handleClick}>Ajouter</Button>
        <span className={'component-type'}>(Class)</span>
      </>
    );
  }
};

export default SendClass;