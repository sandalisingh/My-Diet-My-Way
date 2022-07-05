const { json } = require('body-parser');
var mongoose = require('mongoose');


const UserLoginModel = mongoose.model("UserLoginModel", new mongoose.Schema({ Username: String, Email: String, Password:String}));

//---------------------------------------- U S E R-----------------------------------------------

module.exports.getUsersList = async () => {
    return await UserLoginModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.addUser = async (newUser) => {
    await (new UserLoginModel(newUser)).save();
}

module.exports.UsernameExsits = async (entryUser) => {
    const var1 = await UserLoginModel.findOne({Username: entryUser.Username});
    if(var1 === true ) {
        return true;
    }
    return false;
}

module.exports.EmailExsits = async (entryUser) => {
    const var2 = await UserLoginModel.findOne({Email: entryUser.Email});
    if(var2 === true) {
        return true;
    }
    return false;
}

module.exports.UserExsits = async (entryUser) => {
    let var1;
    if(entryUser){
        var1 = await UserLoginModel.findOne({Username: entryUser.Username, Email: entryUser.Email, Password:entryUser.Password});
    }
    if(var1) {
        return true;
    }
    return false;
}

module.exports.loginUser = (entryUser) => {
    if ( this.UserExsits(entryUser) ) {
        return true;
    }
    return false;
}

module.exports.singupUser = (entryUser) => {
    if(this.UsernameExsits(entryUser) || this.EmailExsits(entryUser)) {
        return false;
    }
    addUser(entryUser);
    return true;
}

module.exports.LoggedInAsDietitian = (entryUser) => {
    if( entryUser.Username === "dietitianRashu") {
        return true;
    } else {
        return false;
    }
}