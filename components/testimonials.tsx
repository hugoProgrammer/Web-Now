import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Web Now transformó nuestro sitio web anticuado en una máquina moderna de alta conversión. El enfoque potenciado por IA hizo que lanzáramos 3 veces más rápido de lo esperado.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "El equipo de Web Now superó nuestras expectativas. Su atención al detalle y la optimización de rendimiento marcaron una gran diferencia en nuestras tasas de conversión.",
    author: "Marcus Rodriguez",
    role: "Fundador, GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Trabajar con Web Now cambió las reglas del juego. Entendieron nuestra visión de inmediato y construyeron exactamente lo que necesitábamos con una velocidad y precisión increíbles.",
    author: "Emily Watson",
    role: "Directora de Marketing, ScaleUp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Testimonios
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Con la confianza de equipos ambiciosos
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Descubre lo que nuestros clientes dicen sobre trabajar con Web Now.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
