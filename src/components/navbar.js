import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buka: false,
            openSearch: false,
            dataSearch: []
        }
    }

    toggle = () => {
        this.setState({ buka: !this.state.buka })
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <img src="https://logodownload.org/wp-content/uploads/2014/10/rip-curl-logo-1-1.png" style={{ width: '80px' }} />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.buka} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Men's</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Women's</NavLink>
                            </NavItem>
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        {/* {
                            this.props.username ?
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret style={{ color: 'gray' }}>
                                        Hello, {this.props.username}
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        {
                                            this.props.role == "user" ?
                                                <>
                                                    <DropdownItem>
                                                        Profile
                                        </DropdownItem>
                                                    <DropdownItem>
                                                        Cart
                                        </DropdownItem>
                                                    <DropdownItem>
                                                        History
                                        </DropdownItem>
                                                </> :
                                                <>
                                                    <DropdownItem>
                                                        Product Management
                                        </DropdownItem>
                                                    <DropdownItem>
                                                        Transaction Management
                                        </DropdownItem>
                                                </>
                                        }
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.props.authLogout}>
                                            Log Out
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                : null
                        } */}
                        <div>{this.props.username}</div>
                        <Link to="/login">
                            <NavbarText>Login</NavbarText>
                        </Link>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapToProps = ({ authReducer }) => {
    return {
        ...authReducer
    }
}

export default connect(mapToProps)(NavbarComp);