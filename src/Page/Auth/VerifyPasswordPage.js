import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import VerifyPasswordHook from '../../hook/auth/verify-password-hook';
const VerifyPasswordPage = () => {

    const  [code, OnChangeCode, onSubmit] = VerifyPasswordHook()

    return (
        <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ادخل الكود المرسل فى الايميل</label>
                    <input
                        value={code}
                        onChange={OnChangeCode}
                        placeholder="ادخل الكود..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <button onClick={onSubmit} className="btn-login mx-auto mt-2">تاكيد</button>

                </Col>

            </Row>
            <ToastContainer />
        </Container>
    )
}
export default VerifyPasswordPage