import React, { useState } from 'react';
import DataUploader from './components/DataUploader';
import PromptBox from './components/PromptBox';
import EmailScheduler from './components/EmailScheduler';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import EmailTable from './components/EmailTable';
import { sendEmails } from './api';

const App = () => {
    const [prompt, setPrompt] = useState("");
    const [schedule, setSchedule] = useState(null);

    const handlePromptSave = (newPrompt) => {
        setPrompt(newPrompt);
    };

    const handleSchedule = (scheduleData) => {
        setSchedule(scheduleData);
        sendEmails({ prompt, schedule: scheduleData });
    };

    return (
        <div>
            <h1>Email Sender App</h1>
            <DataUploader />
            <PromptBox onSavePrompt={handlePromptSave} />
            <EmailScheduler onSchedule={handleSchedule} />
            <AnalyticsDashboard />
            <EmailTable />
        </div>
    );
};

export default App;
