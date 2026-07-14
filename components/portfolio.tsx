import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Landing Page para Negocios Locales",
    category: "Landing Page",
    description: "Landing page moderna diseñada para atraer clientes, mostrar servicios y generar leads a través de formularios de contacto.",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sistema de Gestión de Clientes",
    category: "Sistema de Negocio",
    description: "Sistema de negocio personalizado para gestionar pedidos, clientes, servicios y operaciones diarias de tu negocio.",
    image: "https://plus.unsplash.com/premium_photo-1661740422528-611c1ae26094?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gestión de Inventario y Ventas",
    category: "Sistema de Negocio",
    description: "Solución web para el seguimiento de inventario, ventas y desempeño del negocio en un solo panel.",
    image: "https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Nuestro Trabajo
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Una selección de nuestro trabajo reciente que muestra nuestra experiencia en desarrollo web potenciado por IA.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href="#contact"
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50" ${
                projects.length % 2 !== 0 && index === projects.length - 1
                ? "md:col-span-2 md:max-w-lg md:mx-auto w-full"
                : ""
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
