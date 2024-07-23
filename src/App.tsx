// import CryptoJS from 'crypto-js';
import { Container } from '@mui/material';
import { usePassword } from './components/PasswordContext';
import PasswordDialog from './components/PasswordDialog';
import WeddingHero from './components/WeddingHero';
import WeddingRsvp from './components/WeddingRsvp';
import WeddingTimeline from './components/WeddingTimeline';
import WeddingTransportInfo from './components/WeddingTransportInfo';
import WeddingFaqs from './components/WeddingsFaqs';

function App() {
  const { password } = usePassword();

  if (!password) {
    return <PasswordDialog />;
  }

  return (
    <>
      <WeddingHero />
      <Container>
        <WeddingTimeline />
        <WeddingTransportInfo />
        <WeddingFaqs />
        <WeddingRsvp />
      </Container>
    </>
  )
}

// function encrypt(plainText: string, password: string): string {
//   const encrpyted = CryptoJS.AES.encrypt(plainText, password).toString();
//   return encrpyted;
// }

export default App
