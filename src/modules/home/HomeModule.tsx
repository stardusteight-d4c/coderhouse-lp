import { Home } from "./components"

export const HomeModule = () => {
  return (
    <main className="min-h-screen bg-dark-main overflow-x-hidden w-full max-w-screen">
      <Home.MegaSaleAds />
      <Home.Navbar />
      <Home.Hero />
      <Home.CertifyingCompanies />
      <Home.Showcase />
      <Home.Colleagues />
      <Home.Certificate />
      <Home.Opportunities />
      <Home.CoderBolsa />
      <Home.Plans />
      <Home.Feedbacks />
      <Home.WorldGlobe />
      <Home.Media />
      <Home.MobileApp />
    </main>
  )
}
