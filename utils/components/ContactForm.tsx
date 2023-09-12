"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import * as Yup from "yup";

type ContactFormProps = {
  className?: string;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

function ContactForm({ className }: ContactFormProps) {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
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
        <Form className={twMerge("grid grid-cols-1 gap-4 sm:grid-cols-2")}>
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
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
