"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(1, { message: "Class is required !" }),
  grade: z.string().min(1, { message: "Grade Name is required !" }),
  capacity: z.string().min(2, { message: "Capacity of the Class required !" }),
  supervisor: z.string().min(3, { message: "Supervisor's Name is required !" }),
});

type Inputs = z.infer<typeof schema>;

const ClassForm = ({
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
        {/* Create a new Class  */}
        {type === "create" ? "Create a new Class" : "Update this  Class"}
        </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentic Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Class Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />

        <InputField
          label="Capacity"
          name="capacity"
          defaultValue={data?.capacity}
          register={register}
          error={errors?.capacity}
        />

        <InputField
          label="Grade"
          name="grade"
          defaultValue={data?.grade}
          register={register}
          error={errors?.grade}
        />

        <InputField
          label="Supervisor's Name"
          name="supervisor"
          defaultValue={data?.supervisor}
          register={register}
          error={errors?.supervisor}
        />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ClassForm;
