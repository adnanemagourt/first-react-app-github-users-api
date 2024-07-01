import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import User from './User';

function FollowingModal({ showFollowing, setShowFollowing, user }) {

    const [people, setpeople] = useState([]);
    useEffect(() => {
        fetch(user.following_url.replace("{/other_user}", ""))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setpeople(data);
            });
    }, []);

    const imageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    };

    return (
        <Modal show={showFollowing} onHide={() => setShowFollowing(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Following</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Login</th>
                            <th>HTML Url</th>
                            <th>Type</th>
                            <th>Site Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            people.map(person => (
                                <tr key={person.id}>
                                    <td>
                                        <img style={imageStyle} src={person.avatar_url} alt={person.login} className="avatar" />
                                    </td>
                                    <td>{person.login}</td>
                                    <td>{person.html_url}</td>
                                    <td>{person.type}</td>
                                    <td>{person.site_admin ? "true" : "false"}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowFollowing(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FollowingModal;