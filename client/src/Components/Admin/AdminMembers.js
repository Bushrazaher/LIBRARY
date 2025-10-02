import React, { useState } from 'react';
//import './AdminMembers.css';

const AdminMembers = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', phone: '91234567', membership: 'نشط', expiry: '2023-12-31' },
    { id: 2, name: 'سارة علي', email: 'sara@example.com', phone: '98765432', membership: 'منتهي', expiry: '2023-06-30' },
    // More members...
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMembers = members.filter(member => 
    member.name.includes(searchTerm) || 
    member.email.includes(searchTerm) ||
    member.phone.includes(searchTerm)
  );
  
  const renewMembership = (id) => {
    setMembers(members.map(member => 
      member.id === id ? {...member, membership: 'نشط', expiry: '2024-12-31'} : member
    ));
  };

  return (
    <div className="admin-members">
      <div className="admin-header">
        <h1>إدارة الأعضاء</h1>
      </div>
      
      <div className="admin-toolbar">
        <input 
          type="text" 
          placeholder="ابحث عن عضو..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select>
          <option value="">جميع حالات العضوية</option>
          <option value="نشط">نشط</option>
          <option value="منتهي">منتهي</option>
          <option value="موقوف">موقوف</option>
        </select>
      </div>
      
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>الاسم</th>
            <th>البريد الإلكتروني</th>
            <th>الهاتف</th>
            <th>العضوية</th>
            <th>تاريخ الانتهاء</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <span className={`status-badge ${member.membership === 'نشط' ? 'active' : 'inactive'}`}>
                  {member.membership}
                </span>
              </td>
              <td>{member.expiry}</td>
              <td className="actions">
                <button 
                  onClick={() => renewMembership(member.id)}
                  disabled={member.membership === 'نشط'}
                >
                  تجديد
                </button>
                <button>تعديل</button>
                <button>تعليق</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMembers;