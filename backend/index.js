const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emails');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use('/api/emails', emailRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
