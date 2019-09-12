const jwt_secret = process.env.AWT_SECRET || "secret";

module.exports = {
  jwt_secret:jwt_secret,
}
