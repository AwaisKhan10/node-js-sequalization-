exports.check = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      error: null,
      body: { status: "ok" },
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      error: e.message,
      body: null,
    });
  }
};
