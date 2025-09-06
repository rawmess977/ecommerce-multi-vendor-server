class AuthController{
    admin_login = async (req , res) =>{
        console.log(req.body)
        res.send('Admin login received')
    }
}

export default new AuthController;