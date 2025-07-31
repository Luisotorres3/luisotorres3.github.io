import { FiGithub, FiLinkedin, FiFileText, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Luisotorres3",
    icon: <FiGithub className="text-2xl" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/luisotorres3",
    icon: <FiLinkedin className="text-2xl" />,
  },
  {
    name: "CV",
    url: "/CV_Luis_Soto_Torres_English.pdf",
    icon: <FiFileText className="text-2xl" />,
  },
  {
    name: "Email",
    url: "mailto:luis.soto.torres3@gmail.com",
    icon: <FiMail className="text-2xl" />,
  },
];

export default socialLinks;
