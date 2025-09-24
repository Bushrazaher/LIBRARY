import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer.js';
import BooksList from './Components/BooksList.js';
import BorrowPage from './Components/BorrowPage.js';
import CheckoutPage from './Components/CheckoutPage.js';
import AdminLayout from './Components/Admin/AdminLayout';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminBooks from './Components/Admin/AdminBooks';
import AdminMembers from './Components/Admin/AdminMembers';
import AdminLoans from './Components/Admin/AdminLoans';


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
      
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;