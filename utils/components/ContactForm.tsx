"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import * as Yup from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";

type ContactFormProps = {
  className?: string;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormError = {
  tripped: boolean;
  message: string;
};

function ContactForm({ className }: ContactFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [error, setError] = useState<FormError>({
    tripped: false,
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (values: FormValues) => {
    // If executeRecaptcha doesn't work, fail.
    if (!executeRecaptcha) {
      setError({ tripped: true, message: "reCaptcha not initialized" });
      return;
    }

    // Get reCaptcha token
    const token = await executeRecaptcha("onSubmit");

    // Bundle form values and reCaptcha token
    const submission = { formValues: values, token };

    // Submit data
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(submission),
      }).then((res) => res.json());
      console.log(response);
      if (response.success) {
        setSubmitted(true);
      } else {
        setError({ tripped: true, message: response.message });
      }
    } catch (e) {
      if (typeof e === "string") {
        setError({ tripped: true, message: e });
      } else if (e instanceof Error) {
        setError({ tripped: true, message: e.message });
      }
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <p className="mx-auto w-fit bg-slate-200 px-8 py-4 text-center font-bold dark:bg-slate-800">
          Thanks for getting in touch! I'll respond to you as soon as I can.
        </p>
      ) : (
        (formik) => (
          <>
            <Form
              className={twMerge(
                "grid grid-cols-1 gap-4 sm:grid-cols-2",
                className,
              )}
            >
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <label htmlFor="name">Name</label>
                  {formik.touched.name && formik.errors.name && (
                    <ErrorMessage
                      name="name"
                      render={(msg: any) => (
                        <label
                          htmlFor="name"
                          className="font-semibold text-red-700 dark:text-red-300"
                        >
                          {msg}
                        </label>
                      )}
                    />
                  )}
                </div>
                <Field
                  name="name"
                  type="text"
                  className="bg-slate-200 px-4 py-2 outline-none focus-within:bg-slate-300 dark:bg-slate-800 dark:focus-within:bg-slate-900"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <label htmlFor="email">Email</label>
                  {formik.touched.email && formik.errors.email && (
                    <ErrorMessage
                      name="email"
                      render={(msg: any) => (
                        <label
                          htmlFor="email"
                          className="font-semibold text-red-700 dark:text-red-300"
                        >
                          {msg}
                        </label>
                      )}
                    />
                  )}
                </div>
                <Field
                  name="email"
                  type="text"
                  className="bg-slate-200 px-4 py-2 outline-none focus-within:bg-slate-300 dark:bg-slate-800 dark:focus-within:bg-slate-900"
                />
              </div>

              <div className="flex flex-col gap-1 sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="message">Message</label>
                  {formik.touched.message && formik.errors.message && (
                    <ErrorMessage
                      name="message"
                      render={(msg: any) => (
                        <label
                          htmlFor="message"
                          className="font-semibold text-red-700 dark:text-red-300"
                        >
                          {msg}
                        </label>
                      )}
                    />
                  )}
                </div>
                <Field
                  name="message"
                  as="textarea"
                  className="bg-slate-200 px-4 py-2 outline-none focus-within:bg-slate-300 dark:bg-slate-800 dark:focus-within:bg-slate-900"
                />
              </div>

              <Button
                primary
                type="submit"
                className="sm:col-span-2 sm:justify-self-end"
              >
                Submit
              </Button>
              {error.tripped && <div>{error.message}</div>}
            </Form>
          </>
        )
      )}
    </Formik>
  );
}

export default ContactForm;
