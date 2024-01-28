import multer from 'multer';
import path from "path";
const pathPhoto = path.resolve("temp")
const storage = multer.diskStorage({

    destination: pathPhoto,
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }

})

const upload = multer({ storage: storage })

export default upload;