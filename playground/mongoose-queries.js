const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5c3e341be85143b2d600e93111';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found.');
//     }
//     console.log(todo)
// }).catch((e) => console.log(e));


var userId = '5c3900c04cf2f7a181607ff7';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User does not exist');
    }
    
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));