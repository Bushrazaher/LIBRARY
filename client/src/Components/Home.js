import React from 'react';
import './Home.css';
import { FaBookOpen, FaChild, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <h1>بوابة الطفل إلى عالم المعرفة</h1>
            <p className="subtitle">منصة متكاملة للتعلم والترفيه للأطفال من 6-12 سنة</p>
            <div className="cta-buttons">
              <a href="/books" className="primary-button">
                تصفح المكتبة <FaArrowLeft />
              </a>
              <a href="/register" className="secondary-button">
                سجل طفلك الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">لماذا مكتبة الطفل؟</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaBookOpen />
              </div>
              <h3>مكتبة رقمية شاملة</h3>
              <p>أكثر من 5000 كتاب ومرجع تعليمي متاح للقراءة والاستعارة</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaChild />
              </div>
              <h3>بيئة آمنة</h3>
              <p>منصة مصممة خصيصاً للأطفال مع مراقبة أبوية كاملة</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaCalendarAlt />
              </div>
              <h3>فعاليات تفاعلية</h3>
              <p>ورش عمل وجلسات قراءة أسبوعية مع مختصين</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Books */}
      <section className="books-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">أحدث الإضافات</h2>
            <a href="/books" className="view-all">عرض الكل</a>
          </div>
          {/* Books carousel would go here */}
        </div>
      </section>
    </div>
  );
};

export default Home;