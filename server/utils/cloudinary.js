const cloudinaryModule=require("cloudinary")

const cloudinary = require('cloudinary').v2; 

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: '',
});


module.exports=cloudinary;

