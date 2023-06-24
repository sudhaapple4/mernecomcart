const express = require('express');
const { fetchBrands, createBrand } = require('../controller/BrandController');
const router = express.Router();
console.log('from rand router')
router.get('/',fetchBrands)
      .post('/',createBrand);

exports.router=router;