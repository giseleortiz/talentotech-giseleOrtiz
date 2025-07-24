//import { getAllProducts, searchProduct, getProdutById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controllers.js';//
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROYECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };