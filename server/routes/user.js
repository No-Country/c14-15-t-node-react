const { Router } = require("express");
const authController = require("../controllers/userController");
const validatorJWT = require("../controllers/validatorJWT");

const userRoutes = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Register:
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
 * /api/v1/auth/register:
 *  post:
 *    summary: Create user endpoint
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      201:
 *        description: Response error false and object user information
 *      409:
 *        description: Some of the parameters are not correct
 */
userRoutes.post("/register", authController.create);

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserModify:
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
 * /api/v1/auth/update:
 *  patch:
 *    summary: Update data user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/UserModify'
 *    responses:
 *      202:
 *        description: Response error false and object user information
 *      400:
 *        description: El usuario
 */
userRoutes.patch("/update", authController.update);

/**
 * @swagger
 *  components:
 *    schemas:
 *      Login:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            example: enriquecastro@gmail.com
 *          password:
 *            type: string
 *            format: password
 *            example: Prueba_1!
 *        required:
 *          - email
 *          - password
 */

/**
 * @swagger
 * /api/v1/auth/:
 *  post:
 *    summary: Login user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: Response error false and object user information
 *      400:
 *        description: credentials are not valid
 */

userRoutes.post("/", authController.login);

/**
 * @swagger
 *  /api/v1/auth/token:
 *    get:
 *      tags: [Auth]
 *      summary: Token
 *      description: Token
 *      parameters:
 *        - name: x-token
 *          in: header
 *          required: true
 *      responses:
 *        200:
 *          description: Response data user and token
 *        401:
 *          description: Token Error
 */

userRoutes.get("/token", validatorJWT, authController.validateToken);

module.exports = {
  userRoutes,
};
