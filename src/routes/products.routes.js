import {Router} from 'express';
const router = Router();
import { createProduct, deleteProduct, getAllProducts, getProdutById, searchProduct, updateProduct } from '../controllers/products.controllers.js';
import  auth  from "../middlewares/auth.middlewares.js";

router.get("/products",getAllProducts);
router.get("/products/search",auth,searchProduct);
router.get("/products/:id",auth, getProdutById);
router.post("/products",auth, createProduct);
router.put("/products/:id",auth, updateProduct);
router.delete("/products/:id",auth, deleteProduct);


export default router;