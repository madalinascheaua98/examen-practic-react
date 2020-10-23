import React from 'react';
import Moment from 'react-moment';
import _ from 'lodash'
import {connect} from 'react-redux';


const UserItem  =  (props) => {
    const {users} = props;
    let newUser = [...users];
    let sortedUserList = [];
    let sortedUserList1 = [];
    let sortedUserList2 = [];
    let sortedUserList3 = [];
    if (props.check.option === 'name')  newUser = _.sortBy(users, ['nume'])
    else if (props.check.option === 'value')  newUser = _.sortBy(users, ['salariu'])
    
    if (props.check.check1.length === 1)  sortedUserList1 = newUser.filter((user) => user.salariu <2500)
    if (props.check.check2.length === 1)  sortedUserList2 = newUser.filter((user) => user.salariu >=2500 && user.salariu<4000)
    if (props.check.check3.length === 1) sortedUserList3 = newUser.filter((user) => user.salariu>4000)
     sortedUserList = [...sortedUserList1,...sortedUserList2,...sortedUserList3] 
    if (props.check.check1.length === 0 && sortedUserList.length === 0 && props.check.check2.length ===0 && props.check.check3.length ===0 )  sortedUserList = [...newUser]

    return sortedUserList.map((user, index) => {

    return (
    <tr key = {index}>
        <td>{user.nume}</td>
        <td>{user.prenume}</td>
        <td>{user.meserie}</td>
        <td>{user.salariu}</td>
        <td><Moment format="DD/MM/YYYY">{users.data}</Moment></td>
     </tr>)
    })
        
}

const mapStateToProps = (state) => {
    return {
        check : state.checkReducer,
        users : state.userReducer.users
    }
}

export default connect(mapStateToProps,null)(UserItem)