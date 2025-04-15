import Header from '@/components/Header';
import WelcomeUser from '../../components/WelcomeUser';
import Footer from '../../components/Footer'
// Home page view - authenticated

export default function Home() {
  return (
    <div>
      <Header />
      <WelcomeUser />
      <Footer />
    </div>
    
  )
}