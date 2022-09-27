const app = require('./index.js');

// Initialize the app with the width, height, and title
app.init(500, 300, 'Example');

app.resizable(false, false);

app.button('Close App', 10, 10, 100, 50, "exit");

app.loop();