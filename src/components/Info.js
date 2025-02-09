import React, { useState } from "react";
import "./Info.css";

const Info = ({ className }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("✅ تم الاشتراك بنجاح! 🎉");
      setTimeout(() => setMessage(""), 3000);
    }, 2000);
  };

  return (
    <div className={`info ${className || ""}`}>
      <div className="info__container">
        <div className="info__container__content">
          <h1>تواصل معنا</h1>
          <p>📱 واتس اب / 01010094107</p>
          <p>📧 ايميل / omar.monib.03@gmail.com</p>
        </div>

        <div className="info__container__content">
          <h1>لماذا نحن ؟!</h1>
          <p>✅ جودة لا تُضاهى.</p>
          <p>🎨 تصاميم بلا حدود.</p>
          <p>💰 أسعار تنافسية.</p>
          <p>📦 شحن إلى باب بيتك.</p>
          <p>✨ نحن لا نطبع التيشيرت فقط... بل نصنع قصتك! ✨</p>            
        </div>

        <div className="info__container__content">
          <h1>النشرة البريدية</h1>
          <p>اشترك في النشرة البريدية لدينا لتصلك أحدث العروض والتحديثات.</p>
          <form className="info__form" onSubmit={handleSubmit}>
            <input type="email" placeholder="أدخل بريدك الإلكتروني" required style={{ color: "#000" }} />
            <button type="submit" disabled={loading}>
              {loading ? "جارٍ الاشتراك..." : "اشتراك"}
            </button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Info;
