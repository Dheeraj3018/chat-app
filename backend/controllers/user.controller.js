import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id

    // will show ever user in database except the user , if you want to show the logged in user adlso remove the code inside find
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.error("Error in getUsersForSidebar", error.message)
    res.status(500).json({ error: "Internal server error" });
  }
}