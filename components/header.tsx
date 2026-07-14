"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Servicios", href: "/#services" },
  { name: "Portafolio", href: "/#portfolio" },
  { name: "Contacto", href: "/#contact" },
  { name: "Sobre Mi", href: "/about"}
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
              <Image src="/logo.png" alt="Web Now" width={70} height={70} priority />
              <span>Web Now</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-foreground transition-all hover:bg-secondary active:scale-95"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild>
              <Link href="#contact">Comenzar</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - full screen overlay (outside header to avoid stacking issues) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Navegación móvil"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Link 
                href="/" 
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/logo.png" alt="Web Now" width={70} height={70} priority />
                <span>Web Now</span>
              </Link>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/50 text-foreground transition-all hover:bg-secondary active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-5 text-3xl font-medium text-foreground transition-colors hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full h-14 text-lg font-medium"
                >
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    Comenzar
                  </Link>
                </Button>
              </div>
            </nav>

            {/* Footer */}
            <div className="px-6 py-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Desarrollo Web Potenciado por IA
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
