import express from "express"
const rooms = express()
import { verifyIsAdmin } from "../utils/varifyToken.js";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";

//create
rooms.post("/:hotelId", verifyIsAdmin, createRoom);


//update
rooms.put("/:id", verifyIsAdmin, updateRoom)


//delete 

rooms.delete("/:id",verifyIsAdmin, deleteRoom)

//get

rooms.get("/:id", getRoom)


//get All
rooms.get("/", getAllRoom)




export default rooms;