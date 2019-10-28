import React, { Component } from 'react';
import { Typography, Divider, Select } from 'antd';

import './App.css';
import SendStateLess from './components/SendStateless';
import SendClass from './components/SendClass';
import SendClassFixed from './components/SendClassFixed';

const items = [
  'David',
  'Cédric L.',
  'Greg',
  'Cédric S.',
  'Jasmin',
  'Pierrick',
  'Hugo',
  'Matthieu',
  'Vincent',
  'Nicolas',
  'Axel',
  'Enzo',
];

class App extends Component {
  state = {
    item: items[0],
  };

  _renderSelect = () => {
    const { item } = this.state;
    return (
      <Select
        size={'large'}
        value={item}
        id={'users-select'}
        onChange={item => this.setState({ item })}>
        {items.map(i => <Select.Option key={i} value={i}>{i}</Select.Option>)}
      </Select>
    )
  }

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        {this._renderSelect()}
        <Typography.Title>Profil de {item}</Typography.Title>
        <Divider />
        <p><SendStateLess item={item} /></p>
        <p><SendClass item={item} /></p>
        <p><SendClassFixed item={item} /></p>
      </div>
    );
  }
}

export default App;
