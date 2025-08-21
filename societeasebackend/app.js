const express = require('express');
const cors = require('cors');

const app = express();
const router=express.Router();

app.use(router);
require('./Services/index')(router)
app.use(express.json());
//app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.use(cors({
  origin: 'http://localhost:3000'
}));