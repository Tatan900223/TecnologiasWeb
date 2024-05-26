const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/iudigital', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const projectTypeRoutes = require('./routes/projectTypeRoutes');
const clientRoutes = require('./routes/clientRoutes');
const universityRoutes = require('./routes/universityRoutes');
const stageRoutes = require('./routes/stageRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Use routes
app.use('/api/project-types', projectTypeRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/universities', universityRoutes);
app.use('/api/stages', stageRoutes);
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
