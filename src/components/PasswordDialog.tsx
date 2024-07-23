import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import { usePassword } from './PasswordContext';

const PasswordDialog = () => {
    const [open, setOpen] = useState(true);
    const { setPassword } = usePassword();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const password = formData.get('password') as string;
                        setPassword(password);
                        handleClose();
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button type='submit'>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PasswordDialog;