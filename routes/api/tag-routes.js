const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all products
router.get('/', (req, res) => {
  Tag.findAll({
    // associated Product data
    include: [
      {
        model: Product,
        attributes: ['product_name'],
        through: ProductTag,
        as: 'products'
      }
    ]
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get one product
router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id: req.params.id
    },
    // associated Product data
    include: [
      {
        model: Product,
        attributes: ['product_name'],
        through: ProductTag,
        as: 'products'
      }
    ],
    attributes: [
      'id',
      'tag_name'
    ]
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      tag_name: 'purple'
    }
  */
 Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update product
router.put('/:id', (req, res) => {
  /* req.body should look like this...
    {
      tag_name: 'purple'
    }
  */
 Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// delete a product
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagtData => res.json(dbTagtData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
