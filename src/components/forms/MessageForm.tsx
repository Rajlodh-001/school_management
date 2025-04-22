"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  sendTo: z.string().min(3, { message: "Sender's Name is required !" }),
  message_send: z.string().min(3, { message: "Message is required !" }),
});

type Inputs = z.infer<typeof schema>;

const EventForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form action="" className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        Create a new Message
        </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentic Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Send To"
          name="sendTo"
          defaultValue={data?.sendTo}
          register={register}
          error={errors?.sendTo}
        />

        {/* <InputField
          label="Message"
          name="message"
          defaultValue={data?.message}
          register={register}
          error={errors?.message}
        /> */}

        <div className="flex flex-col gap-2 w-full ">
          <label className="text-xs text-gray-500">Message</label>
          <input className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm w-full"
          {...register("message_send")} defaultValue={data?.message_send} />

          {errors.message_send?.message && (
            <p className="text-xs text-red-400">
              {errors.message_send.message.toString()}
            </p>
          )}
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EventForm;
