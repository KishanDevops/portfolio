"use client";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-black/10">
      <div className="max-w-5xl mx-auto px-6">
        <section className="py-10">
          <h1 className="font-bold mb-6 md:text-5xl text-4xl">About Me</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
            I’m a DevOps Engineer who enjoys building reliable, scalable, and
            secure infrastructure for modern applications.
          </p>
          <br />
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
            With expertise in cloud platforms, CI/CD pipelines, and automation
            tools, I help teams deliver software faster and more efficiently
            across environments.
          </p>
          <br />
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
            When I&apos;m not optimizing systems, you can find me learning new
            DevOps technologies, contributing to open-source projects, or
            enjoying outdoor activities.
          </p>
        </section>
        <Experience />
        <Skills />
      </div>
    </section>
  );
};

export default About;
