import express from "express";
import { createNote, getAllNotes, putNote, deleteNote} from "../controllers/notesController.js"

const router = express.Router();

// Endpoint 
// Combination of a URL + HTTP method that lets the client interact with a specific resosurce
//routes

router.get("/", /*these are controllers(req, res)  => {
  //send the notes
  res.status(200).send ("you just fetched the notes");
}*/ getAllNotes);

router.post("/", createNote)

router.put("/:id", putNote);

router.delete("/:id", deleteNote);

export default router;


