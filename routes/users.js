import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyIsAdmin, verifyToken, verifyUser } from "../utils/varifyToken.js";


const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("hello user, you are authenticated");
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
//     res.send("hello user, you are logged in and you can delete your account.")
// })

// router.get("/checkadmin/:id", verifyIsAdmin, (req,res,next)=> {
//     res.send("hello user, you are an admin")
// })

router.put("/:id", verifyUser, updateUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyIsAdmin, getAllUsers);
router.delete("/:id", verifyUser, deleteUser);

export default router;