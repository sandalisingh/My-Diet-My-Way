const { json } = require('body-parser');
var mongoose = require('mongoose');

var date = new Date();
date = date.toDateString();
// console.log(date);

const BlogsModel =  mongoose.model("BlogsModel", new mongoose.Schema({ Title: String, Date: { type: String, default: date }, Image: String, Content: String, Likes: { type: Number, default:0 }}));


//---------------------------------------- B L O G S-----------------------------------------------

module.exports.getBlogsList = async () => {
    return await BlogsModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.deleteBlog = async (delID) => {
    console.log("to be deleted - ");
    console.log(delID);
    await BlogsModel.deleteOne( { _id : delID} );
}

module.exports.addBlog = async (newBlog) => {
    await (new BlogsModel(newBlog)).save();
}