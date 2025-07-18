import express from 'express';
import cors from 'cors';
import authRouter from "./src/routes/auth.routes.js";
import router from './src/routes/products.routes.js';
import dotenv from 'dotenv';

// Importando dotenv para manejar variables de entorno
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para manejar JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API REST ecommerse de NodeJS" });
})
app.use("/api",router);

app.use("/api/auth", authRouter);
app.use((req,res,next)=>{
  res.status(404).json({error:"error 404, Gisele Ortiz, no se ha encontrada la ruta solicitada"});
})
app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
);