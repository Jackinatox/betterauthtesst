"use server"

import { auth } from '@/utils/auth';
import RegisterComponent from './Register';
import { headers } from 'next/headers';

async function Register() {
    const data = await auth.api.setRole({
    body: {
        userId: "user-id",
        role: "admin", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
});


    return (
        <div>
            <RegisterComponent />
        </div>
    );
};

export default Register;