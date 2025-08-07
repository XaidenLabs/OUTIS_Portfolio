import { useState, useEffect, useRef } from "react";
import { projects } from "@/utils/data.utils";
import ProjectCard from "./project-card";
import { Project } from "@/utils/types.utils";

const Projects = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/5 to-purple-300/5 rounded-full blur-2xl animate-spin-slow"></div>

        <div className="absolute top-20 left-20 w-2 h-2 bg-indigo-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={sectionRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A selection of my most
            <span className="text-indigo-600 font-semibold"> impactful</span> articles and
            <span className="text-purple-600 font-semibold"> research</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`
          text-center mt-20 transform transition-all duration-1000 delay-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200/50 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Want to Read More?
            </h3>

            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              You can find my full body of work on Substack and X.
              <span className="text-indigo-600 font-semibold"> Substack</span> and
              <span className="text-purple-600 font-semibold"> X</span>
            </p>
            <a
              href="https://angrypacifist.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
