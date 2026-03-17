# 🛒 ShopSphere - Full-Stack E-Commerce Application

A complete full-stack e-commerce platform with a modern React-based frontend, Express.js backend, and MongoDB database. Features include secure user authentication, product browsing with filtering and search, shopping cart management, and JWT-based session handling.

---

## ✨ Features

### 🔐 **Authentication System**
- User Registration (Signup) with form validation
- Secure Login with JWT tokens
- Persistent authentication using localStorage
- Protected routes for authenticated users
- Personalized greetings with username in navbar
- Logout functionality

### 🛍️ **Product Discovery**
- Browse all products from FakeStore API
- Filter products by 4 categories:
  - Electronics
  - Jewelry
  - Men's Clothing
  - Women's Clothing
- Real-time product search in navbar
- Sort by price (Low to High, High to Low)
- Detailed product view with ratings and descriptions

### 🛒 **Shopping Cart**
- Add/Remove products from cart
- Display cart item count in navbar
- Manage quantities (feature expandable)
- Cart persistence using Context API

### 📱 **Responsive UI**
- Mobile-first responsive design
- Works seamlessly on all devices (desktop, tablet, mobile)
- Beautiful gradient styling and animations
- User-friendly interface with intuitive navigation

### 🎨 **Modern Design**
- Gradient color scheme (Purple & Blue)
- Smooth hover effects and transitions
- Professional card-based layouts
- Emoji icons for enhanced UX

---

## 🛠️ Tech Stack

### **Frontend (Client-Side)** 🎨
| Technology | Purpose |
|------------|---------|
| **React 18+** | UI framework with Hooks |
| **React Router** | Client-side routing |
| **Context API** | State management |
| **Vite** | Build tool and dev server |
| **CSS3** | Custom styling |
| **Fetch API** | HTTP requests |

### **Backend (Server-Side)** 🔧
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework & API server |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure token-based authentication |
| **Bcrypt** | Password hashing & encryption |
| **Cors** | Cross-origin resource sharing |
| **Dotenv** | Environment variable management |

### **External APIs** 🌐
- **FakeStore API** - For product data (`https://fakestoreapi.com/products`)

---

## 🏗️ Full-Stack Architecture

This is a **complete full-stack application** with three main layers:

### **1. Frontend Layer (React + Vite)**
- User interface for browsing, searching, filtering products
- Authentication pages (Login, Signup)
- Shopping cart management
- Real-time search functionality
- Responsive design for all devices

**Location:** `/client/shoping-app/`

### **2. Backend Layer (Express.js + Node.js)**
- RESTful API endpoints for authentication
- User registration with password hashing (Bcrypt)
- Secure login with JWT token generation
- Protected routes with middleware
- CORS support for frontend communication

**Location:** `/server/`

**Available Endpoints:**
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user and get token
- `GET /auth/profile` - Get user profile (protected)

### **3. Database Layer (MongoDB)**
- Stores user information securely
- Encrypted passwords using Bcrypt
- User model with validation
- Data persistence across sessions

**Collections:**
- `users` - Stores user data (name, email, hashed password)

### **Data Flow Diagram**

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (React)                       │
│  - Signup/Login Forms                                   │
│  - Product Browsing & Filtering                          │
│  - Shopping Cart                                         │
│  - User Session Management                              │
└────────────────────┬────────────────────────────────────┘
                     │ (HTTP Requests)
                     │ Fetch API / JSON
                     ↓
┌─────────────────────────────────────────────────────────┐
│              BACKEND (Express.js)                        │
│  - Authentication Routes                                │
│  - API Endpoints                                        │
│  - JWT Token Generation                                 │
│  - Password Hashing (Bcrypt)                             │
│  - Request Validation                                   │
└────────────────────┬────────────────────────────────────┘
                     │ (Mongoose Queries)
                     │ Database Operations
                     ↓
┌─────────────────────────────────────────────────────────┐
│              DATABASE (MongoDB)                          │
│  - User Collection                                      │
│  - Persistent Data Storage                              │
│  - Indexed for Performance                              │
└─────────────────────────────────────────────────────────┘
```

### **Communication Flow**

1. **Registration:**
   - User fills signup form in React
   - Frontend sends POST request to `/auth/register`
   - Backend validates input and hashes password
   - User data stored in MongoDB
   - Success response sent back to frontend

2. **Login:**
   - User enters credentials in React
   - Frontend sends POST request to `/auth/login`
   - Backend verifies email exists in MongoDB
   - Backend compares password hash
   - JWT token generated and sent to frontend
   - Frontend stores token in localStorage

3. **Session Management:**
   - Frontend includes JWT token in Authorization header
   - Backend middleware verifies token
   - User stays logged in across page refreshes
   - Token expires in 7 days

---

## 📁 Folder Structure

### **Frontend Folder Structure**

```
src/
├── components/
│   ├── Navbar.jsx        → Navigation bar with logo, search, links
│   ├── Navbar.css
│   ├── ProductCard.jsx   → Reusable product card component
│   ├── ProductCard.css
│   ├── FilterSidebar.jsx → Filter component (expandable)
│   ├── FilterSidebar.css
│   ├── Footer.jsx        → Footer section
│   └── Footer.css
├── pages/
│   ├── Home.jsx          → Landing page with hero section
│   ├── Home.css
│   ├── Products.jsx      → Products listing with filters & sort
│   ├── Products.css
│   ├── ProductDetails.jsx → Single product detailed view
│   ├── ProductDetails.css
│   ├── Cart.jsx          → Shopping cart page
│   ├── Cart.css
│   ├── Login.jsx         → Login form
│   ├── Login.css
│   ├── Signup.jsx        → Registration form
│   ├── Signup.css
│   ├── Auth.jsx          → Auth redirect page (if needed)
│   └── Auth.css
├── context/
│   ├── AuthContext.jsx   → Authentication state management
│   ├── CartContext.jsx   → Shopping cart state management
│   └── searchContext.jsx → Search query state management
├── routes/
│   ├── AllRoutes.jsx     → Route definitions
│   └── PrivateRoute.jsx  → Protected route wrapper
├── services/
│   └── api.js            → API utility functions
├── assets/               → Images and static files
├── App.jsx               → Main app component
├── main.jsx              → React entry point
├── index.css             → Global styles
└── README.md             → This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- **MongoDB** (running locally or cloud instance)
- **Backend Server** running on `http://localhost:5000`

### ⚠️ Important: Start Backend Server First!

Before running the frontend, make sure your backend server is running:

```bash
# From project root, navigate to server
cd server

# Install dependencies (if not done yet)
npm install

# Create .env file with:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopsphere
JWT_SECRET=shopsphere_jwt_secret_2026@secure

# Start the server
node index.js

# You should see: "MongoDB Connected Successfully"
```

### Installation

1. **Navigate to frontend directory:**
```bash
cd client/shoping-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
shop-spehere.netlify.app
```

---

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🔄 Context Providers

### **AuthContext**
Manages user authentication state globally.

```javascript
{
  user: {},           // Current user object
  token: string,      // JWT token
  isAuth: boolean,    // Authentication status
  loginUser(),        // Login function
  logoutUser()        // Logout function
}
```

### **CartContext**
Manages shopping cart items globally.

```javascript
{
  cartItems: [],      // Array of products in cart
  addToCart(),        // Add product to cart
  removeFromCart()    // Remove product from cart
}
```

### **SearchContext**
Manages product search functionality.

```javascript
{
  searchQuery: string // Current search query
  setSearchQuery()    // Update search query
}
```

---

## 🎯 Page Components

### **Home Page**
- Hero section with call-to-action
- Product categories showcase
- Featured products section
- Professional footer

### **Products Page**
- All products listing (4-column grid, responsive)
- Category filter dropdown
- Price sort dropdown (Low to High, High to Low)
- Real-time search integration
- Smooth product cards with hover effects

### **Product Details Page**
- Detailed product information
- High-quality product image
- Price and ratings display
- Product description
- Add to cart button
- Back to products navigation

### **Cart Page**
- Display all cart items
- Remove items functionality
- Cart subtotal calculation
- Proceed to checkout button (expandable)
- Empty cart handling

### **Login Page**
- Email and password input fields
- Form validation
- Error message display
- Sign up link for new users
- Redirect to products on success

### **Signup Page**
- Full name, email, password inputs
- Password confirmation field
- Client-side validation:
  - All fields required
  - Password match check
  - Minimum 6 characters
- Server error handling
- Redirect to login on success

---

## 🔐 Authentication Flow

1. User registers on Sign Up page
   - Data sent to `/auth/register` endpoint
   - Password hashed on backend

2. User logs in on Login page
   - Credentials sent to `/auth/login` endpoint
   - Receives JWT token and user data

3. Token stored in localStorage
   - Sent in Authorization header for protected requests
   - Used to maintain session across page reloads

4. AuthContext provides user data to all components
   - Protected routes check `isAuth` status
   - Navbar shows username when authenticated

5. Logout clears token and user data
   - localStorage cleared
   - Redirected to home/login page

---

## 🎨 Styling Approach

- **Color Scheme**: Purple (#667eea) & Blue (#764ba2) gradients
- **Typography**: Clean, sans-serif fonts
- **Layout**: Flexbox and CSS Grid
- **Responsive**: Mobile-first approach with media queries
- **Transitions**: Smooth hover and interaction effects
- **Shadows**: Subtle box shadows for depth

### Color Palette
```css
Primary Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Text Primary: #333
Text Secondary: #666
Background: #f8f9fa / white
Success: green
Error: #d32f2f
```

---

## 🔌 API Integration

Main API endpoint: `http://localhost:5000`

### Authentication Endpoints
- `POST /auth/register` → Register new user
- `POST /auth/login` → Login user
- `GET /auth/profile` → Get user profile (protected)

### Product Data
- Uses **FakeStore API** (`https://fakestoreapi.com/products`)
- No authentication required

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Grid Columns |
|--------|-----------|--------------|
| Desktop | > 900px | 4 columns |
| Tablet | 600px - 900px | 2 columns |
| Mobile | < 600px | 1 column |

---

## 🐛 Common Issues & Solutions

### **Backend Not Running**
```
Error: Cannot POST /auth/register
```
**Solution:**
- Ensure backend server is running: `node index.js` from `/server` directory
- Check server is listening on port 5000
- Verify no other app is using port 5000

### **MongoDB Connection Error**
```
Error: DB Connection Failed
```
**Solution:**
- Ensure MongoDB is installed and running
- Check MONGO_URI in backend .env file
- Default: `mongodb://127.0.0.1:27017/shopsphere`
- Verify port 27017 is available

### **CORS Error**
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:**
- Ensure backend has CORS middleware enabled
- Check API endpoint URL is correct in frontend
- Verify `http://localhost:5000` is accessible

### **JWT/Authentication Error**
```
Error: Invalid or Expired Token
```
**Solution:**
- Re-login to get new token
- Clear localStorage: `localStorage.clear()`
- Ensure JWT_SECRET matches in backend .env
- Token expires in 7 days by default

### **User Login Failing**
```
Error: Invalid credentials
```
**Verify:**
- User was registered successfully in MongoDB
- Email and password are correct
- Backend /auth/login endpoint is working
- Check MongoDB has user collection with data

### **Sign Up Not Working**
```
User already registered / All fields required
```
**Check:**
- Fill all fields (Name, Email, Password, Confirm Password)
- Passwords must match
- Email must not already exist in database
- Backend MongoDB connection is active

### **Products Not Loading**
- Check internet connection (uses FakeStore API)
- Verify backend server is running
- Clear browser cache and reload
- Check browser console for errors

### **Cart Data Lost After Refresh**
- Cart uses Context API (in-memory storage)
- To persist cart, implement localStorage in CartContext
- Session data is cleared on browser refresh

---

## � Deployment

### **Full-Stack Deployment Process**

This project requires deploying both frontend and backend:

#### **Frontend Deployment**
- Build: `npm run build`
- Creates `/dist` folder with static files
- Deploy to: Vercel, Netlify, GitHub Pages, AWS, etc.
- Update backend API URL in production

#### **Backend Deployment**
- Host Node.js server on: Heroku, Railway, Render, AWS EC2, DigitalOcean, etc.
- Set environment variables on hosting platform
- Use MongoDB Atlas for cloud database
- Ensure CORS allows frontend domain

#### **Database Deployment**
- Use MongoDB Atlas (cloud) instead of local MongoDB
- Create cluster and connection string
- Update MONGO_URI in backend .env with cloud connection

### **Environment Variables for Production**

**Backend .env:**
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/shopsphere
JWT_SECRET=your-strong-secret-key-here
NODE_ENV=production
```

**Frontend .env (if needed):**
```env
VITE_API_URL=https://your-backend-domain.com
```

---

- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Order history
- [ ] User profile editing
- [ ] Payment integration
- [ ] Order tracking
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Product comparison
- [ ] Advanced filters

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [FakeStore API](https://fakestoreapi.com)

---

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly on different devices
4. Submit a pull request

---

## 📝 Code Style Guidelines

- Use functional components with Hooks
- Implement proper error handling
- Add comments for complex logic
- Follow ES6+ best practices
- Use meaningful variable names
- Keep components small and reusable

---

## 🔒 Security Considerations

- ✅ JWT token-based auth
- ✅ Protected routes implemented
- ✅ Input validation on forms
- ✅ Secure token storage
- ✅ HTTPS ready (production)
- ✅ XSS protection with React

---

## 📞 Support

For issues, questions, or feature requests, please open an issue or contact the development team.

---

## 📄 License

This project is part of the ShopSphere e-commerce platform.

---

## ✅ Full-Stack Project Checklist

This project includes all components of a professional full-stack application:

### **Frontend** ✔️
- [x] React with modern hooks
- [x] Context API for state management
- [x] React Router for navigation
- [x] Responsive CSS with gradients
- [x] Form validation
- [x] Error handling
- [x] API integration

### **Backend** ✔️
- [x] Express.js REST API
- [x] Authentication system
- [x] JWT token generation
- [x] Password hashing with Bcrypt
- [x] Middleware for protected routes
- [x] Error handling
- [x] CORS support

### **Database** ✔️
- [x] MongoDB for data storage
- [x] Mongoose for object modeling
- [x] User collection with validation
- [x] Unique email constraint
- [x] Data persistence

### **Ready for Production** 🚀
- [x] Environment variables configured
- [x] Error logging in place
- [x] Security best practices implemented
- [x] Responsive and accessible UI
- [x] Complete documentation

---

## 🎉 Enjoy Your Full-Stack Project!

You've successfully built a complete e-commerce platform with:
- 👨‍💼 User management system
- 🛍️ Product catalog with search & filters
- 🛒 Shopping cart functionality
- 🔐 Secure authentication
- 💾 Database persistence

This is a professional-grade full-stack application! 🚀

Built with ❤️ using React, Express, and MongoDB
