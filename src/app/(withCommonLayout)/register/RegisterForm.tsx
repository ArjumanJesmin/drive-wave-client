"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpUser } from "../action/authAction";
import { createRef, useEffect } from "react";
import { toast } from "sonner";
import ActionSubmitButton from "../submitButton/ActionSubmitButton";

const RegisterForm = () => {
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(signUpUser, null);

  useEffect(() => {
    if (state && state.success) {
      toast.success("User Sign Up Successfully!");
      ref.current?.reset();
    } else {
      toast.error("Some went wrong!");
    }
  }, [state, ref]);

  return (
    <form ref={ref} action={formAction}>
      <Input name="name" type="name" label="Name" variant="bordered" />

      <Input
        className="mt-4"
        name="email"
        type="email"
        label="Email"
        variant="bordered"
      />

      <Input
        className="mt-4"
        name="password"
        type="password"
        label="password"
        variant="bordered"
      />
      <div className="flex justify-end pt-2">
        <Link href="/login">
          Al ready have an account. Please{" "}
          <span className="text-blue-500">Login</span>
        </Link>
      </div>
      <div className="justify-center items-center">
        <ActionSubmitButton>Register</ActionSubmitButton>
      </div>
    </form>
  );
};

export default RegisterForm;
