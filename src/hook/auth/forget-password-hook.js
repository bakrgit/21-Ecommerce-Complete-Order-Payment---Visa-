import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, forgetPassword, loginUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom'
import notify from '../useNotifaction';


const ForgetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)


    const OnChangeEmail = (e) => {
        
        setEmail(e.target.value)
    }

    const onSubmit = async () => {
        if (email === "") {
            notify("من فضلك ادخل الايميل", "error")
            return
        }
        localStorage.setItem("user-email" ,email)
        setLoading(true)
        await dispatch(forgetPassword({
            email,
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.forgetPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.status === "Success") {
                    notify("تم ارسال الكود للايميل بنجاح", "success")
                    setTimeout(() => {
                        navigate("/user/verify-code")
                    }, 1000);
                }
                if (res.data.status === "fail") {
                    notify("هذا الحساب غير موجود لدينا", "error")
                }
            }
        }
    }, [loading])

    return [OnChangeEmail, email, onSubmit]
}

export default ForgetPasswordHook