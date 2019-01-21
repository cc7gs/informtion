import React, { PureComponent } from 'react';
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';
import {getUserList} from '../redux/chart.redux'
import {connect} from 'react-redux'
const Header = Card.Header;
const Body = Card.Body;

/**
 * Boss页面加载所有cow 信息(牛人)
 */

class Boss extends PureComponent {
 
  componentDidMount() {
    this.props.getUserList('cow');
  }
  render() {
   const {userList}=this.props;
    return (
      <>
        <WingBlank>
            <WhiteSpace></WhiteSpace>
          {userList.map(item => (
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

const mapStateProps=(state)=>{
  console.log(state);
  return {...state.chartUser}
}
const mapDispatchProps={
  getUserList
}
export default connect(mapStateProps,mapDispatchProps)(Boss);
