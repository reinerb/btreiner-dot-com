import React from "react";
import ContactForm from "@/utils/components/ContactForm";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <RootLayout
        title="Contact | Ben Reiner"
        metaDescription="Need a frontend developer to help bring your vision to life? Send me a message!"
        className="grid place-items-center gap-4"
        activeNav={"contact"}
      >
        <div className="container mx-auto grid h-screen grid-rows-3 items-center gap-4 text-center">
          <section className="self-end">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <p className="font-semibold">
              Ready to bring your vision to life? Send me a message and let's
              make something incredible together.
            </p>
          </section>
          <ContactForm className="row-span-2 self-start" />
        </div>
      </RootLayout>
    </GoogleReCaptchaProvider>
  );
}

export default Contact;
