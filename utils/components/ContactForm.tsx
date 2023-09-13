"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import * as Yup from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useState } from "react";

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

  const handleReCaptcha = useCallback(async () => {
    if (!executeRecaptcha) {
      console.error("executeRecaptcha not yet available");
      return -1;
    }

    const token = await executeRecaptcha("onSubmit");

    try {
      const verify = await fetch("/api/recaptcha", {
        method: "POST",
        body: JSON.stringify({ token }),
      }).then((res) => res.json());

      return verify.score as number;
    } catch (e) {
      if (typeof e === "string") {
        setError({ tripped: true, message: e });
      } else if (e instanceof Error) {
        setError({ tripped: true, message: e.message });
      }
      return -1;
    }
  }, [executeRecaptcha]);

  const handleSubmit = async (values: FormValues) => {
    const score = await handleReCaptcha();

    if (error.tripped) return;

    if (score <= 0.5) {
      setError({ tripped: true, message: "reCaptcha did not pass." });
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });

    console.log(await response.json());
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
      {(formik) => (
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
                      className="text-red-700 dark:text-red-300"
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
              className="bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
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
                      className="text-red-700 dark:text-red-300"
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
              className="bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
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
                      className="text-red-700 dark:text-red-300"
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
              className="bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
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
      )}
    </Formik>
  );
}

export default ContactForm;
