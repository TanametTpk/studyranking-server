const router = require( "express" ).Router();

const user = require( "./routes/user" );
const tank = require( "./routes/tank" );


router.use("/user", user);
router.use("/tank", tank);


module.exports = router;
