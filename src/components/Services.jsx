import "./Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <h1>خدماتنا</h1>
      <p>
        استكشف العالم بكل سهولة - وكالتنا السياحية تقدم لك خدمات مميزة لجعل
        رحلتك لا تُنسى.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <h2>حجز الرحلات الجوية</h2>
          <p>
            احصل على أفضل عروض الطيران مع إمكانية الحجز عبر الإنترنت وتخفيضات
            حصرية.
          </p>
        </div>

        <div className="service-card">
          <h2>حجز الفنادق</h2>
          <p>ابحث واحجز الإقامة المثالية بأفضل الأسعار.</p>
        </div>

        <div className="service-card">
          <h2>الباقات السياحية</h2>
          <p>
            استمتع بجولات شاملة مع خطط سفر منظمة بعناية لقضاء عطلة خالية من
            التوتر.
          </p>
        </div>

        <div className="service-card">
          <h2>تأمين السفر</h2>
          <p>
            سافر براحة بال - تأميننا يغطي الحالات الطارئة والأحداث غير المتوقعة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
