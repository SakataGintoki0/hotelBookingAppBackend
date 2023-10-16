import mongoose from "mongoose";
const {schema} = mongoose;

const RoomSchema = new mongoose.Schema({ 
    title:{
        type : String,
        required: true
    },
    price:{
        type : Number,
        required: true
    },
    desc:{
        type : String,
        required: true
    },
    maxPeople:{
        type : String,
        required: true
    },
    roomNumbers: [{number:Number, unavailableDates:{type:Date} }],
}, 
{ timestams : true}
);


export default mongoose.model("Rooms", RoomSchema);