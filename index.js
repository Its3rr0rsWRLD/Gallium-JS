const { exec } = require('child_process');
const fs = require('fs');
const { exit } = require('process');

function print(s) {
    console.log(s);
}

module.exports = {
    init: function(width, height, title) {
        print('\n[Gallium] Initializing...\n');
        fs.writeFileSync('gallium-js.py', '');
        function write(s) {
            fs.writeFileSync('gallium-js.py', s);
        }
        function add(s) {
            fs.appendFileSync('gallium-js.py', s);
        }
        write('import tkinter as tk\nroot = tk.Tk()\nroot.title("' + title + '")\nroot.geometry("' + width + 'x' + height + '")\nroot.iconbitmap("gallium-js.ico")\n');
        print('[Gallium] Initialized. Ready to load.\n');
    },

    loop: function() {
        print('[Gallium] Running the app.\n');
        fs.appendFileSync('gallium-js.py', 'root.mainloop()');
        print('[Gallium] Loaded.\n');
        exec('python gallium-js.py', (err, stdout, stderr) => {
            if (err) {
                print('[Gallium] Error: ' + err);
                return;
            }
        });
    },

    resizable: function(x, y) {
        if (x == true) {
            x = 'True';
        }

        else if (x == false) {
            x = 'False';
        } else {
            print('[Gallium] Error: Invalid argument for x. Must be a boolean.');
            exit();
        }

        if (y == true) {
            y = 'True';
        }

        else if (y == false) {
            y = 'False';
        } else {
            print('[Gallium] Error: Invalid argument for y. Must be a boolean.');
            exit();
        }

        fs.appendFileSync('gallium-js.py', 'root.resizable(' + x + ', ' + y + ')\n');
    },

    button: function(text, x, y, width, height, callback) {
        if (callback == undefined) {
            callback = 'pass';
        }

        if (callback == 'exit') {
            callback = 'root.destroy';
        }
        fs.appendFileSync('gallium-js.py', 'button = tk.Button(root, text="' + text + '", command=' + callback + ')\nbutton.place(x=' + x + ', y=' + y + ', width=' + width + ', height=' + height + ')\n');
    }

};