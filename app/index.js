const router = require( "express" ).Router();

const user = require( "./routes/user" );
const task = require( "./routes/task" );


router.use("/user", user);
router.use("/task", task);


module.exports = router;
