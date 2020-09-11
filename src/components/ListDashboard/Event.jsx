import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../redux/actions";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Deposit() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.events.allEvent);

    useEffect(() => {
        dispatch(fetchEvent());
    }, [dispatch]);

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Publish Date</th>
                    <th>Expired Date</th>
                    <th>Created By</th>
                    <th>Updated By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {event.length > 0 &&
                    event.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img
                                        style={{ width: "100px" }}
                                        src={item.image}
                                        alt="image_event"
                                    />
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    {moment(item.startAt).format("DD-MM-YYYY")}
                                </td>
                                <td>
                                    {moment(item.endAt).format("DD-MM-YYYY")}
                                </td>
                                <td>{item.createdBy}</td>
                                <td>{item.updatedBy}</td>
                                <td>
                                    {
                                        <Link to={`event/${item._id}`}>
                                            <Button
                                                variant="success"
                                                style={{ margin: "5px" }}
                                            >
                                                Update
                                            </Button>
                                        </Link>
                                    }
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
