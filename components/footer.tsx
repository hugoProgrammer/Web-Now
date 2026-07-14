import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Desarrollo Web", href: "#services" },
    { name: "Diseño UI/UX", href: "#services" },
    { name: "Sistemas de Negocio", href: "#services" }
  ],
  company: [
    { name: "Sobre Mi", href: "/about" },
    { name: "Contacto", href: "/#contact" },
    { name: "Portafolio", href: "/#portfolio" },
    { name: "Servicios", href: "/#services" }
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/web_now.cr?igsh=NTJsczYyNDVyZ3pi&utm_source=qr" },
    { name: "Facebook", href: "https://www.facebook.com/share/1Dh57YQPJd/?mibextid=wwXIfr" },
    { name: "WhatsApp", href: "#" },
  ],
}

export function Footer() {
  
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-7 w-7 text-accent" />
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Web Now
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Desarrollo web potenciado por IA para equipos ambiciosos. Construye más rápido, lanza más inteligente.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Servicios</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Redes Sociales</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Web Now. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
