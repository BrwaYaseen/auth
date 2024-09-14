import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-600 to-black">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            poppins.className,
            "text-5xl font-semibold text-white drop-shadow-md"
          )}
        >
          🔒 Auth
        </h1>
        <p className="text-slate-300 text-lg">
          Authentication app using Next.js and NextAuth
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
