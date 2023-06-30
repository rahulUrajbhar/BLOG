const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const mongoose = require('mongoose');
require('dotenv').config();


app.use(express.json());

const dbOptions = {useUnifiedTopology:true}
mongoose.connect(process.env.MONGO_URL, dbOptions)
.then(()=> console.log('DB Connected!'))
.catch(err=> console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

const server = app.listen(4000,() =>{
    console.log(`Server is running on Port 4000`);
})
