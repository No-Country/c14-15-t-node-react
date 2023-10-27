const { Router } = require("express");

const brandController = require("../controllers/brandController");

const brandRoutes = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      BrandCreate:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: categoryId
 *          brand:
 *            type: string
 *            example: Samsung
 *        required:
 *          - id
 *          - brand
 */

/**
 * @swagger
 * /api/v1/brands/create:
 *  post:
 *    summary: Create brand
 *    tags: [Brands]
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

brandRoutes.post("/create", brandController.create);

/**
 * @swagger
 *  components:
 *    schemas:
 *      BrandEdit:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: categoryId
 *          brand:
 *            type: string
 *            example: Samsung
 *          otherBrand:
 *            type: string
 *            example: Nokia
 *        required:
 *          - id
 *          - brand
 *          - otherBrand
 */

/**
 * @swagger
 * /api/v1/brands/edit:
 *  patch:
 *    summary: Edit brand
 *    tags: [Brands]
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

brandRoutes.patch("/edit", brandController.update);

/**
 * @swagger
 *  components:
 *    schemas:
 *      BrandDelete:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: categoryId
 *          brand:
 *            type: string
 *            example: Samsung
 *        required:
 *          - id
 *          - brand
 */
/**
 * @swagger
 * /api/v1/brands/delete:
 *  delete:
 *    summary: Delete brand
 *    tags: [Brands]
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
brandRoutes.delete("/delete", brandController.delete);

module.exports = brandRoutes;
