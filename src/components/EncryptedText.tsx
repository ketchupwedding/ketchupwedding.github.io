import { useEffect, useState } from "react";
import { usePassword } from "./PasswordContext";
import CryptoJS from 'crypto-js';

interface EncryptedTextProps {
    text: string;
}

const EncryptedText: React.FC<EncryptedTextProps> = ({ text }) => {
    const { password } = usePassword();
    const [decryptedText, setDecryptedText] = useState<string>('');

    useEffect(() => {
        try {
            const bytes = CryptoJS.AES.decrypt(text, password);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            setDecryptedText(decrypted);
        } catch (e) {
            setDecryptedText('Invalid password');
        }
    }, [password]);

    return (
        <div>
            {decryptedText}
        </div>
    );
};

export default EncryptedText;