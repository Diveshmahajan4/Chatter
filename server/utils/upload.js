import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: `mongodb://user:1234@ac-ykzpqpb-shard-00-00.fcolirf.mongodb.net:27017,ac-ykzpqpb-shard-00-01.fcolirf.mongodb.net:27017,ac-ykzpqpb-shard-00-02.fcolirf.mongodb.net:27017/?ssl=true&replicaSet=atlas-k5689r-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
