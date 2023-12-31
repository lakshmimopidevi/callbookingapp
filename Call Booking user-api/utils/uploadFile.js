const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: "mongodb+srv://lakshmivvsmarolix:84e966Q7utS2FGj3@cluster0.jhv9u6n.mongodb.net/?retryWrites=true&w=majority", // Use the correct environment variable here
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      const filename = 'file_' + Date.now();
      req.body.image = filename;
      return {
        bucketName: 'images',
        filename,
      };
    } else {
      return null;
    }
  },
});

const upload = multer({ storage });

module.exports = { upload };

