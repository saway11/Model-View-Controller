const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

const dashBoard = require('./dashboard-routes');

router.use('/', homeRoutes);