exports.scheduleEmail = async (req, res) => {
  console.log("jo");

  res.status(200).json({ msg: "hello" });
};

exports.getScheduledEmails = async (req, res) => {
  try {
    console.log("jo");

    res.status(200).json({ msg: "hello" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "hello" });
  }
};

exports.getScheduledEmailDetails = async (req, res) => {};

exports.cancelScheduledEmail = async (req, res) => {};
