
import * as yup from "yup";

export const schema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });