import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type FormSchema, formSchema } from "../schemas/formSchema";

const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
  return { register, handleSubmit, errors };
};

export default useForms;
