const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {

        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Catagory.findOne({
    where: {
      id: req.params.id,
    },
    include:{
      model: Product,
      // be sure to include its associated Products
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })

  .then((dbCatagoryData) => {
    if (!dbCatagoryData){
      res.status(404).json({message:"No catagory with this id"});
      return;
    }
    res.json(dbCatagoryData);
  })
  .catch((err) =>{
    console.log(err);
      res.status(500).json(err);
  })
  
});

router.post('/', (req, res) => {
  // create a new category
  Catagory.create({
    catagory_name: req.body.catagory_name,
  })
  .then((dbProductData)=>res.json(dbProductData))
  .catch((err) =>{
    console.log(err);
      res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Catagory.update(
    {
      catagory_name: req.body.catagory_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )

  .then((dbCatagoryData) => {
    if (!dbCatagoryData){
      res.status(404).json({message:"No catagory with this id"});
      return;
    }
    res.json(dbCatagoryData);
  })
  .catch((err) =>{
    console.log(err);
      res.status(500).json(err);
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Catagory.destroy({
    where:{
      id: req.params.id,
    }
  })
  .then((dbCatagoryData) => {
    if (!dbCatagoryData){
      res.status(404).json({message:"No catagory with this id"});
      return;
    }
    res.json(dbCatagoryData);
  })
  .catch((err) =>{
    console.log(err);
      res.status(500).json(err);
  })
});

module.exports = router;
