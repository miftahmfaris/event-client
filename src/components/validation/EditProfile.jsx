import * as Yup from "yup";

const EditProfile = Yup.object().shape({
    password: Yup.string().min(8, "Minimum password is 8 characters"),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

export default EditProfile;
