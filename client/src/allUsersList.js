import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableComp from "./common/table";
import Loading from './common/loading';

const AllUsersList = props => {
  const { usersList } = props;
  
  useEffect(() => {
    async function getUsersList() {
      debugger
      let usersList = await fetch('http://localhost:3000/users');
      usersList = await usersList.json()
      props.setUsersList(usersList)
    }
    getUsersList()
  }, [])

  return (
    <div className="row justify-content-center mt-5">
      {!usersList && <Loading />}
      {usersList && usersList.length && 
       <div className="col-auto col-md-6">
          <h2 className="mb-0 pb-1">All Users</h2>
          <small className="text-muted">Users and their age</small>
          <TableComp 
            theadData={Object.keys(usersList[0])} 
            tbodyData={usersList} />
        </div>
      }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    usersList: state.userReducer.usersList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsersList: payload => dispatch({ type: 'SET_USERS_LIST', payload})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AllUsersList);
