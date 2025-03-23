import express from 'express';
import multer from 'multer';
import RestaurantControllers from '../controllers/RestaurantControllers';

const router = express.Router();

const { createRestaurant } = RestaurantControllers;

// Middleware - Multer configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit,
});

// upload.single('imageFile') - will get the image data (binary) from the form field named 'imageFile', parse it, add it to the request body and also check if it is over the file size limit
router.post('/', upload.single('imageFile'), createRestaurant);

export default router;
