const express = require('express'),
  ParksModel = require('../models/parks'),
  router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const parkList = await ParksModel.getAll();
  console.log(parkList, 'this is the parklist');
  res.render('template', {
    locals: {
      title: 'Time to shred bruh!',
      parkData: parkList
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
