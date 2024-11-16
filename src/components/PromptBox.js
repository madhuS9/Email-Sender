import React, { useState } from 'react';

const PromptBox = ({ onSavePrompt }) => {
    const [prompt, setPrompt] = useState("");

    const handleSave = () => {
        onSavePrompt(prompt);
    };

    return (
        <div>
            <textarea
                rows="4"
                placeholder="Enter your email prompt with placeholders..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={handleSave}>Save Prompt</button>
        </div>
    );
};

export default PromptBox;
