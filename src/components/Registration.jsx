import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "./schema";

const initialValues = {
  name: "",
  email: "",
  pwd: "",
  confirmPwd: "",
};

const Registration = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });
  console.log(errors);
  return (
    <div>
      Registration
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          ></input>
          {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="">EmailID</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="pwd"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.pwd ? <p style={{ color: "red" }}>{errors.pwd}</p> : null}
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPwd"
            value={values.confirmPwd}
            onChange={handleChange}
          ></input>{" "}
          {errors.confirmPwd ? (
            <p style={{ color: "red" }}>{errors.confirmPwd}</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
