"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

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
      onSubmit={handleSubmit}
    >
      <Form className={twMerge("grid grid-cols-1 gap-4 sm:grid-cols-2")}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            className="bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            className="bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
          />
        </div>

        <div className="flex flex-col gap-1 sm:col-span-2">
          <div className="grid grid-cols-3">
            <label htmlFor="message">Message</label>
            <ErrorMessage />
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
    </Formik>
  );
}

export default ContactForm;
