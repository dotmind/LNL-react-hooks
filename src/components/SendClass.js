import React, { PureComponent } from 'react';
import { Button, message } from 'antd';

class SendClass extends PureComponent {
  showAlert = () => {
    const { item } = this.props;
    message.success(`Followed ${item}`);
  };

  handleClick = () => {
    setTimeout(this.showAlert, 3000);
  };

  render() {
    return <Button type={'danger'} onClick={this.handleClick}>Suivre (from Class)</Button>;
  }
};

export default SendClass;