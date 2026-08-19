import { ComoFunciona } from "@/components/home/ComoFunciona"
import { CtaFinal } from "@/components/home/CtaFinal"
import { EncuentraMentor } from "@/components/home/EncuentraMentor"
import { Hero } from "@/components/home/Hero"
import { PilaresValor } from "@/components/home/PilaresValor"

export function HomePage() {
  return (
    <>
      <Hero />
      <ComoFunciona />
      <PilaresValor />
      <EncuentraMentor />
      <CtaFinal />
    </>
  )
}
