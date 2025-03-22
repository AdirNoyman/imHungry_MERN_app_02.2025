import { Request, Response } from 'express';
import Restaurant from '../models/restaurant'


const createRestaurant = async (req: Request, res: Response) => {

    try {

        // Check if the user already has a restaurant. The userId we get from the token (via the auth middleware)
        const existingRestaurant = await Restaurant.findOne({ user: req.userId });

        // If the user already has a restaurant, return an error
        if (existingRestaurant) {
            return res.status(409).json({ message: "You already have a restaurant 🤨" });
        }


        const { name, city, country, deliveryPrice, estimatedDeliveryTime, cuisines, menuItems, imageUrl } = req.body;
        const { user } = req;
        const lastUpdate = new Date();
    
        const restaurant = new Restaurant({
        user: user._id,
        name,
        city,
        country,
        deliveryPrice,
        estimatedDeliveryTime,
        cuisines,
        menuItems,
        imageUrl,
        lastUpdate,
        });
    
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (error) {
        console.log("Error creating a new restaurant 😫: ", error);
        res.status(500).json({ message: "Sorry, restaurant creation failed 🤦‍♂️" });
    }
}