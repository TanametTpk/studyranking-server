const middlewares = require( "../../config/middlewares" );
const tank = require( "../controllers/tank" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , tank.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, tank.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, tank.getSpecific);

router.post("/", tank.create);

router.post("/:objectId", middlewares.getterObjectId, tank.update);

router.post("/:objectId/del", middlewares.getterObjectId, tank.delete);





module.exports = router;
