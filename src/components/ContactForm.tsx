import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ThankYouMessage from "./ThankYouMessage";

function TextField(props: {
  name: string;
  label: string;
  email?: boolean;
  textArea?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <Field
        type={props.email ? "email" : "text"}
        name={props.name}
        as={props.textArea ? "textarea" : ""}
        rows={props.rows}
        className="w-full rounded border border-white/50 bg-white/10 py-2 px-4"
      />
      <div className="mb-2 h-6 text-sm text-red-500">
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
}

function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div className="relative">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors: { [field: string]: string } = {};

          if (!values.name) {
            errors.name = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.message) {
            errors.message = "Required";
          }

          return errors;
        }}
        onSubmit={(values) => {
          fetch("https://formsubmit.co/ajax/chriskevini@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(values),
          }).then(() => setIsFormSubmitted(true));
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className={
              "pointer-events-auto max-w-md text-lg transition-opacity duration-500 " +
              (isFormSubmitted ? "opacity-0" : "")
            }
          >
            <p className="my-16 whitespace-pre-wrap">
              Let&apos;s build something <b>awesome</b>!
              <br />
              I&apos;m open to exploring new oportunities.
            </p>
            <TextField
              name="name"
              label="Name"
            />
            <TextField
              name="email"
              label="Email"
              email
            />
            <TextField
              name="message"
              label="Message"
              textArea
              rows={5}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="filled-button relative rounded px-12 disabled:grayscale disabled:hover:brightness-100"
            >
              <span className={isSubmitting ? "text-transparent" : ""}>
                Submit
              </span>
              <div
                className={
                  "absolute top-1/2 left-1/2 -ml-2 -mt-2 aspect-square w-4 animate-spin rounded-full border-2 border-r-transparent " +
                  (isSubmitting ? "border-black" : "border-transparent")
                }
              ></div>
            </button>
            <input
              type="text"
              name="_honey"
              className="hidden"
            />
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />
          </Form>
        )}
      </Formik>
      {isFormSubmitted ? <ThankYouMessage /> : null}
    </div>
  );
}

export default ContactForm;
