const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(session({
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    maxAge: Date.now() + (30 * 86400 * 1000),
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}));
const helpers = require('./utils/helpers')