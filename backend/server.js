const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios").default;

app.use(cors({ origin: 'http://localhost:3000' }));

const air = {
    method: 'GET',
    url: 'https://api.ambeedata.com/latest/by-lat-lng',
    params: {lat: '25.59', lng: '85.13'},
    headers: {
        'x-api-key': '58fa16653b0eef04623f84c4908fe4d2c118f5e2b98a640948d561d177735c50',
        'Content-type': 'application/json'
    }
};
const soil = {
    method: 'GET',
    url: ' https://api.ambeedata.com/soil/latest/by-lat-lng?lat=12&lng=77',
    params: {lat: '25.59', lng: '85.13'},
    headers: {
        'x-api-key': '58fa16653b0eef04623f84c4908fe4d2c118f5e2b98a640948d561d177735c50',
        'Content-type': 'application/json'
    }
};

const weather = {
    method: 'GET',
    url: ' https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12&lng=77',
    params: {lat: '25.59', lng: '85.13'},
    headers: {
        'x-api-key': '58fa16653b0eef04623f84c4908fe4d2c118f5e2b98a640948d561d177735c50',
        'Content-type': 'application/json'
    }
};
const pollen = {
    method: 'GET',
    url: '  https://ambee-pollen-data1.p.rapidapi.com/latest/pollen/by-lat-lng',
    params: {lat: '25.59', lng: '85.13'},
    headers: {
        'x-api-key': '58fa16653b0eef04623f84c4908fe4d2c118f5e2b98a640948d561d177735c50',
        'Content-type': 'application/json'
    }
};



app.get("/api/air", (req, res) => {
    axios.request(air)
        .then(function (response) {
            // Send the response data back to the client
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
            // Handle errors and send an error response if necessary
            res.status(500).json({ error: "Internal server error" });
        });
});


app.get("/api/soil", (req, res) => {
    axios.request(soil)
        .then(function (response) {
            // Send the response data back to the client
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
            // Handle errors and send an error response if necessary
            res.status(500).json({ error: "Internal server error" });
        });
});

app.get("/api/weather", (req, res) => {
    axios.request(weather)
        .then(function (response) {
            // Send the response data back to the client
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
            // Handle errors and send an error response if necessary
            res.status(500).json({ error: "Internal server error" });
        });
});
app.get("/api/pollen", (req, res) => {
    axios.request(pollen)
        .then(function (response) {
            // Send the response data back to the client
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
            // Handle errors and send an error response if necessary
            res.status(500).json({ error: "Internal server error" });
        });
});


app.listen(8080, () => {
    console.log("Listening on port 8080");
});
