import React,{useState} from 'react';
import './Register.css';


export default function Login() {
    const [form,setForm]=useState({
        email:'',
        username:'',
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        const {email,username}=form;
    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div className='register-container'> 
   
        <form className='register-form' onSubmit={handleSubmit}>
                 <h2>تسجيل الدخول</h2>
             <div>
                <label>البريد الالكتروني</label>
                <input
                 type="text" 
                 name='email'
                 value={form.email}
                 onChange={handleChange}
                 placeholder="ادخل بريدك الالكتروني"/>
            </div>
            <div>
                <label>اسم المستخدم</label>
                <input type="text" 
                name='name'
                value={form.username}
                onChange={handleChange}
                placeholder="ادخل اسم المستخدم"/>
            </div>   
            <div>
                <button type="submit">تسجيل الدخول</button>
            </div>
            <div className='link'>
                <span>ليس لديك حساب؟</span>
                <a href="/register">انشاء حساب</a>
            </div>
        </form>
    </div>

  )
}