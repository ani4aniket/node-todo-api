const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
// 
// Todo.findOneAndRemove({_id: '5c35e12113a2a9fd0099474f'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c35e12113a2a9fd0099474f').then((todo) => {
  console.log(todo);
});
