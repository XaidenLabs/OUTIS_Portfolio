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
                  <br />

                  To me, a great social media plan is the playbook that guides everyone to success. I craft content to be the perfect assist, giving the audience something clear and perfectly timed. My approach to building a community is to foster that locker-room spirit, creating a space where everyone feels like a valued teammate on a shared mission.
                  <br />

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
            <div className ="relative space-y-8">
              <a href=""></a>
              <ExperienceCard
                title="Social Media & Community Manager  "
                company="Little Unusual"
                location="Remote"
                period="August 2024 -  Present"
                description="Grew the company's primary Twitter (X) audience by over 380%, from ~1,100 to 5,300+ followers, by developing and executing a consistent content and engagement strategy.

                Launched and managed the official community for the high-profile Solana Global Creator Competition (SGCC) across Discord and Telegram, providing the central hub for hundreds of global creators.

                Directed the complete digital presence and brand voice across X, Instagram, LinkedIn, and YouTube, including developing and executing a distinct, localized voice for the 'Little Unusual Malaysia' Twitter (X) account."
                techStack="Community Management, Social Media Strategy, Content Creation, Brand Management, Twitter (X), Discord"
                delay={0}
              />

              <ExperienceCard
                title="Frontend Engineer (Contract)"
                company="Miroft"
                location="Remote"
                period="May, 2024 - November, 2024"
                description="Developed flagship site for non-profit organization and engineered dynamic real-estate informational website."
                techStack="Community Management, Social Media Strategy, Content Creation, Brand Management, Twitter (X), Discord"
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
