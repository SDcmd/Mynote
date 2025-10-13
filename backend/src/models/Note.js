import mongoose from "mongoose";

// 1 - a schema is created 
// 2 - a model based on that schema is made

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
     
}, 
{timestamps: true} //created at, updated at
);

const Note = mongoose.model("Note", noteSchema) //create a note model based of this schema

export default Note