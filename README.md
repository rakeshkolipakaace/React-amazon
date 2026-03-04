# React Amazon Clone - E-Commerce Frontend Application

## 📋 Overview

**React Amazon** is a modern e-commerce frontend application built with React, Vite, and React Router. It's a feature-rich clone of Amazon's UI/UX that demonstrates building scalable React applications with industry best practices.

Perfect for:
- **Learning React**: Modern React 19 with hooks
- **Building E-Commerce Apps**: Full frontend flow implementation
- **Portfolio Projects**: Showcase full-stack thinking
- **Interview Preparation**: Real-world React patterns
- **Frontend Development**: Vite, React Router, Context API

---

## 🎯 Key Features

### ✅ **Product Browsing**
- Display all products with images, titles, prices, and descriptions
- Product cards with responsive grid layout
- Product category filtering (Mobiles, Laptops, Tablets, Watches)
- Price range filtering

### ✅ **Search & Filter**
- Search products by name/category
- Filter by category (4 main categories)
- Filter by price range (₹30,000 - ₹80,000)
- Dynamic product listing based on filters

### ✅ **Navigation**
- Sticky navbar for easy access
- Category navigation links
- Shopping cart badge (ready to implement)
- Search bar integrated in navbar
- Logo linking to home

### ✅ **Responsive Design**
- Bootstrap 5 for responsive UI
- Mobile-first approach
- Flexbox layouts
- Touch-friendly buttons and interactions

### ✅ **State Management**
- React Context API for global state
- Product data management
- Cart state handling
- Search and filter state

---

## 📂 Project Structure

```
React-amazon/
├── src/
│   ├── components/
│   │   ├── All_Products.jsx          # Main product display component
│   │   ├── Navbar.jsx                # Navigation bar component
│   │   ├── Product.jsx               # Product card component
│   │   ├── ShopByCategory.jsx        # Category filter component
│   │   ├── Trending_Slider.jsx       # Trending products slider (WIP)
│   │   └── videoPlayer.jsx           # Video player component
│   │
│   ├── pages/
│   │   ├── Cart.jsx                  # Shopping cart page (WIP)
│   │   ├── Product_Details.jsx       # Product details page (WIP)
│   │   ├── ProductByCategory.jsx     # Category products page (WIP)
│   │   └── Search_Product.jsx        # Search results page (WIP)
│   │
│   ├── context/
│   │   ├── Data.js                   # Product data (278 products)
│   │   ├── DataContext.jsx           # Context setup
│   │   └── DataState.jsx             # Context provider state
│   │
│   ├── App.jsx                       # Main app with routing
│   ├── App.css                       # Global styles
│   ├── index.css                     # Base styles
│   └── main.jsx                      # Entry point
│
├── public/                            # Static assets
├── index.html                         # HTML template
├── package.json                       # Dependencies
├── vite.config.js                     # Vite configuration
├── eslint.config.js                  # ESLint rules
└── README.md                          # This file
```

---

## 🛠 Tech Stack

### **Frontend Framework**
- **React 19.0.0**: Latest React with hooks
- **React DOM 19.0.0**: DOM rendering

### **Routing**
- **React Router DOM 7.5.0**: Client-side routing
- **React Router 7.5.0**: Router components

### **UI & Styling**
- **Bootstrap 5.3.5**: Responsive CSS framework
- **React Icons 5.5.0**: Icon library (FaAmazon, FaShoppingCart, etc.)

### **Build Tool**
- **Vite 6.2.0**: Super fast build tool
- **@vitejs/plugin-react-swc 3.8.0**: React plugin with SWC transpiler
- **ESLint**: Code quality checking

### **Development**
- **Node.js**: JavaScript runtime
- **npm**: Package manager
- **gh-pages 6.3.0**: Deploy to GitHub Pages

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 16+ (LTS recommended)
- npm 8+ or yarn
- Git

### **Installation**

1. **Clone the repository**:
```bash
git clone https://github.com/rakeshkolipakaace/React-amazon.git
cd React-amazon
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
```
http://localhost:5173
```

---

## 📦 Available Scripts

### **Development**
```bash
npm run dev
```
Start Vite development server with hot module replacement (HMR)

### **Build for Production**
```bash
npm run build
```
Create optimized production build in `dist/` folder

### **Preview Build**
```bash
npm run preview
```
Preview the production build locally

### **Linting**
```bash
npm run lint
```
Check code quality with ESLint

### **Deploy to GitHub Pages**
```bash
npm run deploy
```
Build and deploy to GitHub Pages (requires gh-pages config)

---

## 🗂 Component Architecture

### **App.jsx** - Root Component
```jsx
├── Navbar (displayed on all routes)
├── Routes (React Router):
│   ├── / → All_Products
│   ├── /cart → Cart
│   ├── /product/:id → Product_Details
│   ├── /product/category/:cat → ProductByCategory
│   └── /product/search/:term → Search_Products
└── DataState (Context Provider - wraps entire app)
```

---

## 📄 Core Components

### **1. Navbar Component** 🧭
**File**: `src/components/Navbar.jsx`

**Features**:
- Amazon logo with branding
- Search bar with icon button
- Category navigation links (Mobiles, Laptops, Tablets, Watches)
- Shopping cart button with badge
- Sticky positioning (stays on top while scrolling)
- Responsive design with Bootstrap

**Technology**:
- React Icons (FaAmazon, FaShoppingCart, FaSearch)
- React Router Link for navigation
- Bootstrap navbar classes

**Code Snippet**:
```jsx
<Link to={"/"} className="navbar-brand">
  <FaAmazon className="text-warning fs-2" />
  <span className="fs-4 fw-bold">Amazon</span>
</Link>
```

---

### **2. All_Products Component** 📦
**File**: `src/components/All_Products.jsx`

**Features**:
- Displays video banner (hero section)
- Shows all products from context
- Uses Product component for rendering
- Integrates ShopByCategory for filtering

**Technology**:
- React Context Hook (useContext)
- Video player component
- Product card mapping

**Code Flow**:
```
All_Products (fetches products from context)
    ↓
ShopByCategory (renders filter panel)
    ↓
Product (maps each product to card)
```

---

### **3. Product Component** 🛍️
**File**: `src/components/Product.jsx`

**Features**:
- Displays product cards in responsive grid
- Shows product image, title, price
- Add to Cart button
- Link to product details
- Card hover effects

**Product Card Layout**:
```
┌─────────────────────┐
│   Product Image     │
├─────────────────────┤
│   Product Title     │
│   Product Price     │
│  [Add To Cart Btn]  │
└─────────────────────┘
```

**Grid System**:
- Desktop: 3 columns (col-lg-4)
- Tablet: 2 columns (col-md)
- Mobile: 1 column (responsive)

---

### **4. ShopByCategory Component** 🔍
**File**: `src/components/ShopByCategory.jsx`

**Features**:
- Category filter buttons with icons
- Price range filter badges
- Dynamic filtering
- Active state indication

**Categories Available**:
- All Products (FaThLarge)
- Mobiles (FaMobileAlt)
- Laptops (FaLaptop)
- Tablets (FaTabletAlt)
- Watches (FaClock)

**Price Ranges**:
- ₹30,000
- ₹40,000
- ₹50,000
- ₹60,000
- ₹70,000
- ₹80,000

**Filtering Logic**:
```javascript
filterByCategory(cat) {
  setProducts(
    items.filter(pro => 
      pro.category.toLowerCase() === cat.toLowerCase()
    )
  );
}

filterByPrice(price) {
  setProducts(
    items.filter(pro => pro.price <= price)
  );
}
```

---

### **5. Context API - State Management** 🌐
**Files**: 
- `src/context/DataContext.jsx` - Context initialization
- `src/context/DataState.jsx` - Context provider
- `src/context/Data.js` - Product database

**Context Structure**:
```jsx
{
  products: [
    {
      id: 1,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "url...",
      description: "...",
      price: "89999",
      amazonLink: "..."
    },
    // ... 278 products total
  ],
  setProducts: Function,
  cart: [],
  setCart: Function
}
```

**Data.js Product Database**:
- **278 products** across 4 categories
- Categories: Mobiles, Laptops, Tablets, Watches
- Price range: ₹19,999 - ₹189,999
- Contains: title, description, price, image, Amazon link

**Example Product**:
```javascript
{
  id: 1,
  category: "mobiles",
  title: "Apple iPhone 14",
  imgSrc: "https://m.media-amazon.com/images/I/713SsA7gftL.AC_UY218.jpg",
  description: "Apple iPhone 14 (128 GB) - Blue",
  price: "89999",
  amazonLink: "https://amzn.to/3PuckZp"
}
```

---

## 🛣️ Routing Structure

### **Route Configuration** (from App.jsx)
```jsx
<Routes>
  <Route path="/" element={<All_Products />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/product/:id" element={<Product_Details />} />
  <Route path="/product/category/:cat" element={<ProductByCategory />} />
  <Route path="/product/search/:term" element={<Search_Products />} />
</Routes>
```

### **Routing Details**

| Route | Component | Status | Purpose |
|-------|-----------|--------|---------|
| `/` | All_Products | ✅ Active | Homepage with all products |
| `/cart` | Cart | ⏳ WIP | Shopping cart page |
| `/product/:id` | Product_Details | ⏳ WIP | Individual product details |
| `/product/category/:cat` | ProductByCategory | ⏳ WIP | Products by category |
| `/product/search/:term` | Search_Products | ⏳ WIP | Search results |

### **Navigation Flow**
```
Home (All_Products)
    ↓
[Category Link] → ProductByCategory (:cat)
    ↓
[Product Card] → Product_Details (:id)
    ↓
[Add to Cart] → Cart
```

---

## 🎨 Design & Styling

### **CSS Approach**
- **Bootstrap 5**: Primary framework
- **Custom CSS**: App.css for custom styles
- **Responsive Design**: Mobile-first approach
- **Icons**: React Icons library

### **Color Scheme**
- **Dark Theme**: Bootstrap dark navbar
- **Warning Yellow**: Amazon brand color (#FFC107)
- **Light/Dark Contrast**: For accessibility

### **Responsive Breakpoints**
```css
Mobile:   < 576px  (1 column)
Tablet:   576px+   (2 columns)
Desktop:  992px+   (3 columns)
Large:    1200px+  (3-4 columns)
```

---

## 📝 Project Status

### **Completed** ✅
- [x] Project setup with Vite
- [x] React Router navigation
- [x] Product data structure (278 products)
- [x] All products display
- [x] Category filtering
- [x] Price range filtering
- [x] Navbar with search bar
- [x] Responsive design
- [x] Context API setup

### **In Progress** ⏳
- [ ] Search functionality in navbar
- [ ] Product Details page
- [ ] Shopping cart functionality
- [ ] Add to cart button integration
- [ ] Cart page implementation
- [ ] Category page refinement

### **Future Features** 🚀
- [ ] Authentication (Login/Signup)
- [ ] User reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Payment integration
- [ ] Admin panel
- [ ] Database backend (Firebase/MongoDB)
- [ ] User profile management

---

## 🔧 Configuration Files

### **package.json** 📦
Key scripts and dependencies configuration for npm

### **vite.config.js** ⚙️
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/React-amazon/',  // GitHub Pages deployment path
})
```

### **eslint.config.js** 📋
ESLint rules for code quality checking

### **index.html** 🌐
Entry HTML file with Bootstrap CDN included

---

## 💡 Key Technologies & Patterns

### **React Patterns Used**
- **Hooks**: useState, useContext
- **Context API**: Global state management
- **Functional Components**: All components are functional
- **Component Composition**: Nested components structure

### **Routing Pattern**
- Client-side routing with React Router v7
- Dynamic routes with parameters (:id, :cat, :term)
- Link components for navigation

### **State Management**
- Context API for global products and cart state
- Local component state for UI (filters, selections)
- Derived state (filtered products)

### **Data Flow**
```
DataState (Provider)
    ↓ provides context
App (Consumer)
    ↓
Components (use context)
    ↓
Update state → Re-render
```

---

## 🚀 Deployment

### **GitHub Pages**
The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This runs:
1. `npm run build` - Creates optimized build
2. `gh-pages -d dist` - Deploys dist folder to GH Pages

**Live Demo**: https://rakeshkolipakaace.github.io/React-amazon/

### **Manual Deployment**
```bash
# Build the project
npm run build

# Preview locally
npm run preview

# Deploy dist folder to any hosting service
# (Vercel, Netlify, AWS S3, etc.)
```

---

## 📚 Learning Resources

### **Topics Covered**
- React 19 fundamentals
- Hooks (useState, useContext)
- React Router v7
- Context API for state management
- Component reusability
- Responsive design with Bootstrap
- Vite build tool
- ESLint for code quality

### **Concepts to Understand**
1. **Component Lifecycle**: How components render and update
2. **State Management**: Using Context API
3. **Client-side Routing**: React Router concepts
4. **Responsive Design**: Bootstrap grid system
5. **Props Drilling**: Why Context API is needed
6. **Dynamic Routing**: Route parameters

### **Further Improvements**
- Add backend API integration
- Implement shopping cart logic
- Add user authentication
- Create product detail pages
- Implement search functionality
- Add payment gateway
- Implement wishlist feature

---

## 🐛 Troubleshooting

### **Port Already in Use**
```bash
# Change port in vite.config.js or run on different port
npm run dev -- --port 3000
```

### **Build Issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Routing Not Working**
- Ensure React Router is properly wrapped in App
- Check route paths match component path strings
- Verify DataState wrapper is correct in main.jsx

### **Styles Not Applying**
- Check Bootstrap CDN is loaded in index.html
- Verify CSS files are imported in components
- Check browser console for CSS errors

---

## 📄 License

This project is part of Rakesh's GitHub portfolio for educational purposes.

---

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ✨ Project Highlights

### **Why This Project?**
- **Real-world Application**: E-commerce is a common project type
- **Modern React**: Uses latest React 19 features
- **Scalable Structure**: Easy to extend with features
- **Best Practices**: Follows React conventions
- **Learning Resource**: Great for interview prep

### **Skills Demonstrated**
✅ React fundamentals and hooks  
✅ Component-based architecture  
✅ State management with Context API  
✅ Client-side routing  
✅ Responsive web design  
✅ CSS/Bootstrap styling  
✅ Vite build optimization  
✅ GitHub Pages deployment  

---

## 📊 Project Statistics

- **Components**: 6 main components
- **Pages**: 4 page components (2 active)
- **Routes**: 5 defined routes
- **Products**: 278 product items
- **Categories**: 4 product categories
- **Technology Stack**: React, Vite, React Router, Bootstrap

---

## 🎯 Interview Questions This Project Addresses

1. **"Tell me about a React project you built"**
   - Full MERN-style frontend application
   - E-commerce use case (common in industry)

2. **"How do you manage state in React?"**
   - Context API implementation
   - Props vs Context demonstration

3. **"How do you structure large React apps?"**
   - Component organization (components, pages, context)
   - Separation of concerns

4. **"Explain your routing implementation"**
   - React Router v7 usage
   - Dynamic routes with parameters

5. **"How do you make apps responsive?"**
   - Bootstrap grid system
   - Mobile-first approach

---

## 📞 Support

For questions about this project:
1. Check GitHub Issues
2. Review existing code comments
3. Refer to official documentation:
   - React: https://react.dev
   - Vite: https://vitejs.dev
   - React Router: https://reactrouter.com

---

**Created by**: Rakesh  
**Repository**: https://github.com/rakeshkolipakaace/React-amazon  
**Platform**: Vite + React 19  
**Last Updated**: 2024

---

## 🚀 Quick Start Summary

```bash
# 1. Clone repository
git clone https://github.com/rakeshkolipakaace/React-amazon.git

# 2. Navigate to directory
cd React-amazon

# 3. Install dependencies
npm install

# 4. Start development
npm run dev

# 5. Open browser
# Visit http://localhost:5173

# 6. Build for production
npm run build

# 7. Deploy
npm run deploy
```

**Happy Coding! 🎉**

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
