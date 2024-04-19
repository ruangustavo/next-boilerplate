import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <>
      <header className="border-b py-4">
        <div className="container">
          <h1 className="text-xl font-semibold tracking-tight">
            {siteConfig.title}
          </h1>
        </div>
      </header>
      <main className="container flex-1 space-y-8 pt-4"></main>
    </>
  )
}
