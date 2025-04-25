export default function SendMailButton({
  email,
  subject = "Let's Connect!",
  body = "Hi,\n\nI’d love to connect with you regarding a job opportunity.\n\nBest regards,\n[Your Name]",
  buttonLabel = "Contact",
}) {
  const handleSendMail = () => {
    const encodedEmail = encodeURIComponent(email);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <button
      className={`mt-4 px-10 py-2 rounded-full shadow-md transition duration-300 ${"bg-green-500 hover:bg-green-600 text-white"}`}
      onClick={handleSendMail}
    >
      {buttonLabel}
    </button>
  );
}
