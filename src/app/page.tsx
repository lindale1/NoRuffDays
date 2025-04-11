import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Description from '../components/Description';
import Footer from '../components/Footer'
// Home page view - authenticated
// Need to add bottom description and fix submit in Description component

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Description/>
      <Footer />
    </div>
    
  )
}