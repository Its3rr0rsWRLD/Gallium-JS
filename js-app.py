import tkinter as tk
root = tk.Tk()
root.title("Example")
root.geometry("500x300")
root.iconbitmap("js-app.ico")
root.resizable(False, False)
button = tk.Button(root, text="Close App", command=root.destroy)
button.place(x=10, y=10, width=100, height=50)
root.mainloop()