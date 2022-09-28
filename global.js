const { exec } = require("child_process");
const { argv } = require("process");

if (argv[2] == undefined) {
    console.log("Error: No arguments provided.");
    process.exit();
} else {
    if (argv[2] == "exit") {
        process.exit();
    }

    if (argv[2] == "pack") {
        let icon = argv[3];
        exec("pyinstaller --noconfirm --onedir --windowed --icon=" + icon + " js-app.py", (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(stdout);
        });
        console.clear();
    }
}