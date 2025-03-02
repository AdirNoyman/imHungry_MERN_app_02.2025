import {Request, Response} from 'express';


export const createUser = async (req: Request,res: Response) => {

    // Check if the user already exists in the DB
   

    // Create the user if he doesn't exists
    
    // Return the user object to the calling client
    res.send({msg: "Created new user in the database 🤘🤓"})

    try {

        
        
    } catch (error) {

        console.log("Error creating the user 😫", error)
        res.status(500).json({message: "Error creating the user 😫"})
        
    }
    
}

export default {
    createUser
}