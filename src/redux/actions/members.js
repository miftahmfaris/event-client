import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

const GET_LOGGED_IN_MEMBER = "GET_LOGGED_IN_MEMBER";
const GET_MEMBER = "GET_MEMBER";
const LOGOUT = "LOGOUT";

const fetchMember = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/members/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_LOGGED_IN_MEMBER, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

const memberLogin = (formData, history) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/members/login`;
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Congratulation",
                icon: "success",
            });
            localStorage.setItem("token", result.result);
            dispatch(fetchMember());
            history.push("/");
        } else if (response.status !== 200) {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
            localStorage.clear();
        }
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const logout = (history) => (dispatch, getState) => {
    Swal.fire({
        icon: "success",
        title: "Thank you for coming",
    });
    localStorage.clear();
    history.push("/");
    dispatch({ type: LOGOUT });
};

const updateMember = (formData, history) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/members/${id}`;
        for (let key in formData) {
            if (formData[key] === "") {
                delete formData[key];
            }
        }

        const options = {
            method: "PUT",
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
                title: "Update Success",
                icon: "success",
            });
            dispatch(fetchMember());
            history.push("/profile");
        } else if (response.status !== 200) {
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

const fetchAllMember = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/members`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_MEMBER, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

const createMember = (values, history) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/members`;
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Registration Success",
                text: "Check your email for activation",
                icon: "success",
            });
            history.push("/");
        } else if (response.status !== 200) {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const activation = (id) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/members/activation/${id}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ status: "ACTIVE" }),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Activation Success",
                icon: "success",
            });
        } else if (response.status !== 200) {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const forgetPassword = (values) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/members/forget-password`;
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Forget Password is Success",
                text: "Please check you email",
                icon: "success",
            });
        } else if (response.status !== 200) {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const resetPassword = (values, id, history) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/members/forget-password/${id}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(url, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: "Reset Password is Success",
                icon: "success",
            });
            history.push("/login");
        } else if (response.status !== 200) {
            Swal.fire({
                title: `${result.message}`,
                icon: "error",
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    memberLogin,
    fetchMember,
    GET_LOGGED_IN_MEMBER,
    logout,
    LOGOUT,
    updateMember,
    GET_MEMBER,
    fetchAllMember,
    createMember,
    activation,
    forgetPassword,
    resetPassword,
};
