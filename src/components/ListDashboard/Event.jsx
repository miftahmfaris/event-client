import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../redux/actions";
import { Button } from "react-bootstrap";

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
                    <th>Status</th>
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
                                <td>{item.status}</td>
                                <td>{item.Image}</td>
                                <td>{item.Price}</td>
                                <td>{item.startAt}</td>
                                <td>{item.endAt}</td>
                                <td>{item.createdBy}</td>
                                <td>{item.updatedBy}</td>
                                <td>
                                    {
                                        <React.Fragment>
                                            <Button
                                                variant="danger"
                                                style={{ margin: "5px" }}
                                                // onClick={() =>
                                                //     dispatch(
                                                //         approvalDeposit({
                                                //             status: "REJECTED",
                                                //             id: item._id,
                                                //         })
                                                //     )
                                                // }
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant="success"
                                                style={{ margin: "5px" }}
                                                // onClick={() =>
                                                //     dispatch(
                                                //         approvalDeposit({
                                                //             status: "APPROVED",
                                                //             id: item._id,
                                                //         })
                                                //     )
                                                // }
                                            >
                                                Update
                                            </Button>
                                        </React.Fragment>
                                    }
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
