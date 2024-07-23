// import CryptoJS from 'crypto-js';
import EncryptedText from './components/EncryptedText';
import { usePassword } from './components/PasswordContext';
import PasswordDialog from './components/PasswordDialog';

function App() {
  const { password } = usePassword();

  if (!password) {
    return <PasswordDialog />;
  }

  return (
    <>
      <EncryptedText text='U2FsdGVkX1/4unp9awIHKnKqx25D3NSGJJ9Pj9gDftU=' />
    </>
  )
}

// function encrypt(plainText: string, password: string): string {
//   const encrpyted = CryptoJS.AES.encrypt(plainText, password).toString();
//   return encrpyted;
// }

export default App
