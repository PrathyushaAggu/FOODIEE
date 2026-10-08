const User = require('../models/User');

// 1. THIS WAS MISSING
exports.getAddresses = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user.addresses || []);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// 2. ADD ADDRESS
exports.addAddress = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $push: { addresses: req.body } },
      { new: true }
    );
    res.status(200).json({ success: true, addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// 3. DELETE ADDRESS
exports.deleteAddress = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $pull: { addresses: { _id: req.params.addressId } } },
      { new: true }
    );
    res.json({ success: true, addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};