const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-toutes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use("/api/places", placesRoutes);

app.listen(5000);
