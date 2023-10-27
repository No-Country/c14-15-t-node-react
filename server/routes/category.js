const { Router } = require("express");

const categoryController = require("../controllers/categoryController");

const categoryRoutes = Router();
/**
 * @swagger
 *  components:
 *    schemas:
 *      CategoryCreate:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            example: Telefonía
 *          brands:
 *            type: array
 *            items:
 *              type: string
 *            example: ['Samsung','Apple','Nokia']
 *        required:
 *          - name
 *          - brands
 */

/**
 * @swagger
 * /api/v1/categories/create:
 *  post:
 *    summary: Create category
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CategoryCreate'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */
categoryRoutes.post("/create", categoryController.create);

/**
 * @swagger
 *  components:
 *    schemas:
 *      CategoryEdit:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: categoryId
 *          name:
 *            type: string
 *            example: Teléfonos
 *        required:
 *          - id
 *          - name
 */

/**
 * @swagger
 * /api/v1/categories/edit:
 *  patch:
 *    summary: Edit category
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CategoryEdit'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */

categoryRoutes.patch("/edit", categoryController.update);

/**
 * @swagger
 * /api/v1/categories/getAll:
 *  get:
 *    summary: Get Category
 *    tags: [Categories]
 *    requestBody:
 *      required: false
 *    responses:
 *      200:
 *        description: Response error false and data
 *      400:
 *        description: credentials are not valid
 */
categoryRoutes.get("/getAll", categoryController.getAll);

/**
 * @swagger
 *  components:
 *    schemas:
 *      CategoryDelete:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: categoryId
 *        required:
 *          - id
 */

/**
 * @swagger
 * /api/v1/categories/delete:
 *  delete:
 *    summary: Delete category
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/CategoryDelete'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */

categoryRoutes.delete("/delete", categoryController.delete);

module.exports = categoryRoutes;
