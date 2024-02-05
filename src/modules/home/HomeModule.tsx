import { Home } from "./components"

export const HomeModule = () => {
  return (
    <main className="min-h-screen bg-dark-main w-screen">
      <Home.MegaSaleAds />
      <Home.Navbar />
    </main>
  )
}
