import React from "react";
import skillsData from "../data/skills.json";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">Technical Skills</div>
      <div className="tech-list">
        {skillsData.skills.map((item, index) => (
          <span key={index} className="tech-tag">
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}
