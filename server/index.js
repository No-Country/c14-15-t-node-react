const express = require("express");
const cors = require("cors");
const app = express();
const dbConnection = require("./database/db");
const { config } = require("dotenv");

const { userRoutes } = require("./routes/user");
const { productRoutes } = require("./routes/product");
const { categoryRoutes } = require("./routes/category"); // io
const { orderRoutes } = require('./routes/order.js')
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");
const path = require("path");
const authRoutes = require("./routes/auth");

//env
config();
dbConnection();

const swaggerSpect = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API E-Commerce Green",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
      {
        url: "https://api-greeni.onrender.com",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

//swagger config
app.use(
  "/api/v1/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDoc(swaggerSpect))
);

//cors
app.use(cors());

//parse body
app.use(express.json());

//disable powered
app.disable("x-powered-by");

//routes
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/products", productRoutes);

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/orders", orderRoutes);

//listen
app.listen(process.env.PORT || 5000, () => {
  console.log(`El servidor esta online en el puerto ${process.env.PORT}`);
});
