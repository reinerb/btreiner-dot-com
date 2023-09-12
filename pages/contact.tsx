import ContactForm from "@/utils/components/ContactForm";
import RootLayout from "@/utils/layouts/RootLayout";
import React from "react";

function Contact() {
  return (
    <RootLayout
      title="Contact | Ben Reiner"
      metaDescription="Need a frontend developer to help bring your vision to life? Send me a message!"
    >
      <h1 className="mb-4 text-2xl font-bold">Contact Me</h1>
      <ContactForm />
    </RootLayout>
  );
}

export default Contact;
