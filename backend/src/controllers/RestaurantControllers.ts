import { Request, Response } from 'express';
import Restaurant from '../models/restaurant'
import cloudinary from 'cloudinary'
import mongoose from 'mongoose';


const createRestaurant = async (req: Request, res: Response) => {

    try {

        // Check if the user already has a restaurant. The userId we get from the token (via the auth middleware)
        const existingRestaurant = await Restaurant.findOne({ user: req.userId });

        // If the user already has a restaurant, return an error
        if (existingRestaurant) {
            return res.status(409).json({ message: "You already have a restaurant 🤨" });
        }

        // Get the image data from the form field named 'imageFile' and convert it to a base64 string, so we could upload it to Cloudinary
        const image = req.file as Express.Multer.File;
        const base64Image = Buffer.from(image.buffer).toString('base64');
        // mimetype is the image type (e.g. image/jpeg, image/png)
        const dataURI = `data:${image.mimetype};base64,${base64Image}`;
        const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

        const restaurant = new Restaurant(req.body)
        // Add and save the restaurant image URL to the DB
        restaurant.imageUrl = uploadResponse.url;
        // Link the current logged in user to the new created restaurant
        restaurant.user = new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdate = new Date();
        await restaurant.save();
        return res.status(201).json({ message: "Restaurant created successfully 🎉", restaurant });
        
    } catch (error) {
        console.log("Error creating a new restaurant 😫: ", error);
        return res.status(500).json({ message: "Sorry, restaurant creation failed 🤦‍♂️" });
    }
}

export default {
    createRestaurant,
}