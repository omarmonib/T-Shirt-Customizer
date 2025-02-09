import React from "react";
import ServiceCard from "../components/ServiceCard";
import "../styles/Services.css";

const servicesData = [
  {
    title: "تصميم تيشيرت مخصص",
    description: "يمكنك إنشاء تصميمك الخاص باستخدام أدواتنا التفاعلية بسهولة.",
    icon: "🎨",
  },
  {
    title: "طباعة بجودة عالية",
    description: "نستخدم أحدث تقنيات الطباعة لضمان أعلى جودة لتيشيرتك.",
    icon: "🖨️",
  },
  {
    title: "توصيل سريع",
    description: "نوفر شحن سريع لجميع المناطق، لتصلك منتجاتك في أسرع وقت.",
    icon: "🚀",
  },
  {
    title: "خصومات للطلبات الكبيرة",
    description: "احصل على أسعار خاصة عند طلب كميات كبيرة من التيشيرتات.",
    icon: "🎁",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <h1>خدماتنا</h1>
      <p>نقدم لك أفضل الحلول لتصميم وطباعة التيشيرتات المخصصة بجودة عالية.</p>
      <div className="services__container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
