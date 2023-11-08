

exports.accessTokenGenerate = async (req, res) => {
    try {


        const user = req.body
        const token = generateToken(donor)
        res.status(200).json({
            status: "success",
            message: "Successfully Added rooms detials",
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create room",
            error: error.message,
        });
    }
}