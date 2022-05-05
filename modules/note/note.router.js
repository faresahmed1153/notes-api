const { auth } = require("../../middleware/auth");
const { noteValidation } = require("../../validation/validation");
const { addNote, updateNote, deleteNote, notes } = require("./controller/note");

const router = require("express").Router();

router.get("/note", auth(), notes);
router.post("/note", auth(), noteValidation(), addNote);
router.post("/updateNote", auth(), noteValidation(), updateNote);
router.delete("/note", auth(), deleteNote);

module.exports = router;
