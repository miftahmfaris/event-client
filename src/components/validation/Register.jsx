import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

export default RegisterSchema;
