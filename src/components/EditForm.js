import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';

import { UserContext } from '../contexts/UserContext';


const EditForm = ({ theUser }) => {
    const { updateUser } = useContext(UserContext);
    const [updatedUser, setUpdatedUser] = useState(theUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdatedUser({
            ...updatedUser,
            url: "https://api.github.com/users/" + updatedUser.login,
            html_url: "https://github.com/" + updatedUser.login,
            followers_url: "https://api.github.com/users/" + updatedUser.login + "/followers",
            following_url: "https://api.github.com/users/" + updatedUser.login + "/following{/other_user}",
            gists_url: "https://api.github.com/users/" + updatedUser.login + "/gists{/gist_id}",
            starred_url: "https://api.github.com/users/" + updatedUser.login + "/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/" + updatedUser.login + "/subscriptions",
            organizations_url: "https://api.github.com/users/" + updatedUser.login + "/orgs",
            repos_url: "https://api.github.com/users/" + updatedUser.login + "/repos",
            events_url: "https://api.github.com/users/" + updatedUser.login + "/events{/privacy}",
            received_events_url: "https://api.github.com/users/" + updatedUser.login + "/received_events"
        });
        updateUser(theUser.id, updatedUser);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="login"
                    value={updatedUser.login}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, login: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    label="Site Admin"
                    checked={updatedUser.site_admin}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, site_admin: e.target.checked }) }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select onChange={(e) => { setUpdatedUser({ ...updatedUser, type: e.target.value }) }}>
                    <option selected={updateUser.type === "User"} value="User">User</option>
                    <option selected={updateUser.type === "Admin"} value="Admin">Admin</option>
                </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">
                Edit User
            </Button>
        </Form>
    );
};

export default EditForm;