import express, { Request, Response } from "express";
import loginRoutes from "./src/Api/Routes/login.routes";
import categoriesRoutes from "./src/Api/Routes/categories.routes";
import detailsRoutes from "./src/Api/Routes/details.routes";

import cors from "cors";
import bodyParser from "body-parser";

export const app = express();
const port = process.env.SERVER_PORT || 5000;

// Configure express to use middlewares that accepts json format with a limit of 50mb
app.use(express.json({ limit: "50mb" }));
// Configure express to use middlewares that parses url encoded bodies with a limit of 50mb
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//By default domain list allows all domains
let domainList = "*";

//Define the cors options to restrict the domain list
var corsOptions = {
  origin: domainList,
  optionsSuccessStatus: 200, // For legacy browser support
};

//Apply the cors options
app.use(cors(corsOptions));

// RUTAS
app.use(loginRoutes);
app.use(categoriesRoutes);
app.use(detailsRoutes);

app.listen(port, () => {
  console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
});
