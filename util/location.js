const HttpError = require("../models/http-error");
const axios = require("axios");
const API_KEY = "AIzaSyDhaa0kUmOsInwtSppc6ae4jLmbabCkzBE";
async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  const data = response.data;
  if (!data || data.status === "ZERO_RESULT") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
module.exports = getCoordsForAddress;
