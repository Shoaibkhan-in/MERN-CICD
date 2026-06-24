import jwt from "jsonwebtoken"


export const authmiddleware = async(req, res, next)=>{
    
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer')){
            return res.status(401).send("Token not provided")
        }
        try {
        const token = authHeader.split(' ')[1]

        const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_KEY)

        req.user = decoded;

        next()
    } catch (error) {
        return res.status(401).send("Invalid Token")
    }
}