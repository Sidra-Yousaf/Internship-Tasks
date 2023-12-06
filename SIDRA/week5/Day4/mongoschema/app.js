const express = require("express");
const mongoose = require("mongoose");
const groceryRoutes = require("./routes/groceryRoutes");

const app = express();
const PORT = 4000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/api/grocery", groceryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
