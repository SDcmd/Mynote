import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";



dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()



if(process.env.NODE_ENV !== "production"){

    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    ); //this allows every request from every single url 
}

app.use(express.json()); 

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});
}

app.get("/", (req, res) => {
  res.send("testing API!");
});
connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
})
})


