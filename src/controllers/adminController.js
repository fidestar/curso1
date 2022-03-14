const mongoose = require('mongoose');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const myfun  = require('../libs/myfunctions');


exports.users = async (req, res) => {
    const data = await User.find({},{first_name:1, last_name:1, username:1, _id:1})
    myfun.refresh_token(req, res, data, "Users")
};

exports.points = async (req, res) => {
    const data = await User.find({},{first_name:1, last_name:1, username:1, _id:1})
    myfun.refresh_token(req, res, data, "Puntos")
};