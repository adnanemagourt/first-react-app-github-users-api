import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';

import { UserContext } from '../contexts/UserContext';


const AddForm = () => {
    const { addUser } = useContext(UserContext);
    const [login, setLogin] = useState('');
    const [type, setType] = useState('');
    const [site_admin, setSiteAdmin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(login, type, site_admin);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="login"
                    value={login}
                    onChange={(e) => { setLogin(e.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Select onChange={(e) => { setType(e.target.value) }}>
                    <option selected value="User">User</option>
                    <option value="Admin">Admin</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    label="Site Admin"
                    value={site_admin}
                    onChange={(e) => { setSiteAdmin(e.target.checked) }}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Add new User
            </Button>
        </Form>
    );
};

export default AddForm;