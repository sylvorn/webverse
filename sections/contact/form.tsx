import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Form() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Name
        </Label>
        <Input id="name" placeholder="Enter your name" type="text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Message
        </Label>
        <Textarea id="message" placeholder="Enter your message" />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
