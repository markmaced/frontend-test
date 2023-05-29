'use client';

import PromoBanner from '@/components/promoBanner'
import Header from '@/components/header'
import Catalogo from '@/components/catalogo'
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <PromoBanner/>
      <Header/>
      <Catalogo/>
      <Footer/>
    </main>
  )
}
