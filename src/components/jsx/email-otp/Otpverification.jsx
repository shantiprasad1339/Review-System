import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../footer/footer';
import axios from 'axios';

function Otpverification() {
    const [selectedOtp, setSelectedOtp] = useState(Array(6).fill(''));
    const [timeLeft, setTimeLeft] = useState(300);
    const [canResend, setCanResend] = useState(true);
    const timerId = useRef(null);
    const [data,setdata] = useState()
    const email = "user@example.com"; 
  
    useEffect(() => {
      startTimer();
      return () => clearInterval(timerId.current);
    }, []);
  
    const startTimer = () => {
      timerId.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId.current);
            setCanResend(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    };
  
    const resendOTP = () => {
      if (canResend) {
        alert("New OTP sent!");
        setSelectedOtp(Array(6).fill(''));
        setTimeLeft(120);
        setCanResend(true);
        clearInterval(timerId.current);
        startTimer();
      } else {
        alert("Cannot resend code. Time has expired.");
      }
    };
  
    const verifyOTP = () => {
      const otp = selectedOtp.join('');
      if (otp.length === 6) {
        if (timeLeft > 0) {
          alert(`Verifying OTP: ${otp}`);
        } else {
          alert('OTP has expired. Please request a new one.');
        }
      } else {
        alert('Please enter a 6-digit OTP');
      }
    };
  
    const handleOtpInput = (value, index) => {
      const newOtp = [...selectedOtp];
      newOtp[index] = value.slice(0, 1); // Only allow one digit
      setSelectedOtp(newOtp);
  
      if (value && index < selectedOtp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    };
  
    const handleBackspace = (e, index) => {
      if (e.key === 'Backspace' && !selectedOtp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    };
  
    const formatTime = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      return `(${minutes}:${seconds.toString().padStart(2, '0')})`;
    };
  return (
   <>
   <section className="otp_area">
   <div className="otp-wrapper">
      <div className="container2">
        <h1>OTP Verification</h1>
        <p>Enter the OTP you received to <span id="email">{email}</span></p>
        <div className="otp-input">
          {selectedOtp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="number"
              min="0"
              max="9"
              value={digit}
              onChange={(e) => handleOtpInput(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              required
            />
          ))}
        </div>
        <button onClick={verifyOTP}>Verify</button>
        <div className="resend-text">
          Didn't receive the code?
          <span className="resend-link" onClick={resendOTP}> Resend Code</span>
          <span id="timer" className={timeLeft === 0 ? 'expired' : ''}>{timeLeft > 0 ? formatTime() : 'Code expired'}</span>
        </div>
      </div>
    </div>
   </section>
    <Footer />
   
   </>
  )
}

export default Otpverification
