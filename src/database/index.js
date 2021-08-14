'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {

    const dataAccessMethod = () => {
        // fill me in :)
        let usersWithItem = _.filter(db.usersById, userInfo => {
            return _.indexOf(db.itemsOfUserByUsername[userInfo.username], item) !== -1;
        });
        let listOfAgesOfUsersWithItem = Object.values(Array.from(_(usersWithItem)
        .groupBy('age')))
        .map(user => ({
          age: user[0].age,
          count: user.length
        }));
        return listOfAgesOfUsersWithItem;
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
