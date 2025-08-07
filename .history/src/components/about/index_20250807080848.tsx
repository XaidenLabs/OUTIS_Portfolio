import { useState, useEffect, useRef } from "react";
import { ExperienceCard } from "./experience-card";
import { skills } from "@/utils/data.utils";
import { Skill } from "@/utils/types.utils";

const About = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [skillsVisible, setSkillsVisible] = useState<boolean>(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      observer.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={aboutRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          <div className="inline-block mb-4">
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
            <div className="mb-12">
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  I learned my most valuable professional lessons on the basketball court. The discipline from practice, the strategic thinking needed to win, and the chemistry that turns a group into a team are the same principles I bring to the digital world every day.
                  br

                  To me, a great social media plan is the playbook that guides everyone to success. I craft content to be the perfect assist, giving the audience something clear and perfectly timed. My approach to building a community is to foster that locker-room spirit, creating a space where everyone feels like a valued teammate on a shared mission.

                  That competitive drive is still a huge part of who I am, channeled mostly into video games. My cats, of course, remain the thoroughly unimpressed referees of it all.
                </p>
              </div>
            </div>

            <div ref={skillsRef}>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                My <span className="text-indigo-600">Skills</span>
              </h3>
              <div className="space-y-6">
                {skills.map((skill: Skill, index: number) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${skillsVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Professional <span className="text-indigo-600">Experience</span>
            </h3>
            <div className="relative space-y-8">
              <ExperienceCard
                title="Part Time Web Developer"
                company="Niphal International Ltd."
                location="Abuja, Nigeria (Hybrid)"
                period="November, 2023 - June, 2025"
                description="Led the end-to-end development of a church website and admin portal, built company's website, and also handled a few other websites"
                techStack="HTML, CSS, JavaScript, React, Next.js, Express.js, MongoDB"
                delay={0}
              />

              <ExperienceCard
                title="Frontend Engineer (Contract)"
                company="Miroft"
                location="Remote"
                period="May, 2024 - November, 2024"
                description="Developed flagship site for non-profit organization and engineered dynamic real-estate informational website."
                techStack="JavaScript, React.js, Next.js"
                delay={200}
              />

              <ExperienceCard
                title="Software Engineering Intern"
                company="Sleeky Programmers Ltd"
                location="Remote"
                period="August 2024 - Present"
                description="Built company marketing site, maintained an educational website, led the backend development for an e-commerce platform for farmers and served as Technical Lead on a family app MVP."
                techStack="JavaScript, Next.js, Nest.js, MongoDB, Paystack API, RESTful APIs, Git, Agile/Scrum"
                delay={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
