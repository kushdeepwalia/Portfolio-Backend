const jwt = require("jsonwebtoken");

async function login(req, res, next) {
   const { username, password } = req.body;

   try {
      let passwordsMatch = false;
      if (
         username == "kushdeepwalia" &&
         password == "12345678"
      )
         passwordsMatch = true;

      if (passwordsMatch) {
         const payload = {
            username,
            loginTime: new Date(),
         };

         const accessToken = jwt.sign(payload, (process.env.JWT_SECRET_KEY || "123456"), {
            expiresIn: (process.env.EXPIRES_IN || 3600),
         });
         res.json({
            accessToken,
            message: "Login Successful!",
            status: 200
         });
      } else {
         res.status(400).json({ message: "Incorrect Username / Password" });
      }
   } catch (error) {
      next(error);
   }
}

module.exports = { login };
