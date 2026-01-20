import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Headphones, Calendar } from "lucide-react";

export function FinalCta() {
  return (
    <section id="demo" className="scroll-mt-24 py-16 bg-zinc-900">
      <Container className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Your calls deserve better than voicemail.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Hear what ClearDesk sounds like, then book a demo to see it in action.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg" className="h-14 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 px-8 font-semibold">
            <a href="https://calendly.com/jose-cleardesk/30-min-meeting" target="_blank" className="gap-2">
              <Calendar className="h-5 w-5" />
              Book a demo
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800 px-8">
            <a href="#examples" className="gap-2">
              <Headphones className="h-5 w-5" />
              Hear call examples
            </a>
          </Button>
        </div>

        <p className="text-center text-sm text-zinc-500">
          Free 30-min call. No commitment.
        </p>
      </Container>
    </section>
  );
}
