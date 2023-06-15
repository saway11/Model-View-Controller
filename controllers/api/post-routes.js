const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require("../../models");
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        oder: [['created_at', 'DESC']],
        atrributes: [
            'id',
            'post',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});