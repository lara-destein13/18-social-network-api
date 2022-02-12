// const user = require('../models/user');
const { json } = require('body-parser');
const thought = require('../models/thought');

const thoughtController = {
    thoughtGetAll(req, res) {
        console.log("thoughtGetAll");
    },
    
    thoughtGetSingle(req, res) {
        console.log("thoughtGetSingle");
    },
    
    thoughtPostNew(req, res) {
        console.log("thoughtPostNew");
        const body = req.body;

        const success = (data) => {
            res.json(data);    
        }
 
        const fail = (error) => {
            res.status(400).json(error);
        }

        thought.create(body)
            .then(success)
            .catch(fail);    
    },    
    
    thoughtPutModified(req, res) {
        console.log("thoughtPutModified");
        const params = req.params;
        const body = req.body;

        const success = (data) => {
            if (!data) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(data);    
        }
 
        const fail = (error) => {
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