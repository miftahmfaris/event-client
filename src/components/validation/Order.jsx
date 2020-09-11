import * as Yup from "yup";

const OrderSchema = Yup.object().shape({
    paymentBy: Yup.string().required("Required"),
});

export default OrderSchema;
