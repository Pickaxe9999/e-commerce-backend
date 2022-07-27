const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    //associated Product data
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id:  req.params.id
    },
    //associated Product data
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
   /* req.body should look like this...
    {
      category_name: "paints",
    }
  */
    Category.create(req.body)
    .then(category => res.status(200).json(category))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  /* req.body should look like this...
    {
      category_name: "paints",
    }
  */
    Category.update(req.body,{
      where: {
        id: req.params.id
      }
    })
    .then(category => res.status(200).json(category))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  /* req.body should look like this...
    {
      category_name: "paints",
    }
  */
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(category => res.status(200).json(category))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
