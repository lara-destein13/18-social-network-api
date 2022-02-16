const { json } = require('body-parser');
const { use } = require('express/lib/application');
const user = require('../models/user');

const userController = {
    userGetAll(req, res) {
        console.log("userGetAll");

        const success = (data) => {
            console.log("userGetAll success");  
            res.json(data);    
        }
    
        const fail = (error) => {
            console.log(fail);  
            console.log(`userGetAll fail: ${error}`);
            res.status(400).json(error);
        }
           
        user.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(success)
            .catch(fail);
    },
    
    userGetSingle(req, res) {
        console.log("userGetSingle");
        const params = req.params;
        const success = (data) => {
            console.log("userGetSingle success");  
            res.json(data);    
        }
    
        const fail = (error) => {
            console.log(`userGetSingle fail: ${error}`);
            res.status(400).json(error);
        }
           
        user.findOne({_id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(success)
            .catch(fail);
    },
    
    userPostNew(req, res) {
        console.log("userPostNew");
        const body = req.body;

        const success = (data) => {
            console.log("userPostNew success");
            res.json(data);    
        }
 
        const fail = (error) => {
            console.log(`userPostNew fail: ${error}`);
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
            console.log(`userPutModified success`);
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(data);    
        }
 
        const fail = (error) => {
            console.log(`userPutModified: ${error}`);
            res.status(400).json(error);
        }

        user.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(success)
            .catch(fail);
    },
    
    userDelete(req, res) {
        console.log("userDelete")
        const params = req.params;
        console.log("userDelete");
        const success = (data) => {
            console.log("userDelete success") 
            res.json(data);   
        }
 
        const fail = (error) => {
            console.log(`userDelete fail: ${error}`);
            res.status(400).json(error);
        }

        user.findOneAndDelete({ _id: params.id })
        .then(success)
        .catch(fail);
    },
}

// export the controller
module.exports = userController;