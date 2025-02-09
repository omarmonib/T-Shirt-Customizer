import React, { useMemo } from "react";
import styles from "../styles/Home.module.css";
import bg from "../assets/hero-bg.png";
import slider from "../assets/slider-img.png";
import Button from "../components/Button";

export default function Home() {
  const sliderImage = useMemo(() => slider, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundWrapper}>
        <img
          src={bg}
          alt="تصميم خلفي للصفحة الرئيسية"
          loading="lazy"
          fetchPriority="low"
          aria-label="تصميم خلفي للصفحة الرئيسية"
        />
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroTextWrapper}>
          <h1>صمّم التيشيرت الذي يعبر عنك!</h1>
          <p>أطلق إبداعك واصنع تصميمًا مميزًا لتشيرتك بكل سهولة مع أداتنا الاحترافية.</p>
          <Button 
            text="ابدأ التصميم" 
            aria-label="ابدأ التصميم"
            onClick={() => console.log("تم النقر على زر التصميم")} 
          />
        </div>

        <div className={styles.heroImageWrapper}>
          <img
            src={sliderImage}
            alt="معاينة أداة تخصيص التيشيرت"
            loading="lazy"
            fetchPriority="low"
            aria-label="معاينة أداة تخصيص التيشيرت"
          />
        </div>
      </section>
    </div>
  );
}
