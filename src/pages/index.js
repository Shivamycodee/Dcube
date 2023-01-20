import { Inter } from '@next/font/google'
import UploadPage from '../pages/uploadPage'



const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
        <UploadPage />
    </>
  );
}
