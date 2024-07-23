import { useEffect, useState } from "react";
import { usePassword } from "./PasswordContext";
import CryptoJS from 'crypto-js';

interface EncryptedTextProps {
    text: string;
}

const EncryptedText: React.FC<EncryptedTextProps> = ({ text }) => {
    const { password } = usePassword();
    const [decryptedText, setDecryptedText] = useState<string>('TEXT HIDDEN: INCORRECT PASSWORD');

    useEffect(() => {
        try {
            const bytes = CryptoJS.AES.decrypt(text, password);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            setDecryptedText(decrypted);
        } catch (e) {
            setDecryptedText('TEXT HIDDEN: INCORRECT PASSWORD');
        }
    }, [password]);

    return (
        <div>
            {!!decryptedText ? decryptedText : 'TEXT HIDDEN: INCORRECT PASSWORD'}
        </div>
    );
};

export default EncryptedText;