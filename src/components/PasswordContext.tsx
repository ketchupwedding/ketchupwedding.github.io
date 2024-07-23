import { createContext, useContext, useState } from "react";

interface PasswordContextType {
    password: string;
    setPassword: (password: string) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export const PasswordProvider = ({ children }: { children: React.ReactNode }) => {
    const [password, setPassword] = useState<string>('');
    return (
        <PasswordContext.Provider value={{ password, setPassword }}>
            {children}
        </PasswordContext.Provider>
    );
};

export const usePassword = (): PasswordContextType => {
    const context = useContext(PasswordContext);
    if (context === undefined) {
        throw new Error('usePassword must be used within a PasswordProvider');
    }
    return context;
}