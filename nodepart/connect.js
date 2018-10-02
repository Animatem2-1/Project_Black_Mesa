var mongoose = require('mongoose')

mongoose.connect('mongodb://test:test1234@ds119663.mlab.com:19663/test1', {useNewUrlParser: true})

var testSchema = new mongoose.Schema({
  item: String
})

var Test = mongoose.model('Test', testSchema)
var itemOne = Test({item: 'this is database test in node.js'}).save(function(err) {
  if (err) throw err
  console.log("item saved");
})
