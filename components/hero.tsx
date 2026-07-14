import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
                           linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-accent">
          <Sparkles className="h-4 w-4" />
          <span>Desarrollo Potenciado por IA</span>
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Construimos sitios web a la{" "}
          <span className="text-accent">velocidad del pensamiento</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Transforma tu visión en sitios web impresionantes y de alto rendimiento con nuestro proceso de desarrollo potenciado por IA. Del concepto al lanzamiento en tiempo récord.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="gap-2">
            <Link href="#contact">
              Inicia Tu Proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#portfolio">Ver Nuestro Trabajo</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-5 border-t border-border pt-10 sm:grid-cols-2">
          {[
            { value: "3x", label: "Desarrollo Más Rápido" },
            { value: "24/7", label: "Soporte Disponible" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
