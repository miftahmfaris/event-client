import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { approvalOrder, fetchOrder } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";

export default function Order() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.orders.allOrder);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchOrder(id));
    }, [dispatch, id]);

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Ticket Number</th>
                    <th>Event Name</th>
                    <th>Ticket Price</th>
                    <th>Event Location</th>
                    <th>Status</th>
                    <th>Participation Status</th>
                    <th>Actions</th>
                    <th>Participation Status Actions</th>
                </tr>
            </thead>
            <tbody>
                {order.length > 0 &&
                    order.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.memberID.fullname}</td>
                                <td>
                                    <Link
                                        to={`/dashboard-order/${item.memberID._id}`}
                                    >
                                        {item.memberID.email}
                                    </Link>
                                </td>
                                <td>{item.ticketNumber}</td>
                                <td>{item.eventID.name}</td>
                                <td>{item.eventID.price}</td>
                                <td>{item.eventID.location}</td>
                                <td>{item.status}</td>
                                <td>{item.participantStatus}</td>
                                <td>
                                    {item.status === "PENDING" && (
                                        <React.Fragment>
                                            <Button
                                                variant="danger"
                                                style={{ margin: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        approvalOrder({
                                                            status: "REJECTED",
                                                            id: item._id,
                                                        })
                                                    )
                                                }
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                variant="success"
                                                style={{ margin: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        approvalOrder({
                                                            status: "APPROVED",
                                                            id: item._id,
                                                        })
                                                    )
                                                }
                                            >
                                                Approve
                                            </Button>
                                        </React.Fragment>
                                    )}
                                </td>
                                <td>
                                    {item.participantStatus === "PENDING" && (
                                        <React.Fragment>
                                            <Button
                                                variant="danger"
                                                style={{ margin: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        approvalOrder({
                                                            participantStatus:
                                                                "ABSENT",
                                                            id: item._id,
                                                        })
                                                    )
                                                }
                                            >
                                                Absent
                                            </Button>
                                            <Button
                                                variant="success"
                                                style={{ margin: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        approvalOrder({
                                                            participantStatus:
                                                                "PRESENT",
                                                            id: item._id,
                                                        })
                                                    )
                                                }
                                            >
                                                Present
                                            </Button>
                                        </React.Fragment>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
