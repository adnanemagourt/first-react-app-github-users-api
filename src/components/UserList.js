import { useContext, useState, useEffect } from 'react';

import User from './User';
import { UserContext } from '../contexts/UserContext';
import { Alert, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import AddForm from './AddForm';
import Pagination from './Pagination';

const UserList = () => {

    const { sortedUsers } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState(sortedUsers);

    const searchResults = sortedUsers.filter((user) => {
        return user.login.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    //     if (searchTerm !== '') {
    //         const newUserList = sortedUsers.filter((user) => {
    //             return user.login.toLowerCase().includes(searchTerm.toLowerCase());
    //         });
    //         setSearchResults(newUserList);
    //     } else {
    //         setSearchResults(sortedUsers);
    //     }
    // };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        };
    }, [sortedUsers]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = searchResults.slice(indexOfFirstUser, indexOfLastUser);
    const totalPagesNum = Math.ceil(searchResults.length / usersPerPage);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Users</b></h2>
                    </div>

                    <div className="col-sm-6 d-flex justify-content-end">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </InputGroup>
                        <Button onClick={handleShow} className="btn btn-success ml-2" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New User</span></Button>
                    </div>



                    {/* <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New User</span></Button>
                    </div> */}
                </div>
            </div>

            <Alert show={showAlert} variant='success'>
                User list updated successfully!
            </Alert>

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
                        currentUsers.map(user => (
                            <tr key={user.id}>
                                <User user={user} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Pagination pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsers={currentUsers.length}
                allUsers={searchResults.length} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}


export default UserList;
