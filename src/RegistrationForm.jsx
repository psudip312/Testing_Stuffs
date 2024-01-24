// RegistrationForm.jsx

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
  };

  // Handle form submission
  const handleFormSubmit = (values, actions) => {
    // You can perform actions like making API calls or updating state here
    console.log("Form submitted with values:", values);
    // Don't forget to set submitting to false when done
    actions.setSubmitting(false);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {/* Formik component for managing form state */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {/* Form component for handling form submissions */}
        <Form>
          {/* Form fields */}
          <div>
            <label htmlFor="name">Name:</label>
            {/* Field component for handling form input */}
            <Field type="text" id="name" name="name" />
            {/* Display validation errors if any */}
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          {/* Submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
