import express from 'express'; 

const app = express();
const port = 3006;

app.use(express.static('public'));


app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});