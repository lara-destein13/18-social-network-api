// const user = require('../models/user');
const { json } = require('body-parser');
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

        const success = (data) => {
            res.json(data);    
        }
 
        const fail = (error) => {
            res.status(400).json(error);
        }

        user.create(body)
            .then(success)
            .catch(fail);    
    },    
    
    userPutModified(req, res) {
        console.log("userPutModified");
        const params = req.params;
        const body = req.body;

        const success = (data) => {
            if (!data) {
                res.status(404).json({ message: 'No pizza found with this id!' });
                return;
            }
            res.json(data);    
        }
 
        const fail = (error) => {
            res.status(400).json(error);
        }

        user.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(success)
            .catch(fail);
    },
    
    userDelete(req, res) {
        console.log("userDelete");
    },
}

// export the controller
module.exports = userController;