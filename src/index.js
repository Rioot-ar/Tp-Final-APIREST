import express from "express";
import cors from "cors";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js"
import { authentication } from "./middlewares/authentication.js";

// import {db}from './config/db.js'
//settings
const app = express();
const PORT = process.env.PORT || 3000;
app.set("PORT",PORT);


// middlewares
app.use(cors())
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/products",authentication ,productRoutes);
app.use("/auth", authRoutes);

app.use((req,res,next)=>{
  res.status(404).send('Recurso no encontrado o ruta invalida')
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
