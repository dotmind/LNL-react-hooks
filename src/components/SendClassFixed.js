import React, { PureComponent } from 'react';
import { Button, message } from 'antd';

class SendClassFixed extends PureComponent {
  showAlert = (item) => {
    message.success(`${item} ajouté`);
  };

  handleClick = () => {
    const { item } = this.props;
    setTimeout(() => this.showAlert(item), 3000);
  };

  render() {
    return (
      <>
        <Button type={'dashed'} onClick={this.handleClick}>Ajouter</Button>
        <span className={'component-type'}>(Class + patch)</span>
      </>
    );
  }
};

export default SendClassFixed;