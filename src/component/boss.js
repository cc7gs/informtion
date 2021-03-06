import React, { PureComponent } from 'react';
import {getUserList} from '../redux/chart.redux'
import {connect} from 'react-redux'
import UserCard from './userCard'

/**
 * Boss页面加载所有cow 信息(牛人)
 */

class Boss extends PureComponent {
 
  componentDidMount() {
    this.props.getUserList('cow');
  }
  render() {
   const {userList}=this.props;
   console.log(this.props,'props');
    return (
      <UserCard userList={userList}></UserCard>
    );
  }
}

const mapStateProps=(state)=>{
  return {...state.chartUser}
}
const mapDispatchProps={
  getUserList
}
export default connect(mapStateProps,mapDispatchProps)(Boss);
