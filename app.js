import express from "express";

const app = express();

// Config EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Website',
        message: 'Hello from EJS',
    });
});

app.listen(8000, () => console.log('Server started'));