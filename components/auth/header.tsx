import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className={`${poppins.className} text-3xl font-semibold`}>🔒Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
