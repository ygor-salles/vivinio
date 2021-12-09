import multer from "multer";
import path from 'path'

let UPLOAD_IMAGE: multer.Multer;
const firebaseActive = true

if (firebaseActive) {
  UPLOAD_IMAGE = multer({
    storage: multer.memoryStorage(),
    limits: { files: 1024 * 1024 }
  })
} else {
  UPLOAD_IMAGE = multer({
    storage: multer.diskStorage({
      destination: (request, file, cb) => {
          cb(null, path.resolve(__dirname, '..', 'uploads', 'images'))
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now().toString()}_${file.originalname}`)
      }
    }),
    fileFilter: (request, file, cb) => {
      const extensionImage = [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/pjpeg',
        'image/gif',
      ].find(formatAccept => formatAccept == file.mimetype);
  
      if (extensionImage) {
        return cb(null, true);
      }
  
      return cb(null, false);
    }, 
  });
}


export { UPLOAD_IMAGE };
