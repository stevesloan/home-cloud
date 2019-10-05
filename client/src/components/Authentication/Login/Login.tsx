import React, { useState } from 'react'
import { connect } from 'react-redux';
import { login as loginAction } from "../../../store/auth/actions";
import { ThunkDispatch } from 'redux-thunk'
import { AccessToken } from '../../../store/auth/reducers'
import { State as RootState } from '../../../store'
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import './Login.scss'

const Login = (props: Props) => {
  const isLoggedIn = !!props.auth.accessToken;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _handleLogin = () => {
    props.handleLogin(username, password);
  }

  if (isLoggedIn) return (<Redirect to={props.location.from} />);

  return (
    <div>
      <h1>Please Sign in</h1>
      <Form>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={8}>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="input" placeholder="Email or Username" value={username} onChange={(e: any) => { setUsername(e.currentTarget.value) }} />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e: any) => { setPassword(e.currentTarget.value) }} />
              </Form.Group>
              <Button disabled={props.auth.isFetching} onClick={_handleLogin} variant="primary" size="lg" block>
                {(props.auth.isFetching) ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : "Sign in"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div >
  )
}

interface DispatchProps {
  handleLogin: (username: string, password: string) => void
}

interface StateProps {
  auth: AccessToken
  location: { from: { pathname: string } }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    auth: state.auth,
    location: state.router.location.state,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    handleLogin: async (username: string, password: string) => {
      await dispatch(loginAction(username, password))
    }
  }
};

type Props = StateProps & DispatchProps

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);
