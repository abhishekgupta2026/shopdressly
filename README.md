# Dress Shop

Dress Shop is a full-stack e-commerce application for purchasing fashion apparel. The project is built using modern web technologies and is hosted on Vercel.

## 🚀 Live Demo
[Visit the Live Site](https://dress-shop.vercel.app/)

## 📌 Features
- User Authentication (Sign up, Login, Logout)
- Product Listings with Filtering & Sorting
- Shopping Cart & Wishlist
- Secure Checkout & Payment Integration
- Admin Dashboard for Product Management
- Responsive Design for All Devices

## 🛠️ Tech Stack
### Frontend
- React.js (Next.js for SSR and SEO Optimization)
- Tailwind CSS for Styling
- Redux Toolkit for State Management

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ORM
- JWT Authentication

### Deployment
- Frontend & Backend: Hosted on **Vercel**
- Database: MongoDB Atlas

## 📂 Folder Structure
```
/dress-shop
│── frontend (React/Next.js code)
│── backend (Express.js API)
│── public (Static Assets)
│── .env (Environment Variables)
│── package.json (Dependencies & Scripts)
│── README.md (Project Documentation)
```

## 📖 Installation & Setup

### Prerequisites
- Node.js & npm installed
- MongoDB Atlas Account

### Steps to Run Locally
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/dress-shop.git
   cd dress-shop
   ```
2. **Set Up Environment Variables**
   Create a `.env` file in both `frontend` and `backend` directories with the required values.
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
3. **Install Dependencies**
   ```sh
   cd frontend && npm install
   cd ../backend && npm install
   ```
4. **Run the Application**
   ```sh
   cd backend && npm run dev
   cd ../frontend && npm run dev
   ```
   The app should now be running at `http://localhost:3000`

## 📜 API Endpoints
- **GET /api/products** - Fetch all products
- **POST /api/users/login** - Authenticate user
- **POST /api/orders** - Create a new order

## 🚀 Deployment
- The frontend and backend are deployed on **Vercel**.
- Update `.env` with production credentials.

## 📌 Contributing
Contributions are welcome! Feel free to fork the repo and submit a PR.

## 📞 Contact
For any queries, reach out to [your email].


