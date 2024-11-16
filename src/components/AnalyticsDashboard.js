import React, { useEffect, useState } from 'react';
import { getEmailStatus } from '../api';

const AnalyticsDashboard = () => {
    const [stats, setStats] = useState({ sent: 0, pending: 0, failed: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const response = await getEmailStatus();
            setStats(response.data);
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h2>Analytics Dashboard</h2>
            <ul>
                <li>Emails Sent: {stats.sent}</li>
                <li>Emails Pending: {stats.pending}</li>
                <li>Emails Failed: {stats.failed}</li>
            </ul>
        </div>
    );
};

export default AnalyticsDashboard;
