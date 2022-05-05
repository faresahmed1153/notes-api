const noteModel = require("../../../DB/model/Note");

const addNote = async (req, res) => {
  const { title, desc } = req.body;

  try {
    const newNote = new noteModel({
      title,
      desc,
      createdBy: req.user._id,
    });
    const savedNote = await newNote.save();

    res.json({ message: "Done", savedNote });
  } catch (error) {
    res.json({ err: error.name });
  }
};

const updateNote = async (req, res) => {
  const { title, desc, noteId } = req.body;

  try {
    const updatedNote = await noteModel.findOneAndUpdate(
      { _id: noteId },
      { title, desc },
      { new: true }
    );

    if (updatedNote) {
      res.json({ message: "Done", updatedNote });
    } else {
      res.json({ message: "in-valid id", updatedNote });
    }
  } catch (error) {
    res.json({ message: "catch err", error });
  }
};

const deleteNote = async (req, res) => {
  const { noteId } = req.body;
  try {
    const note = await noteModel.deleteOne({ _id: noteId }).select("-password");

    if (note.deletedCount) {
      res.json({ message: "Done", note });
    } else {
      res.json({ message: "in-valid id", note });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

const notes = async (req, res) => {
  try {
    const note = await noteModel

      .find({ createdBy: req.user._id })
      .populate({ path: "createdBy", select: "-password" });

    res.json({ message: "Done", note });
  } catch (error) {
    res.json({ messaage: "catch error", error });
  }
};

module.exports = {
  addNote,
  updateNote,
  deleteNote,
  notes,
};
