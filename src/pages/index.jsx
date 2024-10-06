import React, { useState, useEffect } from "react";
import "../cssFiles/index.css";
import HtmlIcon from "../techLogos/html-5.png";
import CssIcon from "../techLogos/css.png";
import JsIcon from "../techLogos/js.png";
import ReactIcon from "../techLogos/react.png";
import BootstrapIcon from "../techLogos/bootstrap.png";
import RBootIcon from "../techLogos/react-bootstrap.webp";
import PythonIcon from "../techLogos/python.png";
import CIcon from "../techLogos/c.png";
import CppIcon from "../techLogos/cpp.png";
import FirebaseIcon from "../techLogos/Firebase.png";

const roles = ["Web Developer", "Programmer"];

const MainPage = () => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = 150;
    const deletingSpeed = 100;

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            if (!isDeleting && charIndex < currentRole.length) {
                // Typing the current word
                setDisplayText((prev) => prev + currentRole.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                // Deleting the current word
                setDisplayText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (charIndex === currentRole.length) {
                // Start deleting after typing is done
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (charIndex === 0 && isDeleting) {
                // Move to the next word after deleting
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    const icons = [
        { src: HtmlIcon, className: "html-icon" },
        { src: CssIcon, className: "css-icon" },
        { src: JsIcon, className: "js-icon" },
        { src: ReactIcon, className: "react-icon" },
        { src: BootstrapIcon, className: "bootstrap-icon" },
        { src: RBootIcon, className: "rboot-icon" },
        { src: PythonIcon, className: "python-icon" },
        { src: CIcon, className: "c-icon" },
        { src: CppIcon, className: "cpp-icon" },
        { src: FirebaseIcon, className: "firebase-icon" },
    ];

    return (
        <div className="banner">
            <div className="content">
                <h1>
                    Hi, <br />
                    I'm <span className="highlight">Harshit Aggarwal</span>
                </h1>
                <h2>
                    I'm a <span className="loading highlight">{displayText}</span>
                </h2>
            </div>
            <div className="model-container">
                <div className="model"></div>
                <div className="slider" style={{ "--quantity": icons.length }}>
                    {icons.map((icon, index) => (
                        <div key={index} className={`item ${icon.className}`} style={{ "--position": index + 1 }}>
                            <img src={icon.src} alt={`Tech Icon ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
