import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid Email"),
  password: yup.string().min(6).required("Password is required"),
});
export const registerValidationSchema = yup.object({
    name: yup.string().required("Full name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid Email"),
    password: yup.string().min(6).required("Password is required"),
    confirm_password: yup
      .string()
      .when("password", {
        is: (val: any) => !!(val && val.length > 0),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Both password need to be the same"),
      })
      .required("Confirm Password Required"),
  });