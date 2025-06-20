// import Note from "../models/Note.js"

// export const getAllNotes=async(req,res)=>{
//     try {
//         const notes=await Note.find().sort({createAt:-1}); //newest at the top
//         res.status(200).json(notes);

        
//     } catch (error) {
//         console.log("error in fetching the notes");
//         res.status(500).json({message:"internal server error"});
        
//     }
// }

// export const getNoteById=async(req,res)=>{

//     try {
//         const note=await Note.findById(req.params.id);
//         if(!note) return res.status(404).json({message:"note not found!"});
//         res.status(201).json(note);
        
//     } catch (error) {

//         console.log("error in getting the note by id ");
//         res.status(500).json({message:"internal server error"});
        
//     }

// }


// export const createNote=async(req,res)=>{
//     try {
//         const {title,content}=req.body;
//         const newNote=new Note({title,content});
//         const saveNote=await newNote.save(); // it will save this to the db 
//         res.status(201).json({message:"note created successfully "})

//     } catch (error) {

//         console.log("error in creating the notes");
//         res.status(500).json({message:"internal server error"});
        
//     }

// }

// export const updateNote=async(req,res)=>{

//     try {

//         const {title,content}=req.body;
//         const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});

//         if(!updateNote){return res.status(404).json({message:"note not found"})}
//         res.status(201).json({message:"note updated successfully"});
        
//     } catch (error) {


//         console.log("error in updating the notes");
//         res.status(500).json({message:"internal server error"});
        
//     }

// }

// export const deleteNote=async(req,res)=>{

//     try {
//         const deletedNote=await Note.findByIdAndDelete(req.params.id);

//         if(!deleteNote)  return res.status(404).json({message:"Note not found"});

//         res.status(200).json({message:"note deleted successfully"})
//     } catch (error) {

//          console.log("error in deleting the notes");
//         res.status(500).json({message:"internal server error"});
        
//     }


    
// }

import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // newest at the top
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in fetching the notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found!" });
        res.status(200).json(note);
    } catch (error) {
        console.log("Error in getting the note by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json({ message: "Note created successfully", note: savedNote });
    } catch (error) {
        console.log("Error in creating the note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: "Note updated successfully", note: updatedNote });
    } catch (error) {
        console.log("Error in updating the note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.log("Error in deleting the note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
