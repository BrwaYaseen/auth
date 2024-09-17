import { AlertTriangle } from "lucide-react";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Something Went Wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex items-center justify-center">
        <AlertTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
