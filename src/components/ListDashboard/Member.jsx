import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllMember } from "../../redux/actions";

export default function Member() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.members.allMember);

    useEffect(() => {
        dispatch(fetchAllMember());
    }, [dispatch]);

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <th>Admin</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {member.length > 0 &&
                    member.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>
                                    <img
                                        style={{ width: "100px" }}
                                        src={item.avatar}
                                        alt="image_avatar"
                                    />
                                </td>
                                <td>{item.fullname}</td>
                                <td>
                                    <Link to={`/profile/${item._id}`}>
                                        {item.email}
                                    </Link>
                                </td>
                                <td>{item.isAdmin ? "Admin" : "Member"}</td>
                                <td>{item.status}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
