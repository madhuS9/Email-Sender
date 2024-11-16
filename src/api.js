import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const uploadData = (file) => axios.post(`${API_URL}/emails/upload`, file);
export const sendEmails = (payload) => axios.post(`${API_URL}/emails/send-emails`, payload);
export const getEmailStatus = () => axios.get(`${API_URL}/emails/email-status`);
