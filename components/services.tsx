import { Code2, Palette, Rocket, Bot, Shield, Gauge } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Desarrollo Potenciado por IA",
    description: "Aprovechamos herramientas de IA de vanguardia para acelerar el desarrollo, automatizar tareas repetitivas y entregar código perfecto.",
  },
  {
    icon: Palette,
    title: "Diseño Web Personalizado",
    description: "Diseños impresionantes y a medida adaptados a la identidad de tu marca. Cada píxel pensado para el máximo impacto y conversión.",
  },
  {
    icon: Code2,
    title: "Desarrollo Full-Stack",
    description: "Desarrollo integral con React, Next.js y frameworks modernos. Arquitectura escalable construida para crecer.",
  },
  {
    icon: Rocket,
    title: "Optimización de Rendimiento",
    description: "Tiempos de carga ultrarrápidos e interacciones fluidas. Optimizamos cada aspecto para la mejor experiencia de usuario.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    description: "Prácticas de seguridad de nivel empresarial integradas en cada proyecto. Protege tus datos y a tus usuarios con confianza.",
  },
  {
    icon: Gauge,
    title: "Soporte Continuo",
    description: "Monitoreo, actualizaciones y mejoras continuas. Te acompañamos en cada paso después del lanzamiento.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Lo Que Ofrecemos
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas para lanzar más rápido
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Servicios integrales de desarrollo web potenciados por IA para entregar resultados excepcionales en tiempo récord.
          </p>
        </div>

        {/* Services grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
