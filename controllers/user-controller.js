// const user = require('../models/user');
const { json } = require('body-parser');
const { use } = require('express/lib/application');
const user = require('../models/user');

const userController = {
    userGetAll(req, res) {

        const success = (data) => {
            console.log("success");  
            res.json(data);    
        }
    
        const fail = (error) => {
            console.log("fail");  
            res.status(400).json(error);
        }
           
        user.find({})
            .then(success)
            .catch(fail);

        console.log("userGetAll");

    },
    
    userGetSingle(req, res) {
        console.log("userGetSingle");
        const params = req.params;
        const success = (data) => {
            console.log("success");  
            res.json(data);    
        }
    
        const fail = (error) => {
            console.log("fail");  
            res.status(400).json(error);
        }
           
        user.findOne({_id: params.id })
            .then(success)
            .catch(fail);
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
                res.status(404).json({ message: 'No user found with this id!' });
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
        const params = req.params;
        console.log("userDelete");
        const success = (data) => {
            console.log("deletesucceded") 
            res.json(data);   
        }
 
        const fail = (error) => {
            console.log("deletefailed")
            res.status(400).json(error);
        }

        user.findOneAndDelete({ _id: params.id })
        .then(success)
        .catch(fail);
    },
}

// export the controller
module.exports = userController;