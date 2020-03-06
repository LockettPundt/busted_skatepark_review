const express = require('express'),
  router = express.Router(),
  ParksModel = require('../models/parks');

router.get('/', async (req, res, next) => {
  const parkData = await ParksModel.getAll();
  console.log(parkData);
  res.render('template', {
    locals: {
      title: 'List of Parks',
      parkData: parkData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.get('/:id?', async (req, res, next) => {
  console.log('these are the params', req.params);
  const parkId = req.params.id;
  const parkData = await ParksModel.getById(parkId);
  console.log('This is the park data', parkData);
  const reviewData = await ParksModel.getReviewsById(parkId);
  console.log('this is the review data', reviewData);
  res.render('template', {
    locals: {
      title: parkData.name,
      parkData: parkData,
      reviewData: reviewData
    },
    partials: {
      partial: 'partial-single-park'
    }
  });
});

module.exports = router;
