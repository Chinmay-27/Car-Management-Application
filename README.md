
# 🚗 Car Management Application

A full-stack web application that allows users to manage their cars. Users can create, view, edit, and delete car entries. The application includes user authentication, and each user can only manage their own cars. Users can also upload up to 10 images for each car, add tags, and search through their list of cars.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla JS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for ORM)
- **Authentication**: JWT (JSON Web Token)
- **Cloud Deployment**: Vercel (Frontend), Heroku (Backend)
- **API Documentation**: Swagger/Postman

## 🌟 Features

1. **User Authentication**:
   - Users can sign up and log in securely using JWT tokens.
   - Authenticated routes ensure only logged-in users can manage their cars.

2. **Car Management**:
   - Users can add new cars with details like title, description, tags, and up to 10 images.
   - Users can view a list of all their cars.
   - Users can search through their cars using keywords (title, description, tags).
   - Users can click on a car to view detailed information.
   - Users can edit or delete their car entries.

3. **API Endpoints**:
   - User creation, login, and JWT-based authentication.
   - CRUD operations for car management (Create, Read, Update, Delete).
   - Search functionality for filtering cars.

## 📂 Project Structure

```bash
car-management-app/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── carController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Car.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── carRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── db.js
│   ├── index.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── car-list.html
│   ├── add-car.html
│   ├── car-detail.html
│   ├── styles/
│   │   └── style.css
│   └── scripts/
│       ├── auth.js
│       ├── car-list.js
│       └── add-car.js
└── README.md
🖥️ Getting Started
Prerequisites
Node.js (v18+)
MongoDB (Ensure MongoDB is installed and running locally or use a MongoDB Atlas URI)
Nodemon (For development)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Chinmay-27/car-management-app.git
cd car-management-app
Backend Setup:

bash
Copy code
cd backend
npm install
Environment Variables: Create a .env file in the backend/ directory with the following:

makefile
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/car-management-app
JWT_SECRET=your_jwt_secret_key
Start the Backend Server:

bash
Copy code
npm run dev
The server will run at http://localhost:5000.

Frontend Setup: Open index.html in your browser or serve it using a local server.

📋 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login an existing user
Car Management
Method	Endpoint	Description
POST	/api/cars	Create a new car
GET	/api/cars	Get all cars for the user
GET	/api/cars/:id	Get a specific car by ID
PUT	/api/cars/:id	Update a car
DELETE	/api/cars/:id	Delete a car
GET	/api/cars/search	Search cars by keyword
🔍 API Documentation
You can find detailed API documentation using Postman or Swagger. To view the API docs locally:

Start the backend server (npm run dev).
Visit http://localhost:5000/api/docs for Swagger documentation (if integrated).
🗃️ Database Schema
User Schema
javascript
Copy code
{
  name: String,
  email: String,
  password: String
}
Car Schema
javascript
Copy code
{
  user: ObjectId,
  title: String,
  description: String,
  tags: [String],
  images: [String],
  createdAt: Date,
  updatedAt: Date
}
🧪 Testing
Use Postman or cURL for testing the backend API endpoints.
Use the browser’s console and network tab to debug frontend API requests.
🚀 Deployment
Backend (Heroku)
Push your code to GitHub.
Link your Heroku app with the GitHub repository.
Set environment variables in the Heroku dashboard.
Frontend (Vercel)
Create a Vercel project and link it with your GitHub repository.
Deploy the frontend/ folder.
🐛 Known Issues
Image uploads are currently limited to URLs (file uploads are not implemented).
Error handling can be improved for edge cases.
🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

📄 License
This project is open-source and available under the MIT License.

📞 Contact
Chinmay Raut

📧 Email: chinmayraut27@gmail.com
🌐 LinkedIn: in/chinmayraut276
