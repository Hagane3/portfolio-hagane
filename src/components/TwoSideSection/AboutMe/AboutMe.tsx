import React from 'react';
import classes from './AboutMe.module.scss';
import Technologies from './Technologies/Technologies';

const AboutMe = () => {
  return (
    <section className={classes.root}>
      <div className={classes.about}>
        <h3>About me</h3>
        <p>
          Hello there! I&apos;m <strong>Konrad</strong>, a dedicated and passionate frontend developer with a strong
          interest in programming. I approach my work with a positive mindset and a strong work ethic, aiming to create
          exceptional user experiences through elegant and efficient code. My journey into frontend development began
          out of curiosity, which quickly turned into a full-blown passion. I realized the immense power of transforming
          ideas into tangible digital solutions, and since then, I&apos;ve been captivated by the endless possibilities
          in this field. Throughout my development journey, I have specialized in utilizing cutting-edge technologies
          like {''}
          <strong>React</strong>, <strong>Next.js</strong> and <strong>TypeScript</strong>. These tools enable me to
          create dynamic and interactive user interfaces while ensuring a high level of code quality. In addition to
          technical proficiency, I strongly believe in the value of collaboration and effective communication. By
          fostering positive and inclusive working environments, I strive to deliver exceptional results. As the
          industry keeps evolving, I continue to grow and seek inspiration from design and development philosophies that
          prioritize simplicity, elegance, and intuitive user interfaces. I am committed to staying up-to-date with the
          latest trends and best practices, ensuring that I deliver modern and forward-thinking solutions.{' '}
          <strong>Let&apos;s collaborate and create something extraordinary together!</strong>
        </p>
      </div>
      <div className={classes.techStack}>
        <h3>Tech stack</h3>
        <div className={classes.techContainer}>
          <Technologies />
        </div>
      </div>
      <div className={classes.collaboration}>
        <h3>Collaboration</h3>
        <p>
          Let&apos;s team up and create amazing projects together! I&apos;m open to collaboration and excited to hear
          your ideas. Join me in making a difference and let&apos;s build something extraordinary. {''}
          <a href="mailto:konslo96@gmail.com">Connect with me</a> and let&apos;s explore the possibilities together.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
