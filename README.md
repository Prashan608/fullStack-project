# 🛒 ShopSphere - E-Commerce Platform

🚀 Live Project Preview

👉 Click Here to Explore: https://shop-spehere.netlify.app

A full-stack e-commerce application built with **React** and **Express.js** that allows users to browse products, filter by category, sort by price, manage shopping cart, and complete user authentication.

---

## ✨ Features

### 🔐 **User Authentication**
- User registration (Signup) with validation
- Secure login with JWT tokens
- Password hashing with bcrypt
- Protected routes for authenticated users
- Persistent login using localStorage
- Personalized user experience with username display

### 🛍️ **Product Management**
- Browse all products from FakeStore API
- View detailed product information
- Filter products by category (Electronics, Jewelry, Men's/Women's Clothing)
- Sort products by price (Low to High, High to Low)
- Real-time product search functionality
- Beautiful product cards with ratings and pricing

### 🛒 **Shopping Cart**
- Add/remove products from cart
- View cart items with quantities
- Real-time cart count in navbar
- Cart persistence using context API

### 📱 **Responsive Design**
- Fully responsive layout for desktop, tablet, and mobile
- Beautiful UI with gradient colors and smooth animations
- Professional styling and user-friendly interface

---

## 🛠️ Tech Stack

### **Frontend**
- React 18+ (with Hooks & Context API)
- Vite (Fast build tool)
- React Router (Navigation)
- CSS3 (Custom styling)
- Fetch API (HTTP requests)

### **Backend**
- Node.js
- Express.js (Web framework)
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)
- Bcrypt (Password encryption)
- CORS (Cross-origin requests)
- Dotenv (Environment variables)

### **API**
- FakeStore API (Product data)

---

## 📁 Project Structure

```
Shop-spehere/
├── client/
│   └── shoping-app/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.jsx
│       │   │   ├── Navbar.css
│       │   │   ├── ProductCard.jsx
│       │   │   ├── ProductCard.css
│       │   │   ├── FilterSidebar.jsx
│       │   │   ├── Footer.jsx
│       │   │   └── Footer.css
│       │   ├── pages/
│       │   │   ├── Home.jsx / Home.css
│       │   │   ├── Products.jsx / Products.css
│       │   │   ├── ProductDetails.jsx / ProductDetails.css
│       │   │   ├── Cart.jsx / Cart.css
│       │   │   ├── Login.jsx / Login.css
│       │   │   ├── Signup.jsx / Signup.css
│       │   │   └── Auth.jsx / Auth.css
│       │   ├── context/
│       │   │   ├── AuthContext.jsx
│       │   │   ├── CartContext.jsx
│       │   │   └── searchContext.jsx
│       │   ├── routes/
│       │   │   ├── AllRoutes.jsx
│       │   │   └── PrivateRoute.jsx
│       │   ├── services/
│       │   │   └── api.js
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── package.json
│       ├── vite.config.js
│       └── index.html
├── server/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   └── user.models.js
│   └── routes/
│       └── auth.routes.js
└── README.md
```

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017 or provide URI)
- npm or yarn

### **Backend Setup**

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in server directory with:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopsphere
JWT_SECRET=shopsphere_jwt_secret_2026@secure
```

4. Start the server:
```bash
node index.js
```

Server will run on `http://localhost:5000`

### **Frontend Setup**

1. Navigate to client directory:
```bash
cd client/shoping-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 📚 API Endpoints

### **Authentication Routes**

#### Register User
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "msg": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get Profile (Protected)
```
GET /auth/profile
Authorization: Bearer <token>
```

---

## 🎯 How to Use

### **For Users**

1. **Register/Signup**
   - Click "Sign Up" in navbar
   - Fill in name, email, password, and confirm password
   - Click "Sign Up" button
   - Receive confirmation and redirect to login

2. **Login**
   - Click "Login" in navbar
   - Enter email and password
   - Click "Login" button
   - Get redirected to products page

3. **Browse Products**
   - View all products on Products page
   - Filter by category using dropdown
   - Sort by price (Low to High, High to Low)
   - Search for products in navbar search bar

4. **View Product Details**
   - Click on any product card
   - View detailed information, price, and ratings
   - Add to cart

5. **Shopping Cart**
   - View cart items in sidebar or navbar
   - Add/remove items from cart
   - Proceed to checkout (feature coming soon)

6. **Logout**
   - Click "Logout" button in navbar
   - Get redirected to home page

### **For Developers**

1. **Add Products to Database**
   - Currently using FakeStore API
   - Can be extended to add custom product database

2. **Customize Styling**
   - All CSS files are in components and pages folders
   - Easy to customize colors, fonts, and layouts

3. **Add New Features**
   - Use context API for state management
   - Add new routes in `routes/AllRoutes.jsx`
   - Create new pages in `pages/` folder
   - Create new components in `components/` folder

---

## 🔒 Security Features

- ✅ Password hashing using bcrypt
- ✅ JWT token-based authentication
- ✅ Protected routes (PrivateRoute component)
- ✅ Secure token storage in localStorage
- ✅ CORS enabled for frontend-backend communication
- ✅ Environment variables for sensitive data

---

## 📝 Environment Variables

### **Server (.env)**
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopsphere
JWT_SECRET=shopsphere_jwt_secret_2026@secure
```

---

## 🐛 Troubleshooting

### **MongoDB Connection Error**
- Ensure MongoDB is running
- Check MONGO_URI in .env file
- Verify port 27017 is available

### **CORS Error**
- Ensure backend is running on port 5000
- Check CORS middleware in server/index.js

### **Token Expired**
- Re-login to get new token
- Token expires in 7 days

### **Products Not Loading**
- Check internet connection (uses FakeStore API)
- Verify backend is running
- Clear browser cache and reload

---

## 🚧 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Order history and tracking
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Multiple language support
- [ ] Dark mode theme

---

## 👨‍💻 Developer

Built with ❤️ for learning and practice

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📞 Support

For support, questions, or feedback, feel free to reach out.

---

## 🎉 Enjoy Shopping with ShopSphere!

Happy coding! 🚀
