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
          <div className="logo">Pf</div>
          <div className="logo-text">Portfolio Website</div>
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
              <a href="#aichatbot">AI Chatbot</a>
            </li>
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
              Seeking an entry-level post in a reputed organization that will utilize my knowledge of web development and coding and help me contribute to achieving the company’s plans, alongside ascertaining my personal growth.
            </p>
            <div className="call-to-action">
              <a href="#" className="button black" onClick={() => window.open("https://drive.google.com/file/d/1s7AcW10GwzDeLzbY1ZwnD6zgXQ7nwN3p/view?usp=sharing")}>
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
            <img src="./imgs/dp-removebg.png" alt="Sutej Jantali" width="200%" />
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
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>Hi I'm Sutej, a versatile developer proficient in a diverse range of technologies. 
                My expertise spans across multiple programming languages and frameworks including C, C++, Java, Python, and JavaScript. 
                I am adept at backend development using Node.js and Spring Boot, harnessing their capabilities to build robust and scalable applications. 
                On the frontend, I excel in crafting intuitive user interfaces with HTML and CSS, ensuring a seamless user experience. 
                With a strong foundation in full-stack development, I bring creativity and efficiency to every project, leveraging my comprehensive skill set to deliver innovative solutions that meet both functional and aesthetic requirements.
              </p>
              <p>
                I am starting my career as an Application Developer at Texas Instruments, proficient in Spring Boot, JSP, Oracle Database, JavaScript, Java, and Oracle HCM. I specialize in backend development with Spring Boot and Java, creating dynamic web content with JSP and enhancing user interfaces with JavaScript. Experienced with Oracle Database and Oracle HCM, I am eager to contribute to impactful projects that leverage my skills in building scalable and efficient applications. 
                I am committed to continuous learning and excited about the opportunities ahead to drive innovation and deliver high-quality solutions.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <h3>1. Texas Instruments</h3>
          <p>
            I commenced my professional journey as an Application Developer Intern at Texas Instruments, 
            where I contributed from January 2024 to June 2024. 
            Beginning July 2024, I eagerly embark on the next chapter as a full-time employee in Bengaluru.
          </p>
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
        </section>
        <section id="projects" className="bento">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <div className="bento-item">
              <img src="./imgs/academic.png" alt="Academic Records Management System" width="100%" />
            </div>
            <div className="bento-item">
              <img src="./imgs/sorting.png" alt="Sorting Algorithm Visualizer" width="100%"/>
            </div>
            <div className="bento-item">
              <img src="./imgs/Bank.png" alt="Banking System" alt="Banking System" width="100%" />
            </div>
          </div>
        </section>
        <section id="aichatbot" className="chatbot container">
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
        src="https://www.chatbase.co/chatbot-iframe/1v0riK9De_302bfXNQQmZ"
        width="100%"
        style={{ height: '100%', minHeight: '400px', border: 'none' }}
        title="Chatbot"
      ></iframe>
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
