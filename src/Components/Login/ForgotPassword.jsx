import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ForgotPassword = () => {
    const [searchParams] = useSearchParams();
    const emailFromQuery = searchParams.get('email') || '';
    const [email, setEmail] = useState(emailFromQuery);
    const navigate = useNavigate();

    const handleResetPassword = () => {
        alert('A reset password link will be sent to your email.');

        window.location.href = 'https://mail.google.com/';
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Reset Your Password</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleResetPassword}
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
