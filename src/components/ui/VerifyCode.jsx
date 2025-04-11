import { useState, useRef, useEffect } from "react";

export default function VerificationCode({ onCodeComplete }) {
    const [code, setCode] = useState(["", "", "", "", ""]);
    const inputsRef = useRef([]);

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus(); 
        }
    }, []);

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; 
    
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    
        if (value && index < code.length - 1) {
            inputsRef.current[index + 1].focus(); 
        }
    
        if (newCode.join("").length === 5) {
            onCodeComplete(newCode.join("")); 
        }
    };
    
    const handlePaste = (e) => {
        const pasted = e.clipboardData.getData("Text").trim();
        if (/^\d{5}$/.test(pasted)) {
            const newCode = pasted.split("");
            setCode(newCode);
            onCodeComplete(pasted);
            newCode.forEach((digit, idx) => {
                if (inputsRef.current[idx]) inputsRef.current[idx].value = digit;
            });
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div style={styles.codeContainer}>
            {code.map((digit, index) => (
                <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => inputsRef.current[index].select()}
                onPaste={index === 0 ? handlePaste : undefined}
                style={styles.codeInput}
            />
            ))}
        </div>
    );
}

const styles = {
    codeContainer: {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "0px",
    },
    codeInput: {
        width: "50px",
        height: "60px",
        fontSize: "20px",
        textAlign: "center",
        border: "2px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s",
    },
};
