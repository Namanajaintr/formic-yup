import { Field, Form, Formik } from "formik";
import React from "react";

const FormHandling = () => {
  return (
    <div>
      <h1>FormHandling</h1>
      <Formik //handles and submit the form
        initialValues={{
          fn: "",
          ln: "",
          email: "",
          pwd: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => {
            setTimeout(r, 500);
          });
          alert(JSON.stringify(values));
          console.log(JSON.stringify(values));
        }}
      >
        <Form>
          <label>First Name</label>
          <Field name="fn"></Field>
          <label>Last Name</label>
          <Field name="ln"></Field>
          <label>EmailID</label>
          <Field name="email"></Field>
          <label>Password</label>
          <Field name="pwd"></Field>// field hookup to the formik
          <button type="Submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormHandling;
