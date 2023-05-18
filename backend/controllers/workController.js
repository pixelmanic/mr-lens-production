const allWorks = require("../models/workModel");
const mongoose = require("mongoose");

// GET all works

const getWorks = async (req, res) => {
  const works = await allWorks.find({}).sort({ createdAt: -1 });
  if (!works) {
    return res.status(404).json({ msg: "no such works" });
  }
  res.status(200).json(works);
};

// GET a work by ID

const getWork = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "no such work" });
  }

  const work = await allWorks.findById(id);

  if (!work) {
    return res.status(200).json({ msg: "no such work" });
  }

  res.status(200).json(work);
};

// POST a work

const postWork = async (req, res) => {
  const imgSrc = req.body;
  try {
    const work = await allWorks.create(imgSrc);
    work.save()
    res.status(200).json(work);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a work

const deleteWork = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(200).json({ msg: "no such work" });
  }

  const work = await allWorks.findOneAndDelete({ _id: id });

  if (!work) {
    return res.status(400).json({ msg: "no such work" });
  }

  res.status(200).json(work);
};

// UPDATE a work

const updateWork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "no such work" });
  }

  const work = await allWorks.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!work) {
    return res.status(400).json({ msg: "no such work" });
  }

  res.status(200).json(work);
};

module.exports = {
  getWorks,
  getWork,
  postWork,
  deleteWork,
  updateWork,
};
