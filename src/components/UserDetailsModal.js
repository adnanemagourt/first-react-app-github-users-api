import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import FollowingModal from './FollowingModal';
import FollowerModal from './FollowerModal';

function UserDetailsModal({ showDetails, setShowDetails, user }) {

    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    return (
        <>
            <Modal show={showDetails} onHide={() => setShowDetails(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Form.Group className="mb-3" controlId="formAvatarUrl">
                        <Form.Label>Avatar:</Form.Label>
                        <Form.Control type="text" value={user.avatar_url} disabled />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formGravatarId">
                        <Form.Label>Gravatar Id:</Form.Label>
                        <Form.Control type="text" value={user.gravatar_id} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formHtmlUrl">
                        <Form.Label>HTML Url:</Form.Label>
                        <Form.Control type="text" value={user.html_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFollowersUrl">
                        <Form.Label>Followers:</Form.Label>
                        {/* <Form.Control type="text" value={user.followers_url} disabled /> */}
                        <Button variant="primary" onClick={() => setShowFollowers(true)}>Show Followers</Button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFollowingUrl">
                        <Form.Label>Following:</Form.Label>
                        {/* <Form.Control type="text" value={user.following_url} disabled /> */}
                        <Button variant="primary" onClick={() => setShowFollowing(true)}>Show Following</Button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGistsUrl">
                        <Form.Label>Gists:</Form.Label>
                        <Form.Control type="text" value={user.gists_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStarredUrl">
                        <Form.Label>Starred:</Form.Label>
                        <Form.Control type="text" value={user.starred_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSubscriptionsUrl">
                        <Form.Label>Subscriptions:</Form.Label>
                        <Form.Control type="text" value={user.subscriptions_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formOrganizationsUrl">
                        <Form.Label>Organizations:</Form.Label>
                        <Form.Control type="text" value={user.organizations_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formReposUrl">
                        <Form.Label>Repos:</Form.Label>
                        <Form.Control type="text" value={user.repos_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEventsUrl">
                        <Form.Label>Events:</Form.Label>
                        <Form.Control type="text" value={user.events_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formReceivedEventsUrl">
                        <Form.Label>Received Events:</Form.Label>
                        <Form.Control type="text" value={user.received_events_url} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formType">
                        <Form.Label>Type:</Form.Label>
                        <Form.Control type="text" value={user.type} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSiteAdmin">
                        <Form.Label>Site Admin:</Form.Label>
                        <Form.Control type="text" value={user.site_admin ? 'Yes' : 'No'} disabled />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetails(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            {showFollowers  ? 
            <FollowerModal showFollower={showFollowers} setShowFollower={setShowFollowers} user={user} />
            : null}
            {showFollowing  ?
            <FollowingModal showFollowing={showFollowing} setShowFollowing={setShowFollowing} user={user} />
            : null}
        </>
    );
}

export default UserDetailsModal;