


const jwt = require("jsonwebtoken");


exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "3days"
    })
    return token;
}






// for crypot generate

// node,  crypto.randomBytes(64).toString("hex")  