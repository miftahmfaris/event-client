import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Minimum password is 8 characters")
        .required("Required"),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
});

export default ResetPasswordSchema;
