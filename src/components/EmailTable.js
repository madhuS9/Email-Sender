import React, { useEffect, useState } from 'react';
import { getEmailStatus } from '../api';

const EmailTable = () => {
    const [emails, setEmails] = useState([]);

    // Fetch email status on component load
    useEffect(() => {
        const fetchEmailStatus = async () => {
            try {
                const response = await getEmailStatus();
                setEmails(response.data);
            } catch (error) {
                console.error("Error fetching email status:", error);
            }
        };
        fetchEmailStatus();
    }, []);

    return (
        <div>
            <h2>Email Status Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Recipient</th>
                        <th>Subject</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email, index) => (
                        <tr key={index}>
                            <td>{email.recipient}</td>
                            <td>{email.subject}</td>
                            <td>{email.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmailTable;
