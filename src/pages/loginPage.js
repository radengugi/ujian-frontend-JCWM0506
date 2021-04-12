import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { URL_API } from '../helper'
import { authLogin } from '../actions/authActions'
import { Redirect } from 'react-router';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            alertType: '',
            message: '',
            passType: "password"
        }
    }

    onBtnRegis = () => {
        let username = this.inUsername.value
        let email = this.inEmail.value
        let password = this.inPassword.value
        let confPassword = this.inConfPassword.value
        let role = "user"

        if (username == '' || email == '' || password == '' || confPassword == '') {
            this.setState({ alert: !this.state.alert, message: 'Completed Form !', alertType: 'danger' })
            setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
        } else {
            if (email.includes('@')) {
                axios.get(URL_API + `/users?email=${email}`)
                    .then(res => {
                        if (res.data.length > 0) {
                            this.setState({ alert: !this.state.alert, message: 'Email already exist !', alertType: 'warning' })
                            setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
                        } else {
                            axios.post(URL_API + '/users', {
                                username, email, password, confPassword, role
                            })
                                .then(res => {
                                    this.setState({ alert: !this.state.alert, message: 'Registration Success', alertType: 'success' })
                                    setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
                                    this.inUsername.value = null
                                    this.inEmail.value = null
                                    this.inPassword.value = null
                                    this.inConfPassword.value = null
                                })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .catch(err => {
                        console.log('ERROR Regis :', err)
                    })
            } else {
                setTimeout(() => this.setState({ alert: !this.state.alert, message: '', alertType: '' }), 3000)
                this.setState({ alert: !this.state.alert, message: 'Email Wrong', alertType: 'warning' })
            }
        }
    }

    onBtnLogin = () => {
        // this.props.authLogin(this.email.value, this.password.value)
        axios.get(URL_API + `/users?email=${this.inEmail.value}&password=${this.inPassword.value}`)
            .then(res => {
                if (res.data.length > 0) {
                    this.props.authLogin(res.data[0])
                    localStorage.setItem('tkn_id', res.data[0].id)
                } else {
                    this.setState({ alert: !this.state.alert, message: 'Account Not Available', alertType: 'warning' })

                }
            })
            .catch(err => {
                console.log('Login Error :', err)
            })
    }

    render() {
        if (this.props.id) {
            return <Redirect to="/" />
        }
        return (
            <div className="container-fluid">
                <h3 className="text-center">Login Menu</h3>
                <div className="container my-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="col-6" style={{ border: '1px solid black' }}>
                        <h4>Sign In</h4>
                        <Form>
                            <FormGroup>
                                <Label for="textEmail">Email</Label>
                                <Input type="email" id="textEmail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="textPassword">Password</Label>
                                <Input type="password" id="textPassword" />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" onClick={this.onBtnLogin} block>Sign In</Button>{' '}
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="col-6 mx-3" style={{ border: '1px solid black' }}>
                        <h4>Sign Up</h4>
                        <Form>
                            <FormGroup>
                                <Label for="textUsername">Username</Label>
                                <Input type="text" id="textUsername" innerRef={elemen => this.inUsername = elemen} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="textEmail">Email</Label>
                                <Input type="email" id="textEmail" innerRef={elemen => this.inEmail = elemen} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="textPassword">Password</Label>
                                <Input type="password" id="textPassword" innerRef={elemen => this.inPassword = elemen} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="textConfPassword">Confirm Password</Label>
                                <Input type="password" id="textConfPassword" innerRef={elemen => this.inConfPassword = elemen} />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" onClick={this.onBtnRegis} block>Sign Up</Button>{' '}
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapToProps = ({ authReducer }) => {
    return {
        ...authReducer
    }
}

export default connect(mapToProps, { authLogin })(LoginPage);