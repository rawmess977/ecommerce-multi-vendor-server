
import adminModel from "../models/adminModel.js";
import responseReturn from "./../utils/response.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/createToken.js";
class AuthController {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash("yourpassword", 10).then(console.log);
    try {
      const admin = await adminModel
        .findOne({
          email,
        })
        .select("+password");

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);

        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login Success" });
        } else {
          responseReturn(res, 404, { error: "Password Wrong" });
        } 
      } else {
        responseReturn(res, 404, { error: "Email not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}

export default new AuthController();
