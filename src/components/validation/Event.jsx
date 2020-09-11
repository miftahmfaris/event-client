import * as Yup from "yup";

const EventSchema = Yup.object().shape({
    price: Yup.number()
        .typeError("Amount must be a number")
        .required("Required"),
    name: Yup.string().required("Required"),
    startAt: Yup.string().required("Required"),
    endAt: Yup.string().required("Required"),
});

export default EventSchema;
