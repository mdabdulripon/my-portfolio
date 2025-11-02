import React from "react";

export default function Intro() {
  return (
    <div className="container">
      {/* LEFT PANEL — fixed, never scrolls */}
      <aside className="sidebar" aria-label="Profile & Navigation">
        <div className="profile">
          <h1>Abdul Ripon</h1>
          <div className="title">Lead Software Engineer</div>
          <p className="summary">
            Experienced full-stack engineer (10+ years) across finance,
            insurance, education, and payments. I design and deliver scalable,
            high-performing web and cloud solutions, mentor teams, and drive
            continuous improvement.
          </p>

        <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="social-icons" aria-label="Social links">
          <a className="icon-btn" href="mailto:mdabdulripon@gmail.com" aria-label="Email">@</a>
          <a className="icon-btn" href="#" aria-label="GitHub">GH</a>
          <a className="icon-btn" href="#" aria-label="LinkedIn">in</a>
        </div>
      </aside>

      {/* RIGHT PANEL — scrolls */}
      <main className="main-content" id="content">
        <section id="about">
          <div className="section-header">About</div>
          <h2>Builder of scalable APIs, microservices, and front-ends</h2>
          <p>
            I specialize in designing maintainable architectures (CQRS, DDD,
            Clean Architecture), building REST/gRPC services with .NET 8 and
            Java 17, and shipping accessible front-ends with Angular/React. I’m
            hands-on with AWS (ECS, ECR, Lambda, API Gateway, S3, RDS) and
            DevOps automation.
          </p>
        </section>

        <section id="skills">
          <div className="section-header">Technical Skills</div>
          <h2>Core competencies</h2>
          <div className="tech-list">
            {[
              ".NET 8 / ASP.NET Core",
              "Java 17 / Spring Boot",
              "CQRS / Mediator",
              "DDD",
              "REST / gRPC",
              "Entity Framework Core",
              "Angular / NX",
              "React",
              "Module Federation",
              "RabbitMQ / MassTransit",
              "Redis (cache)",
              "PostgreSQL / MSSQL / MySQL",
              "MongoDB",
              "Docker / Compose",
              "AWS (ECS, Lambda, S3, RDS)",
              "CI/CD (CodeBuild/CodePipeline)",
              "Testing: JUnit, Jest, Jasmine",
              "Git / GitHub / GitLab"
            ].map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="section-header">Professional Experience</div>

          <div className="experience-item">
            <time>Jun 2022 — Present</time>
            <div>
              <h3>Senior Associate Full Stack Developer · Fannie Mae — Plano, TX</h3>
              <p>
                Led the frontend team for microservices apps using Angular NX
                with Module/Native Federation. Designed scalable architecture
                for multi-repo setups and collaborated on RESTful APIs and AWS
                integrations (Lambda, ECS). Supported DevOps best practices and
                performance monitoring with Splunk and CloudWatch.
              </p>
              <div className="tech-list">
                <span className="tech-tag">Angular NX</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">AWS (Lambda, ECS, S3)</span>
                <span className="tech-tag">Native Federation</span>
                <span className="tech-tag">Splunk / CloudWatch</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <time>Apr 2019 — Jun 2022</time>
            <div>
              <h3>Senior Full Stack Developer · CSG International — Allen, TX</h3>
              <p>
                Delivered enterprise payment processing (credit card, ACH,
                mobile). Built reusable UI components and private NPM libraries.
                Improved microservice communication and reduced latency through
                architecture optimization. Monitored production systems and
                resolved issues efficiently.
              </p>
              <div className="tech-list">
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">.NET Core</span>
                <span className="tech-tag">PostgreSQL / MSSQL</span>
                <span className="tech-tag">AWS (Lambda, DynamoDB, S3, ECS)</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <time>Aug 2017 — Apr 2019</time>
            <div>
              <h3>Front-End Developer · Chubb Insurance — Jersey City, NJ</h3>
              <p>
                Built insurance web apps (Workers Comp, Cyber ERM, Professional
                Liability). Led UI/UX improvements, authored unit tests for
                Redux-style state, and participated in reviews to ensure
                quality.
              </p>
              <div className="tech-list">
                <span className="tech-tag">Angular 6</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">SASS</span>
                <span className="tech-tag">PostgreSQL / MongoDB</span>
                <span className="tech-tag">Azure</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <time>Feb 2014 — Aug 2017</time>
            <div>
              <h3>Front End Web Developer · Benchmark Education — New Rochelle, NY</h3>
              <p>
                Built educational publishing apps and internal product
                management tools. Designed accessible, responsive user
                interfaces used across devices.
              </p>
              <div className="tech-list">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Vue</span>
                <span className="tech-tag">jQuery</span>
                <span className="tech-tag">HTML5 / CSS3</span>
                <span className="tech-tag">Python</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="section-header">Projects (Selected)</div>
          <p>
            Coming soon — highlight microservices with RabbitMQ/Redis, Angular
            NX monorepo with Module Federation, and a gRPC discount pricing
            service.
          </p>
        </section>

        <section id="education">
          <div className="section-header">Education</div>

          <div className="experience-item experience-wide">
            <time>Thomas Edison State University</time>
            <div>
              <h3>B.S. in Data Science and Analytics</h3>
              <p>GPA: 3.46</p>
            </div>
          </div>

          <div className="experience-item experience-wide">
            <time>Collin College</time>
            <div>
              <h3>Associate of Science (A.S.)</h3>
              <p>GPA: 3.886</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-header">Contact</div>
          <p><strong>Location:</strong> Dallas, TX 75094</p>
          <p><strong>Phone:</strong> +1 (929) 218-2399</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:mdabdulripon@gmail.com">mdabdulripon@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
