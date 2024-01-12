const express = require("express");
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State BUilding",
    description: "One of the most famous sky scraper in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === placeId;
  });
  if (!place) {
    const error = new Error("Could find a place for the provided id!");
    error.code = 404;
    throw error;
  }
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_PLACES.find((u) => {
    return u.id === userId;
  });
  if (!user) {
    const error = new Error("Could find a place for the provided user id!");
    error.code = 404;
    return next(error);
  }
  res.json({ user });
});

module.exports = router;
