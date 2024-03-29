import { whyHostUploadDir } from '../config';
import multer from 'multer';
const crypto = require('crypto');
const fs = require('fs');
const fse = require('fs-extra');
import bodyParser from 'body-parser';
import sharp from 'sharp';
var storage = multer.diskStorage({
  destination: whyHostUploadDir,
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      let ext;
      switch (file.mimetype) {
        case 'image/jpeg':
          ext = '.jpeg';
          break;
        case 'image/png':
          ext = '.png';
          break;
        case 'image/svg+xml':
          ext = '.svg';
          break;
      }
      cb(null, raw.toString('hex') + ext);
    })
  }
});
var upload = multer({ storage: storage });
function removeFiles(fileName, filePath) {
  if (fs.existsSync(filePath + fileName)) {
    // Original
    fs.unlink(filePath + fileName, (err) => {
      if (err) throw err;

    });
  }
  if (fs.existsSync(filePath + 'small_' + fileName)) {
    // small
    fs.unlink(filePath + 'small_' + fileName, (err) => {
      if (err) throw err;

    });
  }
  if (fs.existsSync(filePath + 'medium_' + fileName)) {
    // medium
    fs.unlink(filePath + 'medium_' + fileName, (err) => {
      if (err) throw err;

    });
  }
}
const whyHostUpload = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.post('/uploadWhyHost', function (req, res, next) {
    if (!req.user) {
      res.send(403);
    } else {
      next();
    }
  }, upload.single('file'), async (req, res, next) => {
    let file = req.file;

    // small - 100 * 100
    await new Promise((resolve, reject) => {
      sharp(file.path)
        .rotate()
        .resize(100, 100)
        .toFile(whyHostUploadDir + 'small_' + file.filename, function (err, file) {
          if (file) {
            resolve(file)
          } else {
            reject(err)
          }
          console.log("Error from resizing files", err);
        });
    });

    // medium - 255 * 255
    await new Promise((resolve, reject) => {
      sharp(file.path)
        .rotate()
        .resize(255, 255)
        .toFile(whyHostUploadDir + 'medium_' + file.filename, function (err, file) {
          if (file) {
            resolve(file)
          } else {
            reject(error)
          }
          console.log("Error from resizing files", err);

        });
    });

    res.send({ status: 'SuccessFully uploaded!', file });
  });

};
export default whyHostUpload;
