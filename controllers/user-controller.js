// const user = require('../models/user');
const user = require('../models/user');

const userController = {
    userGetAll(req, res) {
        console.log("userGetAll");
    },
    
    userGetSingle(req, res) {
        console.log("userGetSingle");
    },
    
    userPostNew(req, res) {
        console.log("userPostNew");
        const body = req.body;
        console.log(JSON.stringify(body));
        user.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));    
    },    
    
    userPutModified(req, res) {
        console.log("userPutModified");
    },
    
    userDelete(req, res) {
        console.log("userDelete");
    },
}

// export the controller
module.exports = userController;