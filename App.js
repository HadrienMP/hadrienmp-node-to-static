const fs = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const app = setupApp();

app.get('/', function (req, res) {
    res.render('index', {realisations: readRealisations()});
});

app.get('/resume', function (req, res) {
    res.render('resume');
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`App running on http://0.0.0.0:${port}`);
});


function setupApp() {
    const app = express();
    app.set('view engine', 'pug');
    app.use(express.static('public'));
    return app;
}

function readRealisations() {
    let realisationsString = fs.readFileSync('./realisations.yaml', 'utf8');
    return yaml.safeLoad(realisationsString);
}
