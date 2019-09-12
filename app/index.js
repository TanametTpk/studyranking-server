const router = require( "express" ).Router();

const user = require( "./routes/user" );
const task = require( "./routes/task" );


router.use("/users", user);
router.use("/tasks", task);


module.exports = router;
