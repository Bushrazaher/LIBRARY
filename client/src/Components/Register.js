// import "./Register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ For redirecting

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, age, email, phone } = form;

    if (!username || !age || !email || !phone) {
      setError("الرجاء ملء جميع الحقول");
      return;
    }

    setError("");
    console.log("Form Data:", form);

    // ✅ Show message first, then redirect
    alert("تم التسجيل بنجاح!");
    navigate("/login"); // ✅ Redirect to login page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>تسجيل حساب جديد</h2>

        {error && <p className="error">{error}</p>}

        <div>
          <label>اسم المستخدم</label>
          <input
            type="text"
            name="username"
            placeholder="ادخل اسم المستخدم"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>العمر</label>
          <input
            type="number"
            name="age"
            placeholder="ادخل عمرك"
            value={form.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>البريد الالكتروني</label>
          <input
            type="email"
            name="email"
            placeholder="ادخل البريد الالكتروني"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            placeholder="ادخل رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">تسجيل</button>

        <div className="link">
          <span>هل لديك حساب؟ </span>
          <a href="/login">تسجيل الدخول</a>
        </div>
      </form>
    </div>
  );
}
