
import { db } from '../services/firebase.js';
//imp{ collection, getDocs, query, where, doc, getDoc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
export const getAllProducts = async () => {
  try {
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    throw error;
  }
};

export const searchProduct = async ({ name, price, category }) => {
  try {
    const productsRef = db.collection('products');

    let query = productsRef;
    if (name) {
      const nameLower = name.toLowerCase();
      query = query
        .where('name', '>=', nameLower)
        .where('name', '<=', nameLower + '\uf8ff');
    }

    const snapshot = await query.get();

    if (snapshot.empty) return false;


    let results = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

 
    if (price) {
      results = results.filter(item => item.price == price); // == para evitar errores por tipo
    }

 
    if (category) {
      results = results.filter(item => 
        item.categories && item.categories.includes(category.toLowerCase())
      );
    }
    return results;

  } catch (error) {
    throw error
  }
};
  

export const getProductById = async (id) => {
  try {
    const doc = await db.collection('products').doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (data) => {
  try {
    const docRef = await db.collection('products').add(data);
    return { id: docRef.id, ...data };
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const doc = await db.collection('products').doc(id).get();
    if (!doc.exists) return false;

    await db.collection('products').doc(id).delete();
    return { id, ...doc.data() };
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, data) => {
  try {
   
    const docRef = db.collection('products').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) return false;
    await docRef.update(data);
    const updatedDoc = await docRef.get();
   
    return { id: updatedDoc.id, ...updatedDoc.data() };
   
  } catch (error) {
    throw error;
  }
};
