const mongoose = require('mongoode')
const url = 'mongodb://localhost:27017/todo';

mongoose.connect(url, {useNewUrlParser: true});
