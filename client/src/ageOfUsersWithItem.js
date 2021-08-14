import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableComp from "./common/table";
import DropdownComp from './common/dropdown';
import Loading from './common/loading';


const AgeOfUsersWithItem = props => {
    const { ageOfUsersWithItemList,selectedItem } = props;

    return (
    <div className="row justify-content-center mt-3">
        <div className="col-auto col-md-6"> 
            <div className="row">
                <div Name="col col-md-10">
                    <h2 className="mb-0 pb-1">Age Demographic of Users With {selectedItem}</h2>
                </div>
                <div className="col col-md-2">
                    <DropdownComp />
                </div> 
                <small className="text-muted">Shows Age Demographic with count</small>
            </div>
            {ageOfUsersWithItemList && ageOfUsersWithItemList.length &&
            <TableComp 
                theadData={Object.keys(ageOfUsersWithItemList[0])} 
                tbodyData={ageOfUsersWithItemList} />
            }
        </div>
    </div>
    )
};

const mapStateToProps = state => {
  return {
    ageOfUsersWithItemList: state.userReducer.ageOfUsersWithItemList,
    selectedItem: state.userReducer.selectedItem
  };
};

const mapDispatchToProps = dispatch => {
    return {
        setAgeOfUsersWithItemList: payload => dispatch({ type: 'SET_AGE_OF_USERS_WITH_ITEM', payload})
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(AgeOfUsersWithItem);
