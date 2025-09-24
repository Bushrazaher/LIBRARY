import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="library-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-column">
              <h3 className="footer-title">عن المكتبة</h3>
              <p className="footer-about">
                مكتبة الطفل مؤسسة غير ربحية تهدف إلى تعزيز ثقافة القراءة لدى الأطفال
                وتوفير مصادر معرفية ممتعة وآمنة تناسب مختلف الأعمار.
              </p>
              <div className="social-links">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-title">روابط سريعة</h3>
              <ul className="footer-links">
                <li><a href="/about">عن المكتبة</a></li>
                <li><a href="/team">فريق العمل</a></li>
                <li><a href="/partners">شركاؤنا</a></li>
                <li><a href="/news">الأخبار</a></li>
                <li><a href="/faq">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h3 className="footer-title">خدماتنا</h3>
              <ul className="footer-links">
                <li><a href="/membership">العضوية</a></li>
                <li><a href="/borrowing">نظام الاستعارة</a></li>
                <li><a href="/events">الفعاليات</a></li>
                <li><a href="/workshops">الورش التعليمية</a></li>
                <li><a href="/donate">التبرعات</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h3 className="footer-title">تواصل معنا</h3>
              <div className="contact-info">
                <p><FaMapMarkerAlt /> نزوى، محافظة الداخلية، سلطنة عمان</p>
                <p><FaPhone />  +968 9124354</p>
                <p><FaEnvelope /> info@maktabat-altefl.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            © {new Date().getFullYear()} مكتبة الطفل. جميع الحقوق محفوظة
          </div>
          <div className="legal-links">
            <a href="/privacy">سياسة الخصوصية</a>
            <a href="/terms">شروط الاستخدام</a>
            <a href="/sitemap">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;