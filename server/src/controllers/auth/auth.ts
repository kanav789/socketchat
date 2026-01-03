import UserModel from "../../models/user"

const SignupController = async ({req, res}:any) => {
    try {
         const {name, password, email}= await req.body;
         if(!name || !password || !email){
            return res.status(400).json({message: "All fields are required"});
         }
         const exitsingUser= await UserModel.create({name, password, email});
         if(!exitsingUser){
            return res.status(500).json({message: "Failed to create user"});
         }
         res.status(201).json({message: "User created successfully", user: exitsingUser});
    } catch (error) {
      return res.status(500).json({message: "An error occurred", error});
    }
}

export  {SignupController};