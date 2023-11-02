const { Router } = require("express");

const brandController = require("../controllers/brandController");
const userExposed = require("../helper/userExposed");

const brandRoutes = Router();

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

/**
 * @swagger
 *  components:
 *    schemas:
 *      BrandCreate:
 *        type: object
 *        properties:
 *          brand:
 *            type: string
 *            example: Samsung
 *        required:
 *          - brand
 */

/**
 * @swagger
 * /api/v1/brands/create/{id}:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Create brand
 *    tags: [Brands]
 *    parameters:
 *      - name: id
 *        in: params
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/BrandCreate'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */

brandRoutes.post("/create/:id", userExposed, brandController.create);

/**
 * @swagger
 *  components:
 *    schemas:
 *      BrandEdit:
 *        type: object
 *        properties:
 *          brand:
 *            type: string
 *            example: Samsung
 *          otherBrand:
 *            type: string
 *            example: Nokia
 *        required:
 *          - brand
 *          - otherBrand
 */

/**
 * @swagger
 * /api/v1/brands/edit/{id}:
 *  patch:
 *    security:
 *      - bearerAuth: []
 *    summary: Edit brand
 *    tags: [Brands]
 *    parameters:
 *      - name: id
 *        in: params
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/BrandEdit'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */

brandRoutes.patch("/edit/:id", userExposed, brandController.update);

/**
 * @swagger
 *  components:
 *    schemas:
 *      BrandDelete:
 *        type: object
 *        properties:
 *          brand:
 *            type: string
 *            example: Samsung
 *        required:
 *          - brand
 */
/**
 * @swagger
 * /api/v1/brands/delete/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete brand
 *    tags: [Brands]
 *    parameters:
 *      - name: id
 *        in: params
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/BrandDelete'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */
brandRoutes.delete("/delete/:id", userExposed, brandController.delete);

module.exports = brandRoutes;
