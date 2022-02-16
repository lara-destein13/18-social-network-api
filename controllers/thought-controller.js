const user = require('../models/user');
const { json } = require('body-parser');
const thought = require('../models/thought');

const thoughtController = {
    thoughtGetAll(req, res) {

        const success = (data) => {
            console.log("thoughtGetAll success");  
            res.json(data);    
        }
    
        const fail = (error) => {
            console.log("thoughtGetAll fail");  
            res.status(400).json(error);
        }
           
        thought.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(success)
            .catch(fail);

        console.log("thoughtGetAll");

    },

    thoughtGetSingle(req, res) {     
        console.log("thoughtGetSingle");
        const params = req.params;
        const success = (data) => {
            console.log("thoughtGetSingle success");
            res.json(data);
        }

        const fail = (error) => {
            console.log("thoughtGetSingle fail");  
            res.status(400).json(error);
        }
           
        thought.findOne({_id: params.id })
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .then(success)
            .catch(fail);

    },
    
    thoughtPostNew(req, res) {
        console.log("thoughtPostNew");
        const params = req.params;
        const body = req.body;

        const success1 = (data) => {
            console.log("thoughtPostNew success1");
            const _id = data._id;
            return user.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
            res.json(data);    
        }

        const success2 = (data) => {
            console.log("thoughtPostNew success2");
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(data);    
        }
 
        const fail = (error) => {
            console.log(`thoughtPostNew fail: ${error}`);
            res.status(400).json(error);
        }

        thought.create(body)
            .then(success1)
            .then(success2)
            .catch(fail);    
    },    
    
    thoughtPutModified(req, res) {
        console.log("thoughtPutModified");
        const params = req.params;
        const body = req.body;

        const success = (data) => {
            console.log("thoughtPutModified success");
            if (!data) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(data);    
        }
 
        const fail = (error) => {
            console.log("thoughtPutModified fail");
            res.status(400).json(error);
        }

        thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(success)
            .catch(fail);
    },
    
    thoughtDelete(req, res) {
        console.log("thoughtDelete");
    },
}

// export the controller
module.exports = thoughtController;