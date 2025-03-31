const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipesRouter = require('./routes/recipes_router');

const app = express();
const PORT = 8001;


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://ishujoshi0401:F2-megaboutefa@cluster0.l6y3z.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));


app.use('/recipe', recipesRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});