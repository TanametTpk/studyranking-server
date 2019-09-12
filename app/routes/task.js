const middlewares = require( "../../config/middlewares" );
const task = require( "../controllers/task" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , task.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, task.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, task.getSpecific);

router.post("/", task.create);

router.post("/:objectId", middlewares.getterObjectId, task.update);

router.post("/:objectId/del", middlewares.getterObjectId, task.delete);





module.exports = router;
