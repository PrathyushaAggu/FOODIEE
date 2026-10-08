const Kitchen = require("../models/kitchen");


// Add kitchen
exports.addKitchen = async (req, res) => {
  try {
    const kitchen = new Kitchen(req.body);
    await kitchen.save();
    res.status(201).json({ message: "Kitchen added successfully", kitchen });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all kitchens
exports.getKitchens = async (req, res) => {
  try {
    const kitchens = await Kitchen.find();
    res.json(kitchens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get single kitchen
exports.getKitchenById = async (req, res) => {
  try {
    const kitchen = await Kitchen.findById(req.params.id);
    res.json(kitchen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
