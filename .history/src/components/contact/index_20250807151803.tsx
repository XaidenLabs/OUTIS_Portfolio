import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Github, Linkedin, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";

import { SocialLink } from "./social-link";
import { ContactItem } from "./contact-item";
import { Notification } from "./notification";
import { NotificationType } from "@/utils/enums.utils";
import { NotificationProps } from "@/utils/types.utils";

const Contact = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);

  const [notification, setNotification] = useState<NotificationProps>({
    type: NotificationType.SUCCESS,
    message: "",
    isVisible: false,
  });

  const [state, handleSubmit] = useForm("xeozpadn");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFormVisible(true);
      },
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    formRef.current && formObserver.observe(formRef.current);

    return () => {
      observer.disconnect();
      formObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setNotification({
        type: NotificationType.SUCCESS,
        message: "Your message was sent successfully!",
        isVisible: true,
      });

      // ✅ Reset form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setNotification({
        type: NotificationType.ERROR,
        message: "Please fill all fields correctly.",
        isVisible: true,
      });
    }
  }, [state]);

  const hideNotification = () => {
    setNotification((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <>
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      <section
        id="contact"
        ref={sectionRef}
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether you have a project in mind, a question about my work, or just want to connect,
              I’d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info & Socials */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="space-y-6 mb-12">
                <ContactItem
                  icon={<Mail size={24} className="text-indigo-600" />}
                  label="Email"
                  value="meldiablo23@gmail.com"
                  delay={400}
                />
                <ContactItem
                  icon={<MapPin size={24} className="text-indigo-600" />}
                  label="Location"
                  value="Nigeria"
                  delay={500}
                />
              </div>

              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Connect With <span className="text-indigo-600">Me</span>
                </h3>
                <div className="flex space-x-4">
                  <SocialLink icon={<FaTelegram size={20} />} href="https://t.me/angrypacifist" label="Telegram" delay={1000} />
                  <SocialLink icon={<FaXTwitter size={20} />} href="https://x.com/angry__pacifist" label="Twitter" delay={1000} />
                  <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/mujahidshuaib/" label="LinkedIn" delay={800} />
                  <SocialLink icon={<Github size={20} />} href="https://github.com/AngryPacifist" label="GitHub" delay={900} />
                  <SocialLink icon={<BsSubstack size={20} />} href="https://angrypacifist.substack.com" label="Substack" delay={900} />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=meldiablo23@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center bg-white/70 backdrop-blur-sm text-gray-600 rounded-xl border border-gray-200/50"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                formVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-xl">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/80"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/80"
                        placeholder="you@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/80"
                      placeholder="Collaboration Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/80 resize-none"
                      placeholder="Feel free to share some details about what you're working on, ask a question, or just say hello!"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all flex items-center justify-center font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom direct mail */}
          <div
            className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <span>or reach out directly at</span>
              <Link
                href="mailto:meldiablo23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-purple-600 font-semibold inline-flex items-center"
              >
                meldiablo23@gmail.com
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
