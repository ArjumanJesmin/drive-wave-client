"use client";
import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const ActionSubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="my-4 w-full"
      type="submit"
      radius="none"
      color="primary"
      variant="faded"
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
};

export default ActionSubmitButton;
