import express from "express"
const hotels = express()
import Hotel from "../models/Hotel.js"
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js"
import { verifyIsAdmin } from "../utils/varifyToken.js";

//create
hotels.post("/", verifyIsAdmin, createHotel);


//update
hotels.put("/:id", verifyIsAdmin, updateHotel)


//delete 

hotels.delete("/:id/:hotelId",verifyIsAdmin, deleteHotel)

//get

hotels.get("/find/:id", getHotel)


//get All
hotels.get("/", getAllHotel)


hotels.get("/countByCity", countByCity);
hotels.get("countByType", getAllHotel)
export default hotels;