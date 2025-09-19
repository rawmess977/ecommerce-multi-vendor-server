import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(409).json({ error: "Please Login First" });
  } else {
    try {
      const deCodeToken = await jwt.verify(accessToken, process.env.SECRET_KEY);
      req.role = deCodeToken.role;
      req.id = deCodeToken.id;
      next();
    } catch (error) {
      return res.status(409).json({ error: "Please Login" });
    }
  }
};
export default authMiddleware;
