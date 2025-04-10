# 🎓 Student Job Tracker

A full-stack web application that helps students keep track of their job applications in one place. Users can add, update, filter, and delete job applications. The app features a clean UI and responsive design.

---

## 🛠 Tech Stack

### Frontend:
- React (with Hooks)
- Axios
- Tailwind CSS (or Bootstrap optional)

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose (MongoDB Atlas)

### Deployment:
- **Frontend**: Vercel  
- **Backend**: Render
- **Database**: MongoDB Atlas

---

## ✨ Features

- ✅ Add Job Applications (Fields: Company, Role, Status, Date, Link)
- 📋 View All Applications in a clean grid layout
- 🔍 Filter by Status or Date
- ✏️ Update Application Status
- 🗑 Delete Application
- 🌐 Fully Responsive Design

---

## 🚀 Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/student-job-tracker.git
cd student-job-tracker
```

## 🔧 Backend Setup

### 1. Navigate to the Backend Folder

```bash
cd server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure .env

Create a .env file inside the server directory:

```bash
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
```

### 4. Run Server (Dev Mode)

```bash
npx nodemon index.js
```

## 💻 Frontend Setup

### 1. Navigate to Frontend

```bash
cd client
```
 ### 2. Install Dependencies

```bash
npm install
```

### 4. Start React App

```bash
npm run dev
```



### 🔹 Frontend (Vercel)

1. Push your `client` folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import your GitHub repository.
3. During setup:
   - Set the root directory as `client`
   - Add an environment variable:
     - `VITE_API_URL` = your deployed backend URL (e.g., `https://student-job-tracker-api.onrender.com`)
4. Click **Deploy**.
5. After deployment, Vercel will provide a public URL for your frontend.

---

### 🔹 Backend (Render)

1. Push your `server` folder to a GitHub repository.
2. Go to [render.com](https://render.com) and create a new **Web Service**.
3. Connect your GitHub repo and select the `server` folder as the root directory.
4. Set the build command:  
   `npm install`
5. Set the start command:  
   `node index.js`
6. Add Environment Variable:
   - `MONGO_URI` = your MongoDB Atlas URI
7. Set the port to `5000` if prompted.
8. Deploy and copy your Render URL (e.g. `https://student-job-tracker-api.onrender.com`)

---

## 📌 Features

- ✅ Add a new job application with fields: Company, Role, Status, Date, and Link
- 📃 List all applications in a clean and responsive layout
- 🔍 Filter applications by status or date
- 🔄 Update job application status
- ❌ Delete a job application entry

---

## 🖼️ Screenshots

_Add your app screenshots here after deployment_

---

## 📬 Contact

For feedback or questions, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/lakshmi-narayana-kuntumalla-6759872bb/) or email.

---

## 🏁 Final Notes

- Ensure both frontend and backend are deployed and environment variables are correctly configured.
- Use Tailwind CSS or Bootstrap for styling if needed.
- Keep your MongoDB IP whitelist updated if accessing from a new device.






 
