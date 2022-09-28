# Why should I use JS App?
Idk. It's just tkinter but for javascript. It's not that good, but it's better than nothing, especially if you don't know html and don't want to use electron.

# Info
***JS App "converts" to python, so if you do not have python installed, it needs to be installed.***
***Please install JS App globally using npm install -g @thaterror404/js-app***

# Commands
***js-app pack <icon>*** - Pack your app into a .exe file (if on windows. If on any other OS, it will be a executable specific to your OS)

# Functions
```js
const app = require('@thaterror404/js-app');

app.init(500, 300, 'Example'); // Initialize the app with the width, height, and title

app.resizable(false, false); // Make the app resizable or not

app.button('Close App', 10, 10, 100, 50, "exit"); // Create a button with the text, x, y, width, height, and function (Function still in development, only exit works)

app.loop(); // Loop the app, like mainloop in python tkinter
```