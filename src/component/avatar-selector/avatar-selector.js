import React, { Component } from 'react';
import { Grid, List,Toast } from 'antd-mobile';
export default class avatarSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleAvatar = (el) => {
    this.setState(el);
    this.props.selectAvatar(el.text);
  };
  render() {
    const { icon, text } = this.state;
    const gridHeader = icon ? (
      <div>
        <span>已选择图像</span>
        <img style={{ width: 20 }} src={icon} alt={text} />
      </div>
    ) : (
      '请选择图像'
    );
    const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
      .split(',')
      .map(item => ({
        icon: require(`../img/${item}.png`),
        text: item
      }));

    return (
      <List renderHeader={() => gridHeader}>
        <Grid
          data={avatarList}
          columnNum={5}
          onClick={this.handleAvatar}
        />
      </List>
    );
  }
}
