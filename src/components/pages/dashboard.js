//this is the dasboard page

import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Dashboard } from '../../components/pages/Dashboard';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';
import { Content } from '../../components/Content';
import { Row } from '../../components/Row';
import { Column } from '../../components/Column';
import { Card } from '../../components/Card';
import { CardHeader } from '../../components/CardHeader';
import { CardBody } from '../../components/CardBody';
import { CardFooter } from '../../components/CardFooter';
import { Table } from '../../components/Table';
import { TableHeader } from '../../components/TableHeader';
import { TableBody } from '../../components/TableBody';
import { TableRow } from '../../components/TableRow';
import { TableData } from '../../components/TableData';
import { TableHead } from '../../components/TableHead';
import { TableFoot } from '../../components/TableFoot';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <Header />
                <Sidebar />
                <Content>
                    <Row>
                        <Column>
                            <Card>
                                <CardHeader>
                                    <h3>Users</h3>
                                </CardHeader>
                                <CardBody>
                                    {user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : ''}
                                    {users.loading && <em> - Loading...</em>}
                                    {users.error && <span className="text-danger"> - ERROR: {users.error}</span>}
                                    {users.items &&
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Id</TableHead>
                                                    <TableHead>First Name</TableHead>
                                                    <TableHead>Last Name</TableHead>
                                                    <TableHead>Username</TableHead>
                                                    <TableHead>Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {users.items.map((user, index) =>
                                                    <TableRow key={user.id}>
                                                        <TableData>{user.id}</TableData>
                                                        <TableData>{user.firstName}</TableData>
                                                        <TableData>{user.lastName}</TableData>
                                                        <TableData>{user.username}</TableData>
                                                        <TableData>
                                                            <a onClick={this.handleDeleteUser(user.id)} className="btn btn-sm btn-danger">Delete</a>
                                                        </TableData>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    }
                                </CardBody>
                                <CardFooter>
                                    <a href="/register" className="btn btn-primary">Register</a>
                                </CardFooter>
                            </Card>
                        </Column>
                    </Row>
                </Content>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const mapDispatchToProps = {
    getAll: userActions.getAll,
    delete: userActions.delete
}

const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

