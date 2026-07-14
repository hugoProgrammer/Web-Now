import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
   return(
    <>
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-32">
        <h1 className="text-4x1 font-bold text-foreground sm:text-5x1">
        Sobre Mi
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
             Soy Hugo, estudiante de Ingeniería Informática y desarrollador
          apasionado por la tecnología. Creé Web Now para ayudar a negocios
          a tener presencia digital moderna, rápida y profesional.
        </p>
         <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Ayudo a emprendedores, profesionales y pequeñas empresas a tener una presencia digital profesional mediante sitios web modernos, rápidos y adaptables a cualquier dispositivo. Cada proyecto se desarrolla pensando en la experiencia del usuario, el rendimiento y el crecimiento de tu negocio.
        </p>
        <p className= "mt-4 text-lg leading-8 text-muted-foreground">
          Una página web suele ser la primera impresión que un cliente tiene de tu negocio. Mi misión es convertir esa primera impresión en una oportunidad, desarrollando sitios web atractivos, funcionales y optimizados para ofrecer una experiencia profesional desde el primer momento.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Combino mi experiencia en tecnología con herramientas de inteligencia artificial para desarrollar soluciones modernas de forma más ágil y eficiente. Esto me permite reducir tiempos de desarrollo sin comprometer la calidad, ofreciendo productos funcionales, bien diseñados y adaptados a las necesidades de cada cliente.
        </p>
      </main>
      <Footer />
    </>
   )
   
}