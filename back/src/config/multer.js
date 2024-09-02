const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./src/uploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

var upload = multer({ storage });

module.exports = upload;