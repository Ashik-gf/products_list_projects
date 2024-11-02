import React from 'react';
import { toast } from 'react-toastify';

const Error = ({ error }) => {
    toast.error(error.message)
    return (
        <div>
            This is error {error.message}
        </div>
    )
}

export default Error