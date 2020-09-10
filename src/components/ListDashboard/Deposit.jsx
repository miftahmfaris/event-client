import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeposit, approvalDeposit } from "../../redux/actions";

export default function Deposit() {
    const dispatch = useDispatch();
    const deposit = useSelector((state) => state.deposits.allDeposit);

    useEffect(() => {
        dispatch(fetchDeposit());
    }, [dispatch]);

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Previous Balance</th>
                    <th>Amount</th>
                    <th>Current Balance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {deposit.length > 0 &&
                    deposit.map((item) => {
                        return (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.memberID.fullname}</td>
                                <td>{item.memberID.email}</td>
                                <td>{item.previousBalance}</td>
                                <td>{item.amount}</td>
                                <td>
                                    {item.status === "PENDING"
                                        ? item.memberID.balance
                                        : item.balance}
                                </td>
                                <td>
                                    {item.status === "PENDING" && (
                                        <React.Fragment>
                                            <Button
                                                variant="danger"
                                                style={{ margin: "5px" }}
                                                onClick={() =>
                                                    dispatch(
                                                        approvalDeposit({
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
                                                        approvalDeposit({
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
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
