const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.uploadData = async (req, res) => {
    res.status(200).send("Data uploaded successfully");
};

exports.sendEmails = async (req, res) => {
    const { prompt, schedule } = req.body;
    try {
        const msg = {
            to: 'recipient@example.com',
            from: 'your-email@example.com',
            subject: 'Custom Subject',
            text: prompt,
        };
        await sgMail.send(msg);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send email" });
    }
};

exports.getEmailStatus = (req, res) => {
    const emailData = [
        { recipient: "recipient1@example.com", subject: "Subject 1", status: "Sent" },
        { recipient: "recipient2@example.com", subject: "Subject 2", status: "Pending" },
        { recipient: "recipient3@example.com", subject: "Subject 3", status: "Failed" },
    ];
    res.json(emailData);
};

