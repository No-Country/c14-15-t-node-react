const { Router } = require("express");
const productController = require("../controllers/productController");
const userExposed = require("../helper/userExposed");

const productRoutes = Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 */

//get product by id
/**
 * @swagger
 * paths:
 *  /api/v1/products/{productId}:
 *    get:
 *      summary: Get product by id
 *      tags: [Product]
 *      parameters:
 *        - name: productId
 *          in: path
 *          required: true
 *          schema:
 *            type: string
 *          description: productId
 *      responses:
 *        201:
 *          description: Product found
 *        400:
 *          description: Some of the body parameters are not correct in their format
 *        409:
 *          description: Something in the required ID is wrong
 */

productRoutes.get("/:productId", productController.getProductById);

//get product by Category
/**
 * @swagger
 * /api/v1/products/categories/{category}?page=1:
 *  get:
 *    summary: Get products by category
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: string
 *          description: Name category
 *      - in: query
 *        name: page
 *        required: true
 *        schema:
 *          type: number
 *          description: Number page 1
 *    responses:
 *      201:
 *        description: List products found
 *      400:
 *        description: Some of the body parameters are not correct in their format
 *      409:
 *        description: Something in the required ID is wrong
 */

productRoutes.get(
  "/categories/:category",
  productController.getProductByCategory
);

//Get product by category and brand - pagination
/**
 * @swagger
 * /api/v1/products/categories/{category}/brand/{brand}?page=1:
 *  get:
 *    summary: Get products by category and brand
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: string
 *          description: Name category
 *      - in: path
 *        name: brand
 *        required: true
 *        schema:
 *          type: string
 *          description: Name brand
 *      - in: query
 *        name: page
 *        required: true
 *        schema:
 *          type: number
 *          description: Page number
 *    responses:
 *      201:
 *        description: List products found
 *      400:
 *        description: Some of the body parameters are not correct in their format
 *      409:
 *        description: Something in the required ID is wrong
 */
productRoutes.get(
  "/categories/:category/brand/:brand",
  productController.getProductByBrand
);

//get product Recent Products Pagination
/**
 * @swagger
 * /api/v1/products?page=1:
 *  get:
 *    summary: Get products by recent
 *    tags: [Product]
 *    parameters:
 *      - in: query
 *        name: page
 *        required: true
 *        schema:
 *          type: number
 *          description: Page number page
 *    responses:
 *      201:
 *        description: List products found
 *      400:
 *        description: Some of the body parameters are not correct in their format
 *      409:
 *        description: Something in the required ID is wrong
 */

productRoutes.get("/", productController.getProductRecent);

//Create product

/**
 * @swagger
 *  components:
 *    schemas:
 *      ProductCreate:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            example: ISJAKT
 *          subtitle:
 *            type: string
 *            example: Lámpara pie/lectura LED
 *          description:
 *            type: string
 *            example: Dos lámparas de estilo moderno
 *          detail:
 *            type: string
 *            example: Proporciona iluminación general y de lectura
 *          technical_info:
 *            type: object
 *            properties:
 *              driver_model:
 *                type: string
 *                example: ICPSW24-19-1
 *              energy_use:
 *                type: string
 *                example: 16.5 kWh/1.000 h
 *          measures:
 *            type: object
 *            properties:
 *              height:
 *                type: number
 *                example: 180
 *              width:
 *                type: number
 *                example: 50
 *              base_diameter:
 *                type: number
 *                example: 24
 *          energy_efficiency:
 *            type: string
 *            example: A
 *          price:
 *            type: number
 *            example: 100.00
 *          available_quantity:
 *            type: number
 *            example: 10
 *          images:
 *            type: object
 *            properties:
 *              cover:
 *                type: url
 *                example: "https://portalsolar.com.ar/wp-content/uploads/2023/10/Como-funcionan-los-paneles-solares-1.jpeg"
 *              picture_1:
 *                type: url
 *                example: "https://portalsolar.com.ar/wp-content/uploads/2023/10/Como-funcionan-los-paneles-solares-1.jpeg"
 *              picture_2:
 *                type: url
 *                example: "https://portalsolar.com.ar/wp-content/uploads/2023/10/Como-funcionan-los-paneles-solares-1.jpeg"
 *          category:
 *            type: object
 *            properties:
 *              categoryId:
 *                type: string
 *                example: 7a69d229-771d-4dad-a3d6-85bf7a4ce64c
 *              name:
 *                type: string
 *                example: Jardin
 *              brand_name:
 *                type: string
 *                example: NowJardin
 *          garanty:
 *            type: string
 *            example: "1 year"
 *          productEnabled:
 *            type: bool
 *            example: true/false
 *        required:
 *          - name
 *          - subtitle
 *          - description
 *          - detail
 *          - energy_efficiency
 *          - price
 *          - available_quantity
 *          - images
 *          - category
 */

/**
 * @swagger
 * /api/v1/products/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Create product
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProductCreate'
 *    responses:
 *      201:
 *        description: Product created
 *      400:
 *        description: Some of the body parameters are not correct in their format
 */

productRoutes.post("/create", userExposed, productController.create);

//Edit product

/**
 * @swagger
 *  components:
 *    schemas:
 *      ProductEdit:
 *        type: object
 *        properties:
 *          productId:
 *            type: string
 *            example: 7a69d229-741d-4dbd-a3f6-85bf7a9ce641
 *          name:
 *            type: string
 *            example: ISJAKT
 *          subtitle:
 *            type: string
 *            example: Lámpara pie/lectura LED
 *          description:
 *            type: string
 *            example: Dos lámparas de estilo moderno
 *          detail:
 *            type: string
 *            example: Proporciona iluminación general y de lectura
 *          technical_info:
 *            type: object
 *            properties:
 *              driver_model:
 *                type: string
 *                example: ICPSW24-19-1
 *              energy_use:
 *                type: string
 *                example: 16.5 kWh/1.000 h
 *          measures:
 *            type: object
 *            properties:
 *              height:
 *                type: number
 *                example: 180
 *              width:
 *                type: number
 *                example: 50
 *              base_diameter:
 *                type: number
 *                example: 24
 *          energy_efficiency:
 *            type: string
 *            example: A
 *          price:
 *            type: number
 *            example: 100.00
 *          available_quantity:
 *            type: number
 *            example: 10
 *          images:
 *            type: object
 *            properties:
 *              cover:
 *                type: url
 *                example: "https://portalsolar.com.ar/wp-content/uploads/2023/10/Como-funcionan-los-paneles-solares-1.jpeg"
 *              picture_1:
 *                type: url
 *                example: "https://portalsolar.com.ar/wp-content/uploads/2023/10/Como-funcionan-los-paneles-solares-1.jpeg"
 *              picture_2:
 *                type: url
 *                example: "https://portalsolar.com.ar/wp-content/uploads/2023/10/Como-funcionan-los-paneles-solares-1.jpeg"
 *          category:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                example: 7a69d229-771d-4dad-a3d6-85bf7a4ce64c
 *              name:
 *                type: string
 *                example: Jardin
 *              brand_name:
 *                type: string
 *                example: NowJardin
 *          garanty:
 *            type: string
 *            example: "1 year"
 *          productEnabled:
 *            type: bool
 *            example: true/false
 *        required:
 *          - productId
 */

/**
 * @swagger
 * /api/v1/products/edit:
 *  patch:
 *    summary: Edit product
 *    tags: [Product]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/ProductEdit'
 *    responses:
 *      201:
 *        description: The error responds in false and the information
 *      400:
 *        description: Some of the body parameters are not correct in their format
 *      409:
 *        description: Something in the required ID is wrong
 */

productRoutes.patch("/edit", userExposed, productController.edit);

//Delete product

/**
 * @swagger
 * /api/v1/products/delete/{productId}:
 *  delete:
 *    summary: Delete product by id
 *    tags: [Product]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: productId
 *        in: params
 *        required: true
 *    responses:
 *      201:
 *        description: The error responds in false and the information
 *      400:
 *        description: Some of the body parameters are not correct in their format
 *      409:
 *        description: Something in the required ID is wrong
 */

productRoutes.delete(
  "/delete/:productId",
  userExposed,
  productController.delete
);

module.exports = productRoutes;
