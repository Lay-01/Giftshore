import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import FloatingChat from './components/layout/FloatingChat.jsx'
import Hero from './components/sections/Hero.jsx'
import Intro from './components/sections/Intro.jsx'
import Story from './components/sections/Story.jsx'
import Catalog from './components/sections/Catalog.jsx'
import Why from './components/sections/Why.jsx'
import Visit from './components/sections/Visit.jsx'
import Contact from './components/sections/Contact.jsx'
import Community from './components/sections/Community.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import Dashboard from './admin/DashboardModern.jsx'

export default function App() {
  if (window.location.pathname === '/admin') return <AdminLogin />
  if (window.location.pathname === '/dashboard') return <Dashboard />

  return <>
    <Navbar />
    <main>
      <Hero />
      <Intro />
      <Story />
      <Catalog />
      <Why />
      <Visit />
      <Contact />
      <Community />
    </main>
    <Footer />
    <FloatingChat />
  </>
}
