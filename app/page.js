"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const Contactme = () =>{
    alert("My Email: iamsutej@gmail.com \nPlease don't hesitate to contact me; I would be delighted to connect with you.");
  };
  
  return (
    <>
        <header>
        <a href="#" className="logo-holder" onClick= {() => location.reload()}>
          <div className="logo">SJ</div>
          <div className="logo-text">Sutej Jantali</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#imhero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#Certifications">Certifications</a>
            </li>
            {/*<li>
              <a href="#aichatbot">AI Chatbot</a>
            </li>*/}
            <li>
              <a href="#Contactme" className="button" onClick={Contactme}>Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu} >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section id="imhero" className="hero container">
          <div className="hero-blue">
            <h1><small>Hi I'm</small>
            Sutej Jantali</h1>
            <p>
            Enthusiastic Application developer
            with passion for designing and
            implementing software engineering
            solutions. Demonstrated ability to
            solve complex problems, particularly
            in debugging and performance
            optimization. Proficient in Java,
            Spring Boot, React, and Automation.
            Passionate about building scalable,
            user-focused applications.            
            </p>
            <div className="call-to-action">
              <a href="#" className="button black" onClick={() => window.open("https://drive.google.com/file/d/1c3XpMfR6UOhQrL9D7t-NuF-n-E30AOWP/view?usp=sharing")}>
                View Resume
              </a>
              <a href="#" className="button white" onClick= {Contactme}>
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a href="#">
              <img src="./imgs/LinkedIn.png" alt="LinkedIn" width="48" onClick={() => window.open("https://www.linkedin.com/in/sutej-r-jantali-859719228")}
              />
              </a>
              <a href="#">
                <img src="./imgs/leetcode.png" alt="Leetcode" width="48" onClick={() => window.open("https://leetcode.com/u/Sutej_2002/")}/>
              </a>
              <a href="#">
                <img src="./imgs/gfg.jfif" alt="GeeksForGeeks" width="48" onClick={() => window.open("https://www.geeksforgeeks.org/user/iamsutej")}/>
              </a>
              <a href="#">
						    <img src= "./imgs/hackerrank.png" alt="HackerRank" width ="48" onClick={() => window.open("https://www.hackerrank.com/profile/iamsutej")} />
					    </a>
              <a href="#">
                <img src="./imgs/Github.png" alt="Github" width="48" onClick={() => window.open("https://github.com/SutejJantali")}/>
              </a>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/dp_newv2.png" alt="Sutej Jantali" style={{ width: '100%', maxWidth: '600px', objectFit: 'contain' }} />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128"/>
              <img src="./imgs/css.png" alt="CSS" width="128"/>
              <img src="./imgs/JavaScript-logo.png" alt="JavaScript" width="128" />
              <img src="./imgs/java.jfif" alt="Java" width="128" />
              <img src="./imgs/spring.jpg" alt="Spring" width="128" />
              <img src="./imgs/Python-Symbol.png" alt="Python" width="128" />
              <img src="./imgs/MySQL-Logo.wine.png" alt="MySql" width="128" />
              <img src="./imgs/Oracle SQL.jpg" alt="OracleSql" width="128" />
              <img src="./imgs/c++.png" alt="Cpp" width="128" />
              <img src="./imgs/c.png" alt="C" width="128" />
              <img src="./imgs/JSP.png" alt="JavaServerPages" width="128" />
              <img src="./imgs/node-js.png" alt="NodeJS" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128"/>
              <img src="./imgs/css.png" alt="CSS" width="128"/>
              <img src="./imgs/JavaScript-logo.png" alt="JavaScript" width="128" />
              <img src="./imgs/java.jfif" alt="Java" width="128" />
              <img src="./imgs/spring.jpg" alt="Spring" width="128" />
              <img src="./imgs/Python-Symbol.png" alt="Python" width="128" />
              <img src="./imgs/MySQL-Logo.wine.png" alt="MySql" width="128" />
              <img src="./imgs/Oracle SQL.jpg" alt="OracleSql" width="128" />
              <img src="./imgs/c++.png" alt="Cpp" width="128" />
              <img src="./imgs/c.png" alt="C" width="128" />
              <img src="./imgs/JSP.png" alt="JavaServerPages" width="128" />
              <img src="./imgs/node-js.png" alt="NodeJS" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JavaServerPages</li>
                <li>React</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Spring Boot</li>
                <li>Node Js</li>
                <li>Java</li>
              </ul>
              <h3>Programming Languages</h3>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              {/*<p>Hi I'm Sutej, a versatile developer proficient in a diverse range of technologies. 
                My expertise spans across multiple programming languages and frameworks including C, C++, Java, Python, and JavaScript. 
                I am adept at backend development using Node.js and Spring Boot, harnessing their capabilities to build robust and scalable applications. 
                On the frontend, I excel in crafting intuitive user interfaces with HTML and CSS, ensuring a seamless user experience. 
                With a strong foundation in full-stack development, I bring creativity and efficiency to every project, leveraging my comprehensive skill set to deliver innovative solutions that meet both functional and aesthetic requirements.
              </p>
              <p>
                I am starting my career as an Application Developer at Texas Instruments, proficient in Spring Boot, JSP, Oracle Database, JavaScript, Java, and Oracle HCM. I specialize in backend development with Spring Boot and Java, creating dynamic web content with JSP and enhancing user interfaces with JavaScript. Experienced with Oracle Database and Oracle HCM, I am eager to contribute to impactful projects that leverage my skills in building scalable and efficient applications. 
                I am committed to continuous learning and excited about the opportunities ahead to drive innovation and deliver high-quality solutions.
              </p>*/}
              <p>I'm Sutej Jantali, a passionate application developer with a strong foundation in full-stack development. I enjoy building scalable, user-centric solutions and am particularly drawn to solving complex technical challenges—especially in backend development, automation, and performance optimization.</p>
              <p>
              Currently, I’m working as an Application Developer at Texas Instruments, where I’ve contributed to major initiatives like automating onboarding workflows, integrating recruiting platforms, and optimizing internal portals. My work has been recognized with the Rising Star of the Quarter award.
              </p>
              <p>
              I’m skilled in technologies like Java, Spring Boot, Oracle SQL, JavaScript, and tools like Boomi Integration, and have worked across real-time systems using REST APIs, Oracle HCM, and BI Publisher.

              Outside of work, I love exploring new technologies, automating repetitive tasks, and solving algorithmic challenges on platforms like Leetcode, GFG, and Hackerrank.

              I'm currently open to new opportunities where I can learn, grow, and contribute to impactful products.
              </p>              
            </div>
          </div>
        </section>
        {/*<section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <h3>1. Texas Instruments</h3>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/ti.jpg" alt="Texas Instruments" width="100%" />
                  <figcaption>
                    Workplace - I
                  </figcaption>
                </div>
              </figure>
              <h3>Workplace - I</h3>
              <div>Jan 2024 - Jun 2024</div>
            </article>
          </div>
        </section>*/}
        <section className="work-experience container">
          <h2>
            <small>Professional</small>
            Work Experience
          </h2>
          <h3>1. Texas Instruments</h3>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/ti.jpg" alt="Texas Instruments" width="100%" />
                  <figcaption>
                    Workplace - I
                  </figcaption>
                </div>
              </figure>
              <h3>Texas Instruments</h3>
              <ul>
                <li><strong>Role:</strong> Application Developer</li>
                <li><strong>Location:</strong> Bengaluru, India</li>
                <li><strong>Jul 2024 – Present:</strong> Full Time</li>
                <li><strong>Jan 2024 – Jun 2024:</strong> Internship</li>
              </ul>
              <p>
                I began my journey as an Application Developer Intern and transitioned into a full-time role after demonstrating strong ownership and impactful contributions.
              </p>
              <ul>
                <li>⚙️ <strong>Automated Onboarding Workflows:</strong> Integrated Moka (China hiring partner) with Oracle HCM and WeChat APIs to streamline hiring.</li>
                <li>🌐 <strong>Portal Revamp:</strong> Redesigned and enhanced features in internal portals to improve workflows; brought untracked test codebases into production safely.</li>
                <li>🧩 <strong>Backend Integrations:</strong> Built REST APIs and Boomi pipelines for system connectivity between external platforms and Oracle.</li>
                <li>📈 <strong>Business Reporting:</strong> Delivered BI Publisher reports to support HR and recruitment analysis.</li>
                <li>🏅 <strong>Awarded:</strong> <em>Rising Star of the Quarter (May 2024)</em> for outstanding ownership and execution.</li>
              </ul>
            </article>
          </div>
        </section>
        <section id="projects" className="bento">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <div className="bento-item">
              <a href="#Projects" onClick={() => window.open("https://github.com/SutejJantali/Academic-Records-Management-System")}>
              <img src="./imgs/academic.png" alt="Academic Records Management System" width="100%" />
              </a>
            </div>
            <div className="bento-item">
              <a href="#Projects" onClick={() => window.open("https://github.com/SutejJantali/Sorting-Algo-Visualizer")}>
              <img src="./imgs/sorting.png" alt="Sorting Algorithm Visualizer" width="100%"/>
              </a>
            </div>
            <div className="bento-item">
              <a href="#Projects" onClick={() => window.open("https://github.com/SutejJantali/Cpp-Project-on-Banking-System")}>
              <img src="./imgs/Bank.png" alt="Banking System" alt="Banking System" width="100%" />
              </a>
            </div>
          </div>
        </section>
        {/*<section id="aichatbot" className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>AI Chatbot</h3>
                <p>
                  I have put a chatbot here 
                  which knows all my skills, work-experience.
                  You can try it to ask questions about me to get a better idea
                  of who I am and what I have done.
                </p>
                <p>
                  I'm currently looking for new opportunity
                  so if you have a project you think I would be
                  good fit for, please get in touch!
                </p>
            </div>
            <div className="chat-box">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/rZRuDL4exXW5qd33eVp1D"
        //"https://www.chatbase.co/chatbot-iframe/GHOfuXmaKnPrZ12GqRXV0"
        //"https://www.chatbase.co/chatbot-iframe/sd4Azryg9vPrLFWIgH0b_"
        //"https://www.chatbase.co/chatbot-iframe/1v0riK9De_302bfXNQQmZ"
        width="100%"
        style={{ height: '100%', minHeight: '400px', border: 'none' }}
        title="Chatbot"
      ></iframe>
    </div>
    </div>
        </section> */}
        <section id="Certifications" className="bento">
          <h2>
            <small>Learnings so far</small>
            Certifications
          </h2>
          <div className="bento-grid">
            <div className="bento-item">
              <a href="#Certifications" onClick={()=> window.open("https://drive.google.com/file/d/1tAHhkW-6NzOYChEXU7BXqDcZXv0BlqIq/view?usp=sharing")}>
              <h2>Texas Instruments</h2>
              <img src="./imgs/TI_Internship.jpg" alt="Texas Instruments Internship Certificate" width="100%" />
              </a>
            </div>
            <div className="bento-item">
              <a href="#Certifications" onClick={()=> window.open("https://drive.google.com/file/d/1Fck4PvEEHPaSs5rxmVTWB5QoWtw9AgPP/view?usp=sharing")}>
              <img src="./imgs/Persistent Systems Internship.jpg" alt="Persistent Systems Internship Certificate" width="100%"/>
              </a>
            </div>
            <div className="bento-item">
              <a href="#Certifications" onClick={()=> window.open("https://drive.google.com/file/d/1kpv-AWxqFfvBbo8wYAv6iFgoEv0s2AkD/view?usp=sharing")}>
              <img src="./imgs/RestfulAPI.jpg" alt="Banking System" alt="Restful API course Certificate" width="100%" />
              </a>
            </div>
            <div className="bento-item">
              <a href="#Certifications" onClick={()=> window.open("https://drive.google.com/file/d/1CB0QOWjpSkkefCtdFWvMiFE8ORIKWBP8/view?usp=sharing")}>
              <img src="./imgs/DataIntegration.jpg" alt="Banking System" alt="Data Integration Certificate" width="100%" />
              </a>
            </div>
            <div className="bento-item">
              <a href="#Certifications" onClick={()=> window.open("https://drive.google.com/file/d/11x7yF71tPmB4zQ8zyRAXVcEDmwU7Kd0s/view?usp=sharing")}>
              <img src="./imgs/McKinseyCertificate.png" alt="Banking System" alt="McKinsey Forward Learning Program Certificate" width="100%" />
              </a>
            </div>
              <div className="bento-item">
              <a href="#Certifications" onClick={()=> window.open("https://drive.google.com/file/d/1_T53779KRu_c9lOtKzNzl4lEDOAWe1BZ/view?usp=sharing")}>
              <img src="./imgs/walmart.png" alt="Banking System" alt="Walmart USA Software Engineering Simulation Certificate by Forage" width="100%" />
              </a>
            </div>
          </div>
        </section>

        <section className="Flexyfooter">
          <div className="footer">
            Made with &#128151; by Sutej
          </div>
        </section>
      </main>
      
    </>
  );
}
