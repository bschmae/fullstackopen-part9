import { useState } from "react"

const Notification = ({ message }: {message: string}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
};

export default Notification;