"use client";

import { useForm } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import ContactItem from "./contact-item";
import Notification from "./notification";
import { NotificationProps, NotificationType } from "@/utils/enums.utils";
import { contactDetails } from "@/utils/data.utils";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace with your actual Formspree ID
  const [notification, setNotification] = useState<NotificationProps>({
    type: NotificationType.NONE,
    message: "",
    isVisible: false,
  });

  useEffect(() => {
    if (state.succeeded) {
      setNotification({
        type: NotificationType.SUCCESS,
        message: "Your message was sent successfully!",
        isVisible: true,
      });

      if (formRef.current) {
        (formRef.current as HTMLFormElement).reset();
      }

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, isVisible: false }));
      }, 5000);
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setNotification({
        type: NotificationType.ERROR,
        message: "Please fill all fields correctly.",
        isVisible: true,
      });

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, isVisible: false }));
      }, 5000);
    }
  }, [state]);

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {contactDetails.map((item, index) => (
              <ContactItem key={index} icon={item.icon} label={item.label} value={item.value} href={item.href} />
            ))}
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200">
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        {notification.isVisible && (
          <Notification type={notification.type} message={notification.message} />
        )}
      </div>
    </section>
  );
}
