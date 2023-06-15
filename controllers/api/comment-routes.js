const router = require('express').Router();
const {
    Comment
} = require('../../models');

router.get('/', (req, res) =>{
    Comment.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});