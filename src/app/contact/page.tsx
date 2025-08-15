import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form
        action="https://formspree.io/f/your-id" // replace with your endpoint
        method="POST"
        className="mt-6 grid gap-4 md:max-w-xl"
      >
        <Input name="name" placeholder="Your name" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Textarea name="message" placeholder="Message" rows={6} required />
        <Button type="submit" className="w-fit">Send</Button>
      </form>
    </section>
  );
}
