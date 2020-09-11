import Swal from "sweetalert2";

const GET_ORDER = "GET_ORDER";
const GET_ORDER_BY_MEMBER = "GET_ORDER_BY_MEMBER";

const addOrder = (formData, history) => async (dispatch, getState) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/orders`;
        const member = getState().members.loggedInMember;

        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        if (formData.paymentBy === "ORDER") {
            if (member.balance > formData.price) {
                const response = await fetch(url, options);
                const result = await response.json();

                if (response.status === 200) {
                    Swal.fire({
                        title: "Success",
                        text: "Please wait admin to approve your order",
                        icon: "success",
                    });
                    history.push("/orders");
                } else if (response.status === 403) {
                    Swal.fire({
                        title: `${result.message}`,
                        icon: "error",
                    });
                }
            } else {
                Swal.fire({
                    title: "Your Order is not Enough",
                    icon: "error",
                });
            }
        } else {
            const response = await fetch(url, options);
            const result = await response.json();

            if (response.status === 200) {
                Swal.fire({
                    title: "Success",
                    text: "Please wait admin to approve your order",
                    icon: "success",
                });
                history.push("/orders");
            } else if (response.status === 403) {
                Swal.fire({
                    title: `${result.message}`,
                    icon: "error",
                });
            }
        }
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const fetchOrder = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/orders`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_ORDER, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const fetchOrderByMember = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/orders/member/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_ORDER_BY_MEMBER, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const approvalOrder = ({ status, id }) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/orders/${id}`;
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
                title: `Order is ${status}`,
                icon: "success",
            });

            dispatch(fetchOrder());
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

export {
    addOrder,
    fetchOrder,
    fetchOrderByMember,
    GET_ORDER,
    GET_ORDER_BY_MEMBER,
    approvalOrder,
};
