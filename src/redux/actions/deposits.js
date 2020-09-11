import Swal from "sweetalert2";

const GET_DEPOSIT = "GET_DEPOSIT";
const GET_DEPOSIT_BY_MEMBER = "GET_DEPOSIT_BY_MEMBER";

const addDeposit = (formData, history) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/deposits`;

        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Success",
                text: "Please wait admin to approve your deposit",
                icon: "success",
            });
            history.push("/profile");
        } else if (response.status === 403) {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const fetchDeposit = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/deposits`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_DEPOSIT, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const approvalDeposit = ({ status, id }) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/deposits/${id}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status, id }),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: `Deposit is ${status}`,
                icon: "success",
            });

            dispatch(fetchDeposit());
        } else {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const fetchDepositByMember = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/deposits/member/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_DEPOSIT_BY_MEMBER, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

export {
    addDeposit,
    GET_DEPOSIT,
    fetchDeposit,
    approvalDeposit,
    fetchDepositByMember,
    GET_DEPOSIT_BY_MEMBER,
};
