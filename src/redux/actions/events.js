import Swal from "sweetalert2";

const GET_EVENT = "GET_EVENT";

const addEvent = (formData, history) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/events`;

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

const fetchEvent = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/events`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_EVENT, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const search = (search, service, action) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/${service}/search?q=${search}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: action, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const sort = (by, service, action) => async (dispatch) => {
    try {
        const split = by.split("-");
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_API_URL}/${service}/sort?by=${split[0]}&sort=${split[1]}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: action, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

export { addEvent, GET_EVENT, fetchEvent, search, sort };
