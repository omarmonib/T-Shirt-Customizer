import React, { useState } from 'react';
import styles from '../styles/About.module.css';
import AboutImg from '../assets/about-img.png';
import Button from '../components/Button';

const About = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('اكتشف كيف يمكننا مساعدتك');
  };

  return (
    <section id="about" className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>
        من <span className={styles.highlight}>نحن؟</span>
      </h1>
      
      <div className={styles.aboutContent}>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            <strong><span className={styles.highlight}>نحن! </span></strong>
            فريق متخصص في تقديم خدمة 
            <strong> تصميم وطباعة التيشيرتات المخصصة</strong>، حيث نتيح لك الفرصة 
            <strong> لتصميم ملابسك بأسلوبك الفريد </strong> باستخدام أحدث تقنيات الطباعة وأجود الخامات.
          </p>
          <p className={styles.description}>
            <strong><span className={styles.highlight}>لماذا نحن؟ </span></strong>
            لأننا نؤمن بأن <strong> لكل شخص بصمته الخاصة</strong>، ولذلك نقدم لك الحرية الكاملة في اختيار 
            <strong>الألوان، الخطوط، والشعارات</strong> التي تعكس شخصيتك سواء كنت بحاجة 
            <strong> لتيشيرت لشركتك، مناسبة خاصة، أو تصميم فريد لك وحدك</strong>، نحن هنا لنحقق لك ذلك بأفضل جودة وأسرع وقت!
          </p>

          <Button 
            text="كيف يمكننا مساعدتك" 
            aria-label="تعرف على المزيد"
            onClick={handleButtonClick} 
          />
          {message && <p className={styles.description}>{message}</p>}
        </div>

        <div className={styles.imageContainer}>
          <img src={AboutImg} alt="صورة توضح فريقنا في تصميم وطباعة التيشيرتات" />
        </div>
      </div>
    </section>
  );
}

export default About;
