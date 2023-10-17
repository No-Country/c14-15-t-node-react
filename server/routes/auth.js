const { Router } = require("express");
const authController = require("../controllers/authController");
const validatorJWT = require("../controllers/validatorJWT");

const authRoutes = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserAuth:
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
 * /api/v1/auth:
 *  post:
 *    summary: Login user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/UserAuth'
 *    responses:
 *      200:
 *        description: Response error false and object user information
 *      400:
 *        description: credentials are not valid
 */

authRoutes.post("/", authController.login);

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

authRoutes.get("/token", validatorJWT, authController.validateToken);

module.exports = authRoutes;
