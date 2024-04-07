import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <>
      <header className="border-b py-4">
        <div className="container">
          <h1 className="font-semibold text-xl tracking-tight">
            {siteConfig.title}
          </h1>
        </div>
      </header>
      <main className="flex-1 pt-4 container space-y-8"></main>
    </>
  )
}
