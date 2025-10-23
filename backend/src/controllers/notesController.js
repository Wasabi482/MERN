export const getAllNotes = (req, res)  => {
  //send the notes
  res.status(200).send ("you just fetched the notes")
};

export const createNote = (req, res) => {
  res.status(201).send({message:"Note created successfully!"})
};

export const putNote = (req, res) => {
  res.status(200).json({message:"Note updated successfully!"})
};

export const deleteNote = (req, res) => {
   res.status(200).json({message:"Note deleted successfully!"})
};