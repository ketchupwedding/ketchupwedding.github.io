import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import CryptoJS from 'crypto-js';
import React, { useState } from 'react';
import { usePassword } from './PasswordContext';

const PasswordDialog = () => {
    const [open, setOpen] = useState(true);
    const { setPassword } = usePassword();
    const [error, setError] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const password = formData.get('password') as string;

                        if (decrypt("U2FsdGVkX1+xRaYTZkj8G7qN8s5lSMjUNXdbGPmaGVY=", password) !== "password") {
                            setError("Incorrect password");
                        } else {
                            setPassword(password);
                            handleClose();
                        }
                    }
                }}
            >
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        fullWidth
                        variant='standard'
                        error={!!error}
                        helperText={error}
                    />
                </DialogContent>
                <DialogActions>
                    <Button type='submit'>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

// function encrypt(plainText: string, password: string): string {
//     const encrpyted = CryptoJS.AES.encrypt(plainText, password).toString();
//     return encrpyted;
// }

function decrypt(cipherText: string, password: string): string {
    const bytes = CryptoJS.AES.decrypt(cipherText, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
}

export default PasswordDialog;