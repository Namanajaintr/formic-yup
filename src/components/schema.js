import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(24).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  pwd: Yup.string().min(4).max(10).required("Please enter the password"),
  confirmPwd: Yup.string()
    .required()
    .oneOf([Yup.ref("pwd"), null], "Password must match"),
});
