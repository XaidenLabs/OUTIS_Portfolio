import { useState, useEffect, useRef } from "react";
import { ExperienceCard } from "./experience-card";
// import { skills } from "@/utils/data.utils";
// import { Skill } from "@/utils/types.utils";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaChartLine, FaHandshake } from "react-icons/fa";
import { FaTools } from "react-icons/fa";


const About = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                  <br />

                  To me, a great social media plan is the playbook that guides everyone to success. I craft content to be the perfect assist, giving the audience something clear and perfectly timed. My approach to building a community is to foster that locker-room spirit, creating a space where everyone feels like a valued teammate on a shared mission.
                  <br />
                  <br />

                  That competitive drive is still a huge part of who I am, channeled mostly into video games. My cats, of course, remain the thoroughly unimpressed referees of it all.
                </p>
              </div>
            </div>

            <div ref={skillsRef}>
              <h3 className="text-4xl font-bold mb-8 text-gray-900">
                My <span className="text-indigo-600">Skills</span>
              </h3>

              {/* Community Building & Management */}
              <div className="mb-8">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                  <RiUserCommunityFill size={28} className="text-indigo-600" />
                  Community Building & Management
                </h4>
                <ul className="list-disc ml-10 text-gray-700">
                  <li>Community Growth Strategy</li>
                  <li>Community Launch & Onboarding</li>
                  <li>Platform Moderation</li>
                  <li>Conflict Resolution</li>
                  <li>Engagement Campaigns</li>
                  <li>Event Management</li>
                  <li>User Feedback & Analysis</li>
                  <li>Ambassador Programs</li>
                </ul>
              </div>

              {/* Content Strategy & Creation */}
              <div className="mb-8">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                  <MdOutlineContentPaste size={28} className="text-indigo-600" />
                  Content Strategy & Creation
                </h4>
                <ul className="list-disc ml-10 text-gray-700">
                  <li>Content Strategy & Marketing</li>
                  <li>Technical Writing</li>
                  <li>Long-Form Articles</li>
                  <li>Copywriting</li>
                  <li>Brand Voice Development</li>
                  <li>Editorial Planning</li>
                  <li>Public Speaking & Hosting (AMAs/Spaces)</li>
                </ul>
              </div>

              {/* Social Media & Growth */}
              <div className="mb-8">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                  <FaChartLine size={28} className="text-indigo-600" />
                  Social Media & Growth
                </h4>
                <ul className="list-disc ml-10 text-gray-700">
                  <li>Social Media Strategy</li>
                  <li>Platform Management</li>
                  <li>Audience Growth</li>
                  <li>Content Curation</li>
                  <li>Engagement Analysis</li>
                </ul>
              </div>

              {/* Partnerships & Business Development */}
              <div className="mb-8">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                  <FaHandshake size={28} className="text-indigo-600" />
                  Partnerships & Business Development
                </h4>
                <ul className="list-disc ml-10 text-gray-700">
                  <li>Value-Proposition Design</li>
                  <li>Partner Identification & Outreach</li>
                  <li>Co-Marketing Campaigns</li>
                  <li>Relationship Management</li>
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div>
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                  <FaTools size={24} className="text-indigo-600" />
                  Tools & Platforms
                </h4>
                <div className="ml-10">
                  <div className="mb-2">
                    <span className="font-semibold text-gray-800">Community & Social:</span>
                    <span className="ml-2 text-gray-700">
                      Discord (incl. bot setup), Telegram, Slack, Twitter (X), LinkedIn, Instagram
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Content & Collaboration:</span>
                    <span className="ml-2 text-gray-700">
                      Notion, Google Workspace, Substack, Medium, Canva, Figma (Basics)
                    </span>
                  </div>
                </div>
              </div>

              <br />

              <div className="mb-8 flex flex-">
                <h4 className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                  Community & <span className="text-indigo-600">Affiliation</span>

                </h4>
                <ul className="list-disc ml-10 text-gray-700">
                  <li>Value-Proposition Design</li>
                  <li>Partner Identification & Outreach</li>
                  <li>Co-Marketing Campaigns</li>
                  <li>Relationship Management</li>
                </ul>
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
                title="Freelance Writer & Eco. Contributor"
                href="https://earn.superteam.fun/t/angrypacifist"
                company="Superteam Earn"
                location="Remote"
                period="2023 - Present"
                description={`Established a reputation as a top-tier writer and strategist by winning 8 high-value bounties and earning over $5,000 on the Superteam Earn platform.
                <br></br>

                Authored dozens of successful submissions, including articles and threads that led directly to recruitment for leadership roles at SuperteamNG and Little Unusual.
                <br></br>

                Specialized in distilling complex subjects into clear content, with deep dives into web3 verticals like DeFi and NFTs, alongside market research for emerging sectors like electric vehicles.
                `}
                techStack="Technical Writing, Content Strategy, Solana, Research, Community Contribution"
                delay={0}
              />

              <ExperienceCard
                title="Writers' Guild Lead"
                href="https://x.com/Perena__"
                company="Superteam Nigeria"
                location="Remote (Nigeria)"
                period="Sept. 2024 - Present"
                description={`Spearheaded the guild's successful transition from a multi-platform structure (WhatsApp/Telegram) to a unified Discord server, maintaining high engagement during a period of widespread community restructuring.<br></br>
                Cultivated the guild into the premier hub for Solana writers in the region by hosting workshops, developing a 'deeper research bench,' and creating pathways for members to access earning opportunities.<br></br>
                Acted as a key content contributor for the ecosystem, ghostwriting landscape reports for SuperteamNG and authoring high-visibility content for the official <a href="https://x.com/solana" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:#6366f1;">Solana</a>  Twitter (X) account.`}
                techStack="Leadership, Community Strategy, Content Development, Talent Development, Ghostwriting, Solana Ecosystem"
                delay={0}
              />
              <ExperienceCard
                title="Social Media & Community Manager"
                href="https://x.com/littleunusualHQ"
                company="Little Unusual"
                location="Remote"
                period="August 2024 -  Present"
                description={`Grew the company's primary Twitter (X) audience by over 380%, from ~1,100 to 5,300+ followers, by developing and executing a consistent content and engagement strategy.<br><br>
                Launched and managed the official community for the high-profile Solana Global Creator Competition (SGCC) across Discord and Telegram, providing the central hub for hundreds of global creators.<br><br>
                Directed the complete digital presence and brand voice across X, Instagram, LinkedIn, and YouTube, including developing and executing a distinct, localized voice for the <a href="https://x.com/LittleUnusualMY" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:#6366f1;">'Little Unusual Malaysia'</a> Twitter (X) account.`}
                techStack="Community Management, Social Media Strategy, Content Creation, Brand Management, Twitter (X), Discord"
                delay={0}
              />

              <ExperienceCard
                title="Community Moderator (Contract)"
                href="https://x.com/littleunusualHQ"
                company="Perena"
                location="Remote"
                period="Dec. 2024 - Feb. 2025"
                description="Managed community support and safety during a critical platform migration from Telegram to Discord, successfully onboarding thousands of new users during a high-traffic points program.
                <br></br>

                Acted as the primary point of contact for user complaints and feedback, resolving hundreds of support tickets and establishing a system to escalate key issues to the development team.
                <br></br>
                
                Established a foundational ambassador program by identifying and mentoring key community members, with one recruit later being promoted to Head Moderator."
                techStack="Community Moderation, User Support, Conflict Resolution, Discord, Feedback Analysis"
                delay={0}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
