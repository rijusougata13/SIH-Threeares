const { default: axios } = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');


const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors()
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}
);

app.get("/distance", async (req, res) => {
  const result = await axios.get(`https://distanceto.herokuapp.com/distance?pin1=${req.query.origin}&pin2=${req.query.destination}`);
  console.log(result.data);
  return res.json(result.data);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the backend"
  })
})

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`listening on 5000`);
});