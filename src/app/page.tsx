import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Content from '../components/Content';
import Description from '../components/Description';
// Content will have dog image + title
// Welcome will have sign up button + description

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Description/>
    </div>
    
  )
}