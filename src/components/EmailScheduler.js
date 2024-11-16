import React, { useState } from 'react';

const EmailScheduler = ({ onSchedule }) => {
    const [scheduleTime, setScheduleTime] = useState("");
    const [throttleRate, setThrottleRate] = useState(10);

    const handleSchedule = () => {
        onSchedule({ scheduleTime, throttleRate });
    };

    return (
        <div>
            <input
                type="datetime-local"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
            />
            <input
                type="number"
                value={throttleRate}
                onChange={(e) => setThrottleRate(e.target.value)}
                placeholder="Emails per minute"
            />
            <button onClick={handleSchedule}>Schedule Emails</button>
        </div>
    );
};

export default EmailScheduler;
