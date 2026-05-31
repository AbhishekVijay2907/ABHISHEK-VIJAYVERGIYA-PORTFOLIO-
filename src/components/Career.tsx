import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Information Technology</h4>
                <h5>Government Engineering College, Ajmer</h5>
              </div>
              <h3>2023 - ONGOING</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Technology in IT, maintaining a CGPA of 8.14. Focused on data structures, Object-Oriented Programming (OOP) in Java/Python, database engineering, and modern web application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary & Higher Secondary Education (RBSE)</h4>
                <h5>Happy Public Sr. Sec School, Kapasan</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed Higher Secondary (12th RBSE) in 2023 with a score of 74.67%. Previously completed Secondary (10th RBSE) in 2021 with a score of 88.63%. Gained a strong baseline in math, science, and computer applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Technical Training</h4>
                <h5>Flikt Technology | Southfuego | Google</h5>
              </div>
              <h3>TRAINED</h3>
            </div>
            <p>
              Completed a 1-month Full Stack Development training at Flikt Technology Web Solution, a 45-day 2D Game Development with Pygame training at Southfuego, and is a Google for Education Gemini Certified Student.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
