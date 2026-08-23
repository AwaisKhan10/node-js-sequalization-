const db = require("../../db");

exports.list = async (req, res) => {
  try {
    const body = await db.user.findAll({
      include: [{ model: db.role, attributes: ["id", "title"] }],
      attributes: { exclude: ["password"] },
    });
    res.status(200).send({ success: true, error: null, body });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message, body: null });
  }
};
