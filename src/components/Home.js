import React from "react";

export default function Intro() {
  return (
    <div class="container">
      <aside class="sidebar" aria-label="Profile & Navigation">
        <div class="profile">
          <h1>Abdul Awal Ripon</h1>
          <div class="title">Lead Software Engineer</div>
          <p class="summary">
            Experienced full-stack engineer (10+ years) across finance,
            insurance, education, and payments. I design and deliver scalable,
            high-performing web and cloud solutions, mentor teams, and drive
            continuous improvement.
          </p>

          <nav class="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div class="social-icons" aria-label="Social links">
          <a
            class="icon-btn"
            href="mailto:mdabdulripon@gmail.com"
            aria-label="Email"
          >
            @
          </a>
          <a class="icon-btn" href="#" aria-label="GitHub">
            GH
          </a>
          <a class="icon-btn" href="#" aria-label="LinkedIn">
            in
          </a>
        </div>
      </aside>

      <main class="main-content" id="content">
        <section id="about">
          <div class="section-header">About</div>
          <h2>Builder of scalable APIs, microservices, and front-ends</h2>
          <p>
            I am a Lead Software Engineer with over a decade of experience
            designing, developing, and deploying enterprise applications across
            the finance, insurance, education, and payment industries. My work
            bridges complex backend systems and intuitive user interfaces.
          </p>
          <p>
            I specialize in full-stack web and API development with .NET 8 and
            Java 17 (Spring Boot), modern architectures like DDD and CQRS, and
            microservices patterns. I’ve implemented asynchronous messaging with
            RabbitMQ and MassTransit, high-performance caching with Redis, and
            gRPC for service-to-service communication.
          </p>
          <p>
            On the frontend, I focus on scalable design systems and modular
            delivery using Angular (NX monorepo) and React, including Module
            Federation and Native Federation for dynamic feature loading. I’m
            hands-on with AWS (ECS, ECR, Lambda, API Gateway, S3, RDS) and CI/CD
            using CodeBuild/CodePipeline.
          </p>
          <p>
            I’m known for leadership, mentorship, and cross-team
            collaboration—aligning software quality with business outcomes and
            continuously improving delivery processes.
          </p>
        </section>

        <section id="skills">
          <div class="section-header">Technical Skills</div>
          <h2>Core competencies</h2>
          <div class="tech-list">
            <span class="tech-tag">.NET 8 / ASP.NET Core</span>
            <span class="tech-tag">Java 17 / Spring Boot</span>
            <span class="tech-tag">CQRS / Mediator</span>
            <span class="tech-tag">DDD</span>
            <span class="tech-tag">REST / gRPC</span>
            <span class="tech-tag">Entity Framework Core</span>
            <span class="tech-tag">Angular / NX</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Module Federation</span>
            <span class="tech-tag">RabbitMQ / MassTransit</span>
            <span class="tech-tag">Redis (cache)</span>
            <span class="tech-tag">PostgreSQL / MSSQL / MySQL</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Docker / Compose</span>
            <span class="tech-tag">AWS (ECS, Lambda, S3, RDS)</span>
            <span class="tech-tag">CI/CD (CodeBuild/CodePipeline)</span>
            <span class="tech-tag">Testing: JUnit, Jest, Jasmine</span>
            <span class="tech-tag">Git / GitHub / GitLab</span>
          </div>
        </section>

        <section id="experience">
          <div class="section-header">Professional Experience</div>

          <div class="experience-item">
            <time>Jun 2022 — Present</time>
            <div>
              <h3>
                Senior Associate Full Stack Developer · Fannie Mae — Plano, TX
              </h3>
              <p>
                Led the frontend team for microservices apps using Angular NX
                with Module/Native Federation. Designed scalable architecture
                for multi-repo setups and collaborated with backend teams on
                RESTful APIs and AWS integrations (Lambda, ECS). Drove DevOps
                best practices and supported performance monitoring with Splunk
                and CloudWatch.
              </p>
              <div class="tech-list">
                <span class="tech-tag">Angular NX</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Java</span>
                <span class="tech-tag">AWS (Lambda, ECS, S3)</span>
                <span class="tech-tag">Native Federation</span>
                <span class="tech-tag">Splunk / CloudWatch</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <time>Apr 2019 — Jun 2022</time>
            <div>
              <h3>
                Senior Full Stack Developer · CSG International — Allen, TX
              </h3>
              <p>
                Delivered enterprise payment processing (credit card, ACH,
                mobile). Built reusable UI components and private NPM libraries.
                Improved microservice communication and reduced latency through
                architecture optimization. Monitored production systems and
                resolved issues efficiently.
              </p>
              <div class="tech-list">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">.NET Core</span>
                <span class="tech-tag">PostgreSQL / MSSQL</span>
                <span class="tech-tag">AWS (Lambda, DynamoDB, S3, ECS)</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <time>Aug 2017 — Apr 2019</time>
            <div>
              <h3>Front-End Developer · Chubb Insurance — Jersey City, NJ</h3>
              <p>
                Built insurance web apps (Workers Comp, Cyber ERM, Professional
                Liability). Led UI/UX improvements, authored unit tests for
                Redux-style state, and participated in reviews to ensure
                quality.
              </p>
              <div class="tech-list">
                <span class="tech-tag">Angular 6</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">SASS</span>
                <span class="tech-tag">PostgreSQL / MongoDB</span>
                <span class="tech-tag">Azure</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <time>Feb 2014 — Aug 2017</time>
            <div>
              <h3>
                Front End Web Developer · Benchmark Education — New Rochelle, NY
              </h3>
              <p>
                Built educational publishing apps and internal product
                management tools. Designed accessible, responsive user
                interfaces used across devices.
              </p>
              <div class="tech-list">
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Vue</span>
                <span class="tech-tag">jQuery</span>
                <span class="tech-tag">HTML5 / CSS3</span>
                <span class="tech-tag">Python</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div class="section-header">Projects (Selected)</div>
          <p>
            Coming soon — highlight microservices with RabbitMQ/Redis, Angular
            NX monorepo with Module Federation, and a gRPC discount pricing
            service.
          </p>
        </section>

        <section id="education">
          <div class="section-header">Education</div>

          <div class="experience-item experience-wide">
            <time>Thomas Edison State University</time>
            <div>
              <h3>B.S. in Data Science and Analytics</h3>
              <p>GPA: 3.46</p>
            </div>
          </div>

          <div class="experience-item experience-wide">
            <time>Collin College</time>
            <div>
              <h3>Associate of Science (A.S.)</h3>
              <p>GPA: 3.886</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="section-header">Contact</div>
          <p>
            <strong>Location:</strong> Dallas, TX 75094
          </p>
          <p>
            <strong>Phone:</strong> +1 (929) 218-2399
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:mdabdulripon@gmail.com">mdabdulripon@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
