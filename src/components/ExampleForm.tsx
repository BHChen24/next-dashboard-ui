"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  userName: z
    .string()
    .min(3, { message: "User name should be at least 3 characters long." })
    .max(24, { message: "User name should be at most 24 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters long." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  phone: z.string().min(1, { message: "Phone is required." }),
  birthday: z.date({ message: "Birthday is required." }).optional(),
  pronouns: z.enum(["she/her", "he/him", "they/them"], {
    message: "Please select your pronouns.",
  }),
});

export default function ExampleForm({
  type,
  data,
}: {
  type: "create";
  data?: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form action="" className="flex gap-8 flex-col">
      <h1 className="text-xl font-semibold"> Example form </h1>
      <span className="text-xl text-gray-400 font-medium">
        Authentication Info
      </span>
      <input
        type="text"
        {...register("userName")}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
      />
      {errors.userName?.message && <p> {errors.userName?.message.toString()} </p> }
      <span className="text-xl text-gray-400 font-medium">Personal Info</span>
    </form>
  );
}
