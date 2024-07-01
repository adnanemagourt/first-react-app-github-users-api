import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from "./EditForm";
import ConfirmationModal from './ConfirmationModal';
import UserDetailsModal from "./UserDetailsModal";

const User = ({ user }) => {

    const { deleteUser } = useContext(UserContext);

    const [show, setShow] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [user]);

    const handleDeleteConfirmation = () => {
        deleteUser(user.id);
        setShowConfirmationModal(false);
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    };


    return (
        <>
            <td>
                <img style={imageStyle} src={user.avatar_url} alt={user.login} className="avatar" />
            </td>
            <td>{user.login}</td>
            <td>{user.html_url}</td>
            <td>{user.type}</td>
            <td>{user.site_admin ? "true" : "false"}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => setShowConfirmationModal(true)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Details
                        </Tooltip>
                    }>
                    <button onClick={() => setShowDetails(true)} className="btn text-info btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Details">&#xE88E;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theUser={user} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <ConfirmationModal
                show={showConfirmationModal}
                onHide={() => setShowConfirmationModal(false)}
                onConfirm={handleDeleteConfirmation}
                message={`Do you want to delete user ${user.login}?`}
            />



            <UserDetailsModal showDetails={showDetails} setShowDetails={setShowDetails} user={user} />

            {/* <Modal show={showDetails} onHide={() => setShowDetails(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        User Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> */}

            {/* <h3>Login: {user.login}</h3>
                    <h3>Id: {user.id}</h3>
                    <h3>Node Id: {user.node_id}</h3>
                    <h3>Avatar: {user.avatar_url}</h3>
                    <h3>Gravatar Id: {user.gravatar_id}</h3>
                    <h3>HTML Url: {user.html_url}</h3>
                    <h3>Followers: {user.followers_url}</h3>
                    <h3>Following: {user.following_url}</h3>
                    <h3>Gists: {user.gists_url}</h3>
                    <h3>Starred: {user.starred_url}</h3>
                    <h3>Subscriptions: {user.subscriptions_url}</h3>
                    <h3>Organizations: {user.organizations_url}</h3>
                    <h3>Repos: {user.repos_url}</h3>
                    <h3>Events: {user.events_url}</h3>
                    <h3>Received Events: {user.received_events_url}</h3>
                    <h3>Type: {user.type}</h3>
                    <h3>Site Admin: {user.site_admin ? 'Yes' : 'No'}</h3>
 */}
            {/* <label>Login: <input type="text" value={user.login} disabled /></label>
                    <label>Id: <input type="text" value={user.id} disabled /></label>
                    <label>Node Id: <input type="text" value={user.node_id} disabled /></label>
                    <label>Avatar: <input type="text" value={user.avatar_url} disabled /></label>
                    <label>Gravatar Id: <input type="text" value={user.gravatar_id} disabled /></label>
                    <label>HTML Url: <input type="text" value={user.html_url} disabled /></label>
                    <label>Followers: <input type="text" value={user.followers_url} disabled /></label>
                    <label>Following: <input type="text" value={user.following_url} disabled /></label>
                    <label>Gists: <input type="text" value={user.gists_url} disabled /></label>
                    <label>Starred: <input type="text" value={user.starred_url} disabled /></label>
                    <label>Subscriptions: <input type="text" value={user.subscriptions_url} disabled /></label>
                    <label>Organizations: <input type="text" value={user.organizations_url} disabled /></label>
                    <label>Repos: <input type="text" value={user.repos_url} disabled /></label>
                    <label>Events: <input type="text" value={user.events_url} disabled /></label>
                    <label>Received Events: <input type="text" value={user.received_events_url} disabled /></label>
                    <label>Type: <input type="text" value={user.type} disabled /></label>
                    <label>Site Admin: <input type="text" value={user.site_admin ? 'Yes' : 'No'} disabled /></label> */}
            {/* </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetails(false)}>Close</Button>
                </Modal.Footer>
            </Modal> */}


        </>
    );
}

export default User;
