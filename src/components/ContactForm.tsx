import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
  return (
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="pointer-events-auto max-w-md text-lg">
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
            className="filled-button rounded px-12"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
