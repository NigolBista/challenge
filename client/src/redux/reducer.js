const initialState = {
    usersList: [],
    ageOfUsersWithItemList: [],
    selectedItem:"",
    dropdownList: ['carrot', 'apple', 'grapes', 'cake','crackers', 'chips', 'tv','ham', 'beef']
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USERS_LIST':
        return {
          ...state,
          usersList: action.payload
        };
        case 'SET_AGE_OF_USERS_WITH_ITEM':
        return {
          ...state,
          ageOfUsersWithItemList: action.payload
        };
        case 'SET_SELECTED_ITEM':
        return {
            ...state,
            selectedItem: action.payload
        };
      default:
        return state;
    }
  }
  