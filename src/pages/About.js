import React, { useState } from 'react';
import "../styles/About.css";
import AboutImg from '../assets/about-img.png';

const About = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('اكتشف كيف يمكننا مساعدتك');
  };

  return (
    <section id="about" className="about" dir="rtl">
      <h1>من <span>نحن؟</span></h1>
      
      <div className="about__content">
        <div className="about__text">
          <p>
            <strong><span>نحن! </span></strong>
            فريق متخصص في تقديم خدمة 
            <strong> تصميم وطباعة التيشيرتات المخصصة</strong>، حيث نتيح لك الفرصة 
            <strong> لتصميم ملابسك بأسلوبك الفريد </strong> باستخدام أحدث تقنيات الطباعة وأجود الخامات.
          </p>
          <p>
            <strong><span>لماذا نحن؟ </span></strong>
            لأننا نؤمن بأن <strong> لكل شخص بصمته الخاصة</strong> ، ولذلك نقدم لك الحرية الكاملة في اختيار 
            <strong>الألوان، الخطوط، والشعارات</strong> التي تعكس شخصيتك سواء كنت بحاجة 
            <strong> لتيشيرت لشركتك، مناسبة خاصة، أو تصميم فريد لك وحدك</strong>، نحن هنا لنحقق لك ذلك بأفضل جودة وأسرع وقت!
          </p>

          <button 
            className="about__button"
            onClick={handleButtonClick}
            aria-label="تعرف على المزيد"
          >
            كيف يمكننا مساعدتك
          </button>
          
          {message && <p>{message}</p>}
        </div>

        <div className="about__image">
          <img src={AboutImg} alt="صورة توضح فريقنا في تصميم وطباعة التيشيرتات" />
        </div>
      </div>
    </section>
  );
}

export default About;
