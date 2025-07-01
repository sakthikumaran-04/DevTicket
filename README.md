# 🧾 DevTicket

DevTicket is a full-stack ticket and feature tracking application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). It's designed to help developers and teams manage bugs, feature requests, and task progress across multiple projects — all with **role-based access** and a clean, modern UI.

---

## 🚀 Features

- 👤 **User Authentication** (JWT + httpOnly Cookies)
- 🛡️ **Role-based Access**: `admin` vs `user`
- 🗂️ **Project Management**  
  - Create projects  
  - Assign team members  
  - View project-specific tickets
- 🎫 **Ticket Management**  
  - Create, edit, delete tickets  
  - Assign users to tickets  
  - Update status: `todo`, `in-progress`, `done`
- 📊 **Priority Levels**: `low`, `medium`, `high`
- 🔍 **Filter Tickets** by status & priority
- 👀 **Admin Dashboard** for global user/project/ticket view
- 💬 **Real-time Feedback** via toast notifications
- 🌐 **Responsive UI** built with Tailwind CSS

---

## 🧰 Tech Stack

| Layer      | Tech                |
|------------|---------------------|
| Frontend   | React, Tailwind CSS |
| Backend    | Node.js, Express.js |
| Database   | MongoDB, Mongoose   |
| Auth       | JWT, Cookies        |
| Tools      | Git, Postman, Vercel |

---

## 📂 Folder Structure

```bash
DevTicket/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
├── backend/               # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── index.js
