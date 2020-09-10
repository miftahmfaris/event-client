import * as Yup from "yup";

const DepositSchema = Yup.object().shape({
    amount: Yup.number()
        .typeError("Amount must be a number")
        .required("Required"),
});

export default DepositSchema;
