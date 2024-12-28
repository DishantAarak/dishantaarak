import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

// Section Component
const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <div className="w-full sm:w-3/4">
          <div className="bg-opacity-40 text-white bg-gray-400 backdrop-blur-sm bg-clip-padding shadow-lg rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Overlay Component
export const Overlay = () => {
  const scroll = useScroll();
  const [opacityIntroSection, setOpacityIntroSection] = useState(1);
  const [opacitySkillsSection, setOpacitySkillsSection] = useState(1);
  const [opacityContactSection, setOpacityContactSection] = useState(1);

  useFrame(() => {
    setOpacityIntroSection(1 - scroll.range(0, 1 / 3));
    setOpacitySkillsSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityContactSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        {/* Intro Section */}
        <Section opacity={opacityIntroSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Welcome to My Portfolio 🚀
          </h1>
          <p className="text-slate-200">
            I’m Dishant Aarak, a passionate coder and dedicated teacher
            committed to making tech education engaging and impactful. With two
            years of teaching experience and expertise in Full Stack
            Development, I specialize in creating interactive and practical
            learning experiences tailored for beginners.
          </p>
          <p className="mt-3">Here’s what I do best:</p>
          <ul className="leading-9">
            <li>
              💻 Building robust web applications and teaching their foundations
            </li>
            <li>
              🎨 Designing intuitive UIs and simplifying complex tech concepts
            </li>
            <li>
              ⚡ Delivering scalable, real-world solutions for students and
              projects
            </li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>

        {/* Skills Section */}
        <Section right opacity={opacitySkillsSection}>
          <div class="container mx-auto py-6">
            <h2 class="text-2xl font-bold mb-4">My Technical Skills</h2>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2">
                <ul>
                  <h3 className="font-bold">Frontend & Backend</h3>
                  <li className="pl-2">⭐ReactJS</li>
                  <li className="pl-2">⭐Next.js</li>
                  <li className="pl-2">⭐Node.js</li>
                  <li className="pl-2">⭐Express</li>
                  <li className="pl-2">⭐MongoDB</li>
                  <li className="pl-2">⭐PostgreSQL</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 mt-6 md:mt-0">
                <ul>
                  <h3 className="font-bold">Unique Skills</h3>
                  <li className="pl-2">⭐MERN, MEAN, and LAMP stacks</li>
                  <li className="pl-2">⭐AI-powered tools</li>
                  <li className="pl-2">⭐Three.js (3D graphics)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="animate-bounce mt-6">↓</p>
        </Section>

        {/* Contact Section */}
        <Section opacity={opacityContactSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Let’s Work Together 🤝
          </h1>
          <p className="text-slate-200">
            Interested in collaborating? Let’s create something amazing.
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📧{" "}
            <a
              href="mailto:dishantaarak2696@gmail.com"
              className="text-blue-500 hover:underline"
            >
              dishantaarak2696@gmail.com
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
