const { Router } = require("express");

const categoryController = require("../controllers/categoryController");
const userExposed = require("../helper/userExposed");

const categoryRoutes = Router();

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
 *    security:
 *      - bearerAuth: []
 *    summary: Create category
 *    tags: [Categories]
 *    security:
 *      - bearerAuth: []
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
categoryRoutes.post("/create", userExposed, categoryController.create);

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
 *    security:
 *      - bearerAuth: []
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

categoryRoutes.patch("/edit", userExposed, categoryController.update);

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
categoryRoutes.get("/getAll", userExposed, categoryController.getAll);


/**
 * @swagger
 * /api/v1/categories/delete/{id}:
 *   delete:
 *     summary: Delete category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: params
 *         required: true
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       400:
 *         description: Invalid request format or missing parameters
 *       404:
 *         description: Category not found
 */

categoryRoutes.delete(
    "/delete/:id",
    userExposed,
    categoryController.delete
);


module.exports = categoryRoutes;
