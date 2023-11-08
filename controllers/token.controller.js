const { generateToken } = require("../utils/token");


exports.accessTokenGenerate = async (req, res) => {
    try {

        console.log("object");
        const user = req.body
        console.log(user);
        const token = generateToken(user)
        console.log(token);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        }).send({ success: true })

        // res.status(200).json({
        //     status: "success",
        //     message: "Successfully Added rooms detials",
        // })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create room",
            error: error.message,
        });
    }
}

// Sakil@123