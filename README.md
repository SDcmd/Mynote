# MyNote
A full-stack **Notes Management Web Application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to **create**, **read**, **edit**, and **delete** notes.

## Features 
Users can create notes.

Users can edit notes.

Users can delete notes.


## **Setup Instructions**

To run the web application there are two options:

**Option 1:**

Using the live link

(Please note: The app is deployed on render.com on the FREE Tier which has certain limitation such as; after 15 minutes of inactivity the website will try to build again which will delay requests by 50 seconds or more. After 50 seconds the app will load and will function normally. 

**click on the live link:**

 https://mynote-nkjw.onrender.com
 

**Option 2:**
 
 **Manual installation:**

**Prerequisites** 

 1. Install Node.js (LTS version).
 2. Install Git.
 3. Install Visual Studio Code (recommended).

**Cloning the repository**

 4. Open any preferred folder in Visual Studio Code.
 5. Open the terminal in Visual Studio Code.
 6. In the terminal type: Git clone https://github.com/SDcmd/Mynote.git 
 7. Click on enter and wait for cloning to finish. 
 8. After the cloning completes, go to the project's main directory. In the terminal type: cd Mynote
    
sample:
```bash 
SD-comp-book temptest % cd Mynote
SD-comp-book Mynote % 
```
**Environment Variables**

 9. Go to the backend folder and create a new " .env " file.
 10. In the " .env " file, copy and paste the credentials for MONGO_URI and PORT provided in the pptx file. 
 11. After entering the credentials in the " .env " file, save the file.

sample:
![Screenshot 2025-10-17 at 6 46 34 PM](https://github.com/user-attachments/assets/2bd9238e-db22-4006-8fdb-d96412fab998)


**Installing Dependencies** 

 12. In the terminal making sure the project's root directory is selected, type the command: npm install 
 13. Click Enter and wait for installation to complete.
 14. In the termainal type: npm run build 
 15. Click Enter and wait for installion to complete.

 **Run the App**

 16. In the terminal type: npm run dev 
 17. Click Enter and wait for installation to complete.
 18. Success message is shown as:

```bash
[1]   ➜  Local:   http://localhost:5173/
[1]   ➜  Network: use --host to expose
[0] [nodemon] 3.1.10
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,cjs,json
[0] [nodemon] starting `node src/server.js`
[0] MongoDB Connected Successfully
[0] Server started on PORT: 5001
```
19. Copy the link "http://localhost:5173/" and paste it in a browser.
20. Click Enter to start the application.







 

 
