import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const appSchema = yup.object().shape({
  name: yup.string().required("Please enter a name").label("Name"),
  email: yup.string().email("Please enter a valid email").required("Please enter an email").label("Email"),
  username: yup.string().required("Please enter a username").label("Username"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "Please create a strong password")
    .required("Password is required")
    .label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Please confirm your password")
    .label("Confirm Password"),
});
