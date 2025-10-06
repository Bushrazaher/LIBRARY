import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
<<<<<<< HEAD
import Footer from './Components/Footer';
import BooksList from './Components/BooksList';
import BorrowPage from './Components/BorrowPage';
import CheckoutPage from './Components/CheckoutPage';
=======
import Footer from './Components/Footer.js';
import BooksList from './Components/BooksList.js';
import BorrowPage from './Components/BorrowPage.js';
import CheckoutPage from './Components/CheckoutPage.js';
>>>>>>> 2faed1ae60406543a5ed113bbd099746516a7834
import AdminLayout from './Components/Admin/AdminLayout';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminBooks from './Components/Admin/AdminBooks';
import AdminMembers from './Components/Admin/AdminMembers';
import AdminLoans from './Components/Admin/AdminLoans';
<<<<<<< HEAD
import Login from './Components/Login';
import Register from './Components/Register';
import AddBook from './Components/Admin/AddBook';
import EditBook from './Components/Admin/EditBook';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
=======


// Updated Layout component with Footer
function Layout({ children }) {
  return (
    <div className="layout">
      {/* Fixed Header Section */}
      <Header />

      {/* Page Content */}
      <main className="page-content">
        {children}
      </main>
      
      {/* Fixed Footer Section */}
      <Footer />
      
>>>>>>> 2faed1ae60406543a5ed113bbd099746516a7834
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/books" element={<Layout><BooksList /></Layout>} />
          <Route path="/borrow" element={<Layout><BorrowPage /></Layout>} />
          <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="books" element={<AdminBooks />} />
            <Route path="books/add" element={<AddBook />} />
            <Route path="books/edit/:id" element={<EditBook />} />
            <Route path="members" element={<AdminMembers />} />
            <Route path="loans" element={<AdminLoans />} />
          </Route>
        </Routes>
=======
        <Layout>
          <Routes>
            
            <Route path="/" element={<Home />} />
             <Route path="/books" element={<BooksList />} />
             <Route path="/borrow" element={<BorrowPage />} />
             <Route path="/checkout" element={<CheckoutPage />} />
             <Route path="/admin" element={<AdminDashboard />} />
             
            {/* Add other routes here */}
            
          </Routes>
          
        </Layout>
>>>>>>> 2faed1ae60406543a5ed113bbd099746516a7834
      </Router>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 2faed1ae60406543a5ed113bbd099746516a7834
