import { Button, Container } from "../components/UI";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-ink pt-20 text-white">
      <Container className="text-center">
        <p className="font-serif text-8xl text-gold sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">O endereço que você procurou não existe ou foi movido.</p>
        <Button to="/" className="mt-10">Voltar ao início</Button>
      </Container>
    </section>
  );
}
