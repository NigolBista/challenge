import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownComp = (props) => {
  const {dropdownList} = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const handleDropdown = async (item) => {
      console.log(item)
    let usersList = await fetch(`http://localhost:3000/users/age?itemToLookup=${item}`);
    usersList = await usersList.json()
    props.setSelectedItem(item);
    props.setAgeOfUsersWithItemList(usersList)
  }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        {dropdownList.map((item,index) => {
            return <DropdownItem key={index} onClick={() => handleDropdown(item)}>{item}</DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

const mapStateToProps = state => {
    return {
      dropdownList: state.userReducer.dropdownList,
      selectedItem: state.userReducer.selectedItem
    };
  };
  
  const mapDispatchToProps = dispatch => {
      return {
          setAgeOfUsersWithItemList: payload => dispatch({ type: 'SET_AGE_OF_USERS_WITH_ITEM', payload}),
          setSelectedItem: payload => dispatch({type:'SET_SELECTED_ITEM',payload})
          
      };
    };
  
  export default connect(mapStateToProps,mapDispatchToProps)(DropdownComp);
  
  