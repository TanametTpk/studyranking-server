const middlewares = require( "../../config/middlewares" );
const user = require( "../controllers/user" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , user.get);

router.get("/rank", middlewares.getterPagination, middlewares.getterPopulate, user.getRank);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, user.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, user.getSpecific);

router.post("/", user.create);

router.put("/:objectId", middlewares.getterObjectId, user.update);

router.delete("/:objectId", middlewares.getterObjectId, user.delete);



module.exports = router;
