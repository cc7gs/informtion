import React, { PureComponent } from 'react';
import axios from 'axios';
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';
const Header = Card.Header;
const Body = Card.Body;
/**
 * Cow页面加载所有Boss 信息(牛人)
 */
class Cow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get('user/list?type=boss').then(({ status, data: { code, data } }) => {
      if (status === 200 && code === 0) {
        this.setState({
          data
        });
      }
    });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <WingBlank>
            <WhiteSpace></WhiteSpace>
          {data.map(item => (
            item.avatar?(<Card key={item._id}>
              <Header
                title={item.user}
                thumb={require(`./img/${item.avatar}.png`)}
                extra={<span>{item.title}</span>}
              />
             <Body>
                 {item.desc.split('\n').map(v=>(
                     <div key={v}>{v}</div>
                 ))}
             </Body>
            </Card>):null
          ))}
        </WingBlank>
      </>
    );
  }
}
export default Cow;
