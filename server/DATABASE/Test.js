const { json } = require('body-parser');
var mongoose = require('mongoose');

// var date = new Date();
// date = date.toDateString();
// console.log(date);

mongoose.connect("mongodb://localhost:27017/DietDB", { useNewUrlParser: true});
const UserLoginModel = mongoose.model("UserLoginModel", new mongoose.Schema({ Username: String, Email: String, Password:String}));
// const BlogsModel =  mongoose.model("BlogsModel", new mongoose.Schema({ Title: String, Date: { type: String, default: date }, Image: String, Content: String, Likes: { type: Number, default:0 }}));
// // const QnAModel = mongoose.model("QnAModel", new mongoose.Schema({ Username: String, Date: { type: Date, default: Date.now }, Question: String, Answer: String, isAnswered: Boolean, Likes: Number}));
// const FeedbackModel = mongoose.model("FeedbackModel", new mongoose.Schema({ Name: String, Email: {type: mongoose.SchemaTypes.Email, required: true}, Feedback: String}));
// const NewsletterModel = mongoose.model("NewsletterModel", new mongoose.Schema({ Name: String, Email: {type: mongoose.SchemaTypes.Email, required: true}, PhoneNo: String}));

//---------------------------------------- B L O G S-----------------------------------------------
// const getBlogs = async () => {
//     return await BlogsModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
// }

// const deleteBlog = async (delID) => {
//     await BlogsModel.deleteOne( { _id : delID} );
// }

// const addBlog = async (newBlog) => {
//     await (new BlogsModel(newBlog)).save();
// }

// // deleteBlog("6268c347b217d65ed3c62bb3");



// // // addBlog({ Title: "The Mediterranean diet", 
// // // Date:"Sun Apr 24 2022", 
// // // Image:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_51/1406125/fruits-veggies-today-main-190130.jpg",
// // // })
// // // console.log("added");
// // // console.log()


// // //---------------------------------------- U S E R-----------------------------------------------
// // // const getUs = async () => {
// // //     return await BlogsModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
// // // }

// // // const deleteBlog = async (delID) => {
// // //     await foodlists.deleteOne( { _id : delID} );
// // // }

const addUser = async (newUser) => {
    await (new UserLoginModel(newUser)).save();
}

const createUser = async (entryUser) => {
    const var1 = await UserLoginModel.findOne({Userame: entryUser.Userame});
    const var2 = await UserLoginModel.findOne({Email: entryUser.Email});
    if(var1 === true || var2 === true) {
        return true;
    }
    addUser(entryUser);
    return false;
}

// // UserLoginModel.deleteMany({});

createUser({Username: "anonymous", Email:"anonymous@gmail.com", Password:"Password"});

// const UserExsits = async (entryUser) => {
//     var CheckUser = {
//         Username: entryUser.Username, 
//         Email: entryUser.Email, 
//         Password:entryUser.Password
//     };

//     // var var1 = false;
    
//     // if(entryUser){
//     //     var1 = await UserLoginModel.findOne(CheckUser);
//     // }
    
//     // if(var1 == true) {
//     //     console.log(var1);
//     //     return true;
//     // }
    
//     // return false;

//     UserLoginModel.find(entryUser, function (err, data) {
//         if (err){
//             console.log(err);
//         }
//         else{
//             console.log("Found : ", data);
//         }
//     });
// }

// UserExsits({Username:"Sandali", Email:"sandalisingh.02@gmail.com", Password:"Singh"})

// const getUsersList = async () => {
//     return await UserLoginModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
// }

// getUsersList();