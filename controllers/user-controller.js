// const user = require('../models/user');
const user = require('../models/user');

const userController = {
    userGetAll(req, res) {
        console.log("userGetAll");
    },
    
    userGetSingle(req, res) {
        console.log("userGetSingle");
    },
    
    // userPostNew(req, res) {
    //     console.log("userPostNew");
    //     const body = req.body;
    //     console.log(JSON.stringify(body));
    //     user.create(body)
    //         .then(dbUserData => res.json(dbUserData))
    //         .catch(err => res.status(400).json(err));    
    // },    

    userPostNew(req, res) {
        console.log("userPostNew");
        const body = req.body;
        console.log(JSON.stringify(body));
        
        const success = (dbUserData) => {
            console.log('success');
            res.json(dbUserData);
        };
        
        const failure = (error) => {
            console.log('failure');
            console.log(JSON.stringify(error, null, 4));
            res.status(400).json(error);
        }
        
        user.create(body).then(success).catch(failure);
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