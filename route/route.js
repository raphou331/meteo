require("dotenv").config({ path: "config.env" });
const express = require("express");
const axios = require("axios");

const route = express.Router();

route.get("/", async (req, res) => {
  res.render("index", {
    meteo: null,
    error: null,
  });
});
route.get("/meteo", async (req, res) => {
  const apiKey = process.env.meteo_api_keys;
  let meteo;
  let error = null;
  const city = req.query.city;
  const meteoURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(meteoURL);
    meteo = response.data;
    console.log(meteo);
    console.log(city);
  } catch (error) {
    meteo = null;
    console.log(error.message);
  }

  res.render("index", {
    meteo,
    city,
    error,
  });
});
module.exports = route;
