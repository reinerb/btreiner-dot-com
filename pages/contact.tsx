import ContactForm from "@/utils/components/ContactForm";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import React from "react";

function Contact() {
  return (
    <RootLayout
      title="Contact | Ben Reiner"
      metaDescription="Need a frontend developer to help bring your vision to life? Send me a message!"
      className="flex flex-col gap-4"
      activeNav={"contact"}
    >
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="font-semibold">
        Ready to bring your vision to life? Send me a message and let's make
        something incredible together.
      </p>
      <ContactForm />
    </RootLayout>
  );
}

export default Contact;
