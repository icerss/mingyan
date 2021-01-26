module.exports = async (req, res) => {
    res.status(404).json({
        "code": 404,
        "message":"找不到咯*⸜( •ᴗ• )⸝*"
      })
}