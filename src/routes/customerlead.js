let CustomerleadModel = require('../models/customerlead.model');
let express = require('express');
let router = express.Router();

// Create a new customer quote
// POST localhost:3000/customerlead
router.post('/customerlead', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new CustomerleadModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        });

})

router.get('/customerlead', (req, res) => {
    if (!req.query.email) {
        CustomerleadModel.find({}).then(doc => {
                res.json(doc)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        // return res.status(400).send('Missing URL parameter:email');
    } else {
        CustomerleadModel.findOne({
                email: req.query.email
            })
            .then(doc => {
                res.json(doc)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
})

router.put('/customerlead', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter:email');
    }
    CustomerleadModel.findOneAndUpdate({
            email: req.query.email
        }, req.body, {
            new: true
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete('/customerlead', (req, res) => {
    if (!req.query.id) {
        return res.status(400).send('Missing URL parameter:id');
    }
    CustomerleadModel.findOneAndRemove({
            _id: req.query.id
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;