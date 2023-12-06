const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("sidra");
});

const validationSchemaForRegister = [
  body("name").isLength({ min: 2 }),
  body("email").isEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("must be atleast 5 char long")
    .isLength({
      max: 13,/// .....
    })
    .withMessage("Max 12 char only allowed"),
];

app.post("/", validationSchemaForRegister, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json({ data: req.body });
});

const PORT = 4000;
app.listen(PORT);
