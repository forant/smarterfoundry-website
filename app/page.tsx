import { Hero } from '@/components/landing/hero'
import { Products } from '@/components/landing/products'
import { Company } from '@/components/landing/company'
import { Partnerships } from '@/components/landing/partnerships'
import { Contact } from '@/components/landing/contact'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Company />
      <Partnerships />
      <Contact />
      <Footer />
    </main>
  )
}
