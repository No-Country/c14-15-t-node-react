const { Router } = require("express");
const userController = require("../controllers/userController");

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
userRoutes.get("/", userController.getAll);

//Get User By Id
userRoutes.get("/:id", userController.getUserById);

userRoutes.post("/", userController.create);

module.exports = {
  userRoutes,
};
