# 🚀 Backend API

A scalable and secure RESTful backend built with **Node.js**, **Express.js**, and **MongoDB**. This project provides APIs for authentication, user management, and application-specific features.

---

## 📌 Features

- 🔐 User Authentication (JWT)
- 👤 User Registration & Login
- 🔑 Password Hashing with bcrypt
- 🗄️ MongoDB Database Integration
- 📦 RESTful API Architecture
- ⚡ Express Middleware
- 🌐 CORS Enabled
- 📝 Environment Variable Configuration
- ❌ Centralized Error Handling
- 📂 Modular Folder Structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv
- cors
- nodemon

---

## 📁 Project Structure

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── utils/
│
├── uploads/
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
```

### Start the development server

```bash
npm run dev
```

or

```bash
nodemon server.js
```

---

## 🚀 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/profile | Get user profile |

---

### Users

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

---

## 🔐 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📦 Available Scripts

Install dependencies

```bash
npm install
```

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## 📚 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGODB_URI | MongoDB Connection String |
| JWT_SECRET | Secret key for JWT |
| NODE_ENV | Development/Production |

---

## 🧪 Testing

You can test the APIs using:

- Postman
- Thunder Client
- Insomnia

---

## 📈 Future Improvements

- Rate Limiting
- Email Verification
- Password Reset
- API Documentation (Swagger)
- Docker Support
- Unit & Integration Testing
- Logging and Monitoring

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by **Rashmi Ranjan**
