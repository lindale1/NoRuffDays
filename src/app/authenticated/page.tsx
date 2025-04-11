import AuthHeader from '../../components/AuthHeader';
import WelcomeUser from '../../components/WelcomeUser';
import Footer from '../../components/Footer'
// Home page view - authenticated

export default function Home() {
  return (
    <div>
      <AuthHeader />
      <WelcomeUser />
      <Footer />
    </div>
    
  )
}