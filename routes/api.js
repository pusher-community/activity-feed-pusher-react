var Pusher = require('pusher');
var Measure  = require('../models/measure');
var express = require('express');
var router = express.Router();

var pusher = new Pusher({
  appId      : process.env.PUSHER_APP_ID,
  key        : process.env.PUSHER_APP_KEY,
  secret     : process.env.PUSHER_APP_SECRET,
  encrypted  : true,
});
var channel = 'events_to_be_shown';

/* CREATE */
router.post('/new', function (req, res) {
  Measure.create({
    measure: req.body.measure,
    unit: req.body.unit,
    insertedAt: Date.now(),
  }, function (err, measure) {
    if (err) {
      console.log('CREATE Error: ' + err);
        res.status(500).send('Error');
    } else {
      pusher.trigger(
        channel,
        'created', 
        {
          name: 'created',
          id: measure._id,
          date: measure.insertedAt,
          measure: measure.measure,
          unit: measure.unit,
        }
      );

      res.status(200).json(measure);
    }
  });
});

router.route('/:id')

  /* UPDATE */
  .put((req, res) => {
    Measure.findById(req.params.id, function (err, measure) {
      if (err) {
        console.log('PUT Error: ' + err);
        res.status(500).send('Error');
      } else if (measure) {
        measure.updatedAt = Date.now();
        measure.measure = req.body.measure;
        measure.unit = req.body.unit;

        measure.save(function () {
          pusher.trigger(
            channel,
            'updated', 
            {
              name: 'updated',
              id: measure._id,
              date: measure.updatedAt,
              measure: measure.measure,
              unit: measure.unit,
            }
          );

          res.status(200).json(measure);
        });
     } else {
        res.status(404).send('Not found');
      }
    });
  })

  /* DELETE */
  .delete((req, res) => {
    Measure.findById(req.params.id, function (err, measure) {
      if (err) { 
        console.log('DELETE Error: ' + err);
        res.status(500).send('Error');
      } else if (measure) {
        measure.remove(function () {
          pusher.trigger(
            channel,
            'deleted', 
            {
              name: 'deleted',
              id: measure._id,
              date: measure.updatedAt ? measure.updatedAt : measure.insertedAt,
              measure: measure.measure,
              unit: measure.unit,
            }
          );

          res.status(200).json(measure);
        });
     } else {
        res.status(404).send('Not found');
      }
    });
  });

module.exports = router;