//负责显示boss 和 cow 信息
import React from 'react'
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';
const Header = Card.Header;
const Body = Card.Body;
class UserCard extends React.Component{
    render(){
        const {userList}=this.props;
        return(
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
                     {item.type==='boss'?<div>公司:{item.company}</div>:null}
                     {item.desc.split('\n').map(v=>(
                         <div key={v}>{v}</div>
                     ))}
                    {item.type==='boss'?<div>{item.money}</div>:null}
                 </Body>
                </Card>):null
              ))}
            </WingBlank>  
            </>
        )
    }
}
export default UserCard;