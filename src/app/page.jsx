import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Elevate Your Business with Next-Gen Solutions
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At DD Technologies, we turn your vision into reality with innovative
            digital solutions tailored for the modern business landscape.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            Our team of experts specializes in developing robust, scalable web
            and mobile applications, leveraging technologies like React,
            Node.js, and Flutter, to give your business a competitive edge.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            With a focus on user-centric design and seamless performance, we
            deliver experiences that not only meet but exceed your expectations.
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl ">
          <h2 className="text-3xl font-semibold text-neutral-800 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            We are more than just a development team; we are your partners in
            success. From concept to deployment, we work closely with you to
            ensure that your digital products align with your business goals.
          </p>
          <p className="mt-6 text-lg text-neutral-600">
            Whether you need a sleek website, a complex mobile app, or AI-driven
            solutions, we have the expertise to bring your ideas to life.
          </p>
          <p className="mt-6 text-lg text-neutral-600">
            Our commitment to quality and innovation has made us a trusted
            partner for businesses worldwide. Let's create something amazing
            together.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "", }}
      >
        DD Tech exceeded our expectations, streamlining our onboarding and
        delivering innovative solutions without the usual hassles.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
