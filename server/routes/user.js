const { Router } = require("express");

const userController = require("../controllers/userController");
const userExposed = require("../helper/userExposed");

const userRoutes = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserCreate:
 *        type: object
 *        properties:
 *          firstname:
 *            type: string
 *            example: Enrique
 *          lastname:
 *            type: string
 *            example: Castro
 *          email:
 *            type: string
 *            example: enriquecastro@gmail.com
 *          password:
 *            type: string
 *            format: password
 *            example: Prueba_1!
 *          address:
 *            type: string
 *            example: Av SiemprelIbre 203
 *        required:
 *          - firstname
 *          - lastname
 *          - email
 *          - password
 */

/**
 * @swagger
 * /api/v1/users/create:
 *  post:
 *    summary: Create user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/UserCreate'
 *    responses:
 *      201:
 *        description: Response error false and data
 *      409:
 *        description: Some of the parameters are not correct
 */
userRoutes.post("/create", userController.create);

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserEdit:
 *        type: object
 *        properties:
 *          uid:
 *            type: string
 *            example: 7a69d229-741d-4dbd-a3f6-85bf7a9ce641
 *          firstname:
 *            type: string
 *            example: Enrique
 *          lastname:
 *            type: string
 *            example: Castro
 *          email:
 *            type: string
 *            example: enriquecastro@gmail.com
 *          address:
 *            type: string
 *            example: Av SiemprelIbre 203
 *        required:
 *          - uid
 */

/**
 * @swagger
 * /api/v1/users/edit:
 *  patch:
 *    summary: Edit user
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/UserEdit'
 *    responses:
 *      202:
 *        description: Response error false and data
 *      400:
 *        description: El usuario
 */
userRoutes.patch("/edit", userExposed, userController.update);

module.exports = userRoutes;
