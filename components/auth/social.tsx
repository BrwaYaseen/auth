"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button onClick={() => {}} size="lg" className="w-full" variant="outline">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button onClick={() => {}} size="lg" className="w-full" variant="outline">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
