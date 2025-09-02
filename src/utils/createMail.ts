export const mail = (name: string, email: string, message: string) => {
  const subject = `📩 New Contact Message from ${name}`;

  const body = `Dear Admin,

You have received a new message from your portfolio contact form:

-----------------------------------
Name: ${name}
Email: ${email}
Message: 
${message}
-----------------------------------

Please reply to ${email} if needed.

Best regards,  
Your Portfolio Website
`;

  return { subject, body };
};
