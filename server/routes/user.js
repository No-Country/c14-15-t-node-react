const { Router } = require("express");
const authController = require("../controllers/userController");
const validatorJWT = require("../controllers/validatorJWT");

const userRoutes = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          firstname:
 *            type: string
 *            description: firstname of user
 *          lastname:
 *            type: string
 *            description: lastname of user
 *          email:
 *            type: string
 *            description: email of user
 *        required:
 *          - firstname
 *          - lastname
 *          - email
 *        example:
 *          firstname: Enrique
 *          lastname: Castro
 *          email: enriquecastro@gmail.com
 */

/**
 * @swagger
 * /api/v1/user:
 *  get:
 *    summary: get all users
 *    tags: [User]
 *    requestBody:
 *      required: false
 *    responses:
 *      200:
 *        description: Get all Users
 */

userRoutes.post("/register", authController.create);

userRoutes.patch("/modify", authController.update);

userRoutes.post("/", authController.login);

userRoutes.get("/token", validatorJWT, authController.validateToken);



module.exports = {
  userRoutes,
};
