const {getproductModel,insertProducts,getAll,upload,signupModel,loginModel,getOurProducts,getOurProductModel,createContactForm} =require('../Controllers/productController');


const {loginValidation,signupValidation,userContactValidation}=require('../Middlewares/authValidation');
const express=require('express');



const router=express.Router();

router.get('/product/:id',getproductModel);
router.get('/ourproduct/:id',getOurProductModel);
router.post('/product/insert',upload.single("image"),insertProducts);
router.post('/product/addToCart,sndToCart')
router.get('/product/all',getAll);
router.get('/ourproducts/all',getOurProducts);
router.post('/contactform',userContactValidation,createContactForm);
router.post('/',loginValidation,loginModel);



router.post('/signup',signupValidation,signupModel);
router.post('/login',loginValidation,loginModel);
module.exports=router;