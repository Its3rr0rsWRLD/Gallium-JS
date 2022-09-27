const { exec } = require('child_process');
const fs = require('fs');
const { exit } = require('process');

function print(s) {
    console.log(s);
}

module.exports = {
    init: function(width, height, title) {
        print('\n[JS-App] Initializing...\n');
        fs.writeFileSync('js-app.py', '');
        function write(s) {
            fs.writeFileSync('js-app.py', s);
        }
        function add(s) {
            fs.appendFileSync('js-app.py', s);
        }
        write('import tkinter as tk\nroot = tk.Tk()\nroot.title("' + title + '")\nroot.geometry("' + width + 'x' + height + '")\nroot.iconbitmap("js-app.ico")\n');
        print('[JS-App] Initialized. Ready to load.\n');
    },

    loop: function() {
        print('[JS-App] Running the app.\n');
        fs.appendFileSync('js-app.py', 'root.mainloop()');
        exec('python js-app.py', (err, stdout, stderr) => {
            if (err) {
                print('[JS-App] Error: ' + err);
                return;
            }
            print('[JS-App] Loaded.\n');
        });
    },

    resizable: function(x, y) {
        if (x == true) {
            x = 'True';
        }

        else if (x == false) {
            x = 'False';
        } else {
            print('[JS-App] Error: Invalid argument for x. Must be a boolean.');
            exit();
        }

        if (y == true) {
            y = 'True';
        }

        else if (y == false) {
            y = 'False';
        } else {
            print('[JS-App] Error: Invalid argument for y. Must be a boolean.');
            exit();
        }

        fs.appendFileSync('js-app.py', 'root.resizable(' + x + ', ' + y + ')\n');
    },

    button: function(text, x, y, width, height, callback) {
        if (callback == undefined) {
            callback = 'pass';
        }

        if (callback == 'exit') {
            callback = 'root.destroy';
        }
        fs.appendFileSync('js-app.py', 'button = tk.Button(root, text="' + text + '", command=' + callback + ')\nbutton.place(x=' + x + ', y=' + y + ', width=' + width + ', height=' + height + ')\n');
    }

};