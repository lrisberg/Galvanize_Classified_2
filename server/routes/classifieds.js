'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('cl')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then((cl) => {
      res.send(cl);
    });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  knex('cl')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .where('id', id)
    .then((cl) => {
      res.send(cl[0]);
    });
});

router.post('/', (req, res, next) => {
  let body = req.body;

  knex('cl')
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .insert({
      title: body.title,
      description: body.description,
      price: body.price,
      item_image: body.item_image
    })
    .then((cl) => {
      res.send(cl[0])
    });
});

router.patch('/:id', (req, res, next) => {
  let id = req.params.id;
  let body = req.body;

  knex('cl')
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .where('id', id)
    .update({
      title: body.title,
      description: body.description,
      price: body.price,
      item_image: body.item_image
    })
    .then((cl) => {
      res.send(cl[0])
    });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  knex('cl')
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .where('id', id)
    .del()
    .then((cl) => {
      res.send(cl[0])
    });
});

module.exports = router;
