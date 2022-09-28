const app = require('./index.js');

app.init(500, 300, 'Example');

app.resizable(false, false);

app.button('Close App', 10, 10, 100, 50, "exit");

app.loop();