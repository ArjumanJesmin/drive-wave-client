"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { loginUser } from "../action/authAction";
import { createRef, useEffect } from "react";
import ActionSubmitButton from "../submitButton/ActionSubmitButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(loginUser, null);
  const ref = createRef<HTMLFormElement>();

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message);
      ref.current?.reset();
      router.push("/");
    }
    if (state && !state?.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={ref} action={formAction}>
      <Input name="email" type="email" label="Email" variant="bordered" />

      <Input
        className="mt-4"
        name="password"
        type="password"
        label="password"
        variant="bordered"
      />
      <div className="flex justify-end pt-2">
        <Link href="/register">
          If you have account <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <div className="justify-center items-center">
        <ActionSubmitButton>Login</ActionSubmitButton>
      </div>
    </form>
  );
};

export default LoginForm;
