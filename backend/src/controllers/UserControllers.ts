import { Request, Response } from 'express';
import User from '../models/user';

const createUser = async (req: Request, res: Response) => {    

  try {
    const { auth0Id, email } = req.body;

    // Check if user or email exists already
    const isUserExists = await User.findOne({ auth0Id });
    const isEmailExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(200).send();
    }

    console.log("Email exists", isEmailExists)
    if (isEmailExists) {
     return res.status(400).send('Error creating the user 😫');
    }

    // Create new user
    const newUser = new User(req.body);
    await newUser.save();

    // Return the user object to the calling client as JSON object
    res.status(201).json(newUser.toObject())

  } catch (error) {
    console.log('Error creating the user 😫', error);
    res.status(500).json({ message: 'Error creating the user 😫' });
  }
};

export default {
  createUser,
};
