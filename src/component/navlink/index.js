import React from 'react';
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
class NavLink extends React.Component {
  render() {
    let { navList } = this.props;
    const {pathname}=this.props.location;
    navList=navList.filter(item => !item.hide);
    return (
      <TabBar
        tabBarPosition='bottom'
      >
        {navList.map(item => (
          <TabBar.Item 
            title={item.title}
            key={item.text}
            icon={{uri: require(`./img/${item.icon}.png`)}}
            selected={pathname===item.path}
            selectedIcon={{uri:require(`./img/${item.icon}-active.png`)}}
            onPress={()=>{
                this.props.history.push(item.path)
            }}
          />
        ))}
      </TabBar>
    );
  }
}
export default withRouter(NavLink);
