import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  birthday: "",
  gender: "",
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  emailOrMobile: yup
    .string()
    .required("Email or Mobile number is required")
    .matches(
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$|^\d{10}$/,
      "Invalid email or mobile number"
    ),
  password: yup.string().required("Password is required"),
  birthday: yup.string().required("Birthday is required"),
  gender: yup.string().required("Gender is required"),
});
const SignUpForm = () => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validateOnChange={false}
    >
      {({
        errors,
        handleChange,
        isSubmitting,
        handleSubmit,
        setFieldValue,
        values,
        dirty,
      }) => (
        <Form>
          {/* First Name */}
          <div>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div>{errors.firstName}</div>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div>{errors.lastName}</div>}
          </div>

          {/* Email or Mobile */}
          <div>
            <label htmlFor="emailOrMobile">Mobile number or email*</label>
            <input
              type="text"
              id="emailOrMobile"
              name="emailOrMobile"
              value={values.emailOrMobile}
              onChange={handleChange}
            />
            {errors.emailOrMobile && <div>{errors.emailOrMobile}</div>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password">New password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>

          {/* Birthday */}
          <div>
            <label htmlFor="birthday">Birthday*</label>
            <input
              type="text"
              id="birthday"
              name="birthday"
              value={values.birthday}
              onChange={handleChange}
            />
            {errors.birthday && <div>{errors.birthday}</div>}
          </div>

          {/* Gender */}
          <div>
            <label>Gender*</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={values.gender === "Female"}
                  onChange={() => setFieldValue("gender", "Female")}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={values.gender === "Male"}
                  onChange={() => setFieldValue("gender", "Male")}
                />
                Male
              </label>
            </div>
            {errors.gender && <div>{errors.gender}</div>}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting || !dirty}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
