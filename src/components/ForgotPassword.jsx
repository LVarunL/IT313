import React from 'react';
import '../style/Profile.css';
import { useState } from 'react';
import { Center } from '@chakra-ui/react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
    const navigate = useNavigate();
    const [password, setPassword] = useState({
        confirmPass: "",
        newPass: "",

      });
    const [gotOTP, setGotOTP] = useState(false);
    const [gotEmail, setGotEmail] = useState(false);
    const [form, setEmail] = useState({
        email: '',
        otp: ''
    });
    const handleChange = (e) => {
        setEmail({ ...form, [e.target.name]: e.target.value })
        setPassword({ ...password, [e.target.name]: e.target.value });
        console.log(form)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Hlel")
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!regex.test(form?.email)) {
            toast.error('Invalid Email')
        }
        else {
            const res = await axios
                .post("http://localhost:7000/forgotPassword", {
                    email: form.email,
                })
            toast.success('Otp sent')
            setGotEmail(true)
        }
    }
    const handleOTP = async (e) => {
        e.preventDefault();
        if (!form.otp) {
            toast.error("OTP is required");
        } else {
            try {
                const res = await axios.post("http://localhost:7000/otp_verification", {
                    email: form.email,
                    otp: form.otp
                });
                const data = res.status;
                if (data === 200) {

                    setGotOTP(true)
                }
                else if (data === 288) {
                    toast.error("Incorrect OTP. Please enter again.")
                }
            } catch (err) {
                if (err.response) {
                    // ✅ log status code here
                    console.log(err.response.status);
                    console.log(err.message);
                    console.log(err.response.headers); // 👉️ {... response headers here}
                    console.log(err.response.data); // 👉️ {... response data here}
                }
            }

        }
    }
    const handlePass = async (e) => {
        e.preventDefault();
         if(!password?.newPass){
            toast.error('New Password  is required')
          }
          else if(password?.newPass.length<4){
            toast.error('New Password  of atleast 4 characters is required')
          }
          else if(password?.newPass.length>10){
            toast.error('New Password  of atmost 10 characters is required')
          }
          else if(password.newPass != password.confirmPass){
            toast.error('New password and confirm password should be same')
          }
          else{
            try{
                const res = await axios.post("http://localhost:7000/updatePassword", {
                    email: form.email,
                    newPass: password.newPass
                });

                if(res.status === 200){
                    toast.success('Password changed succesfully')
                    setInterval(()=>{
                        navigate('/')
                      },1000)
                }
                
            }
            catch(err){
                if (err.response) {
                    // ✅ log status code here
                    console.log(err.response.status);
                    console.log(err.message);
                    console.log(err.response.headers); // 👉️ {... response headers here}
                    console.log(err.response.data); // 👉️ {... response data here}
                }
            }
          }
    }
    return (
        <div className="forgotPW">
            <div className='r_cp'>
                FORGOT PASSWORD

            </div>
            <ToastContainer />
            <div className='rc'>
                <div className='right_name1'>
                    {!gotEmail && <>
                        <div className='rmain1'>
                            <div className='r1' align='center'>Email ID</div>
                            <input
                                type="email"
                                className="form-control mt-2"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <button className='r_profile_btn2 mt-3' onClick={handleSubmit}>
                            Get OTP
                        </button>
                    </>}

                    {gotEmail && !gotOTP && <>
                        <div className='rmain1'>
                            <div className='r1'>Enter OTP</div>
                            <input
                                type="number"
                                className="form-control mt-2"
                                name="otp"
                                placeholder="Enter OTP"
                                onChange={handleChange}
                            />
                        </div>
                        <button className='r_profile_btn2' onClick={handleOTP}>
                            Submit
                        </button>
                    </>}


                    {gotOTP && <>
                        <div className='rmain1'>
                            <div className='r1'>New Password</div>
                            <input
                                type="password"
                                className="form-control"
                                name="newPass"
                                placeholder="New Password"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='rmain1'>
                            <div className='r1'>Confirm Password</div>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPass"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                        </div>
                        <button className='r_profile_btn2' onClick={handlePass}>
                            Confirm
                        </button>
                    </>}

                </div>

            </div>
        </div>

    )

}

export default Forgotpassword;