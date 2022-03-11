
const express = require('express');

const User = require('../model/users-model')



const router = express.Router();




router.get('/', (req, res, next) => {
    User.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next)
  });


module.exports = router
