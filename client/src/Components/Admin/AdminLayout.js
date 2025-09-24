import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';
//import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminNav />
      
      <div className="admin-content">
                

        <div className="admin-topbar">
          <div className="admin-search">
            <input type="text" placeholder="بحث..." />
          </div>
          <div className="admin-user">
            <span>مرحباً، المدير</span>
            <img src="/admin-avatar.png" alt="Admin" />
          </div>
        </div>
        <Outlet />
        
        <div className="admin-main">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;