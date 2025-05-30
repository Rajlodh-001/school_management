import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalender";
import FormModel from "@/components/FormModel";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3 ">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Info Card */}
          <div className="flex-1 bg-thmSky py-6 px-4 rounded-md  flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover "
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-4">
            <h1 className="text-xl text-semibold">Suzen Klarea</h1>

            <FormModel table="teacher" type="update" data={
                {
                  id:1,
                  username:"Suzen Klarea",
                  email:"Suzen_K265@gmail.com",
                  password:"password",
                  firstName:"Suzen",
                  lastName:"Klarea",
                  phone:"+91 123 456 7890",
                  address:"1234 Main St. Manpada ,mumbai,India",
                  bloodType:"A+",
                  birthday:"2001-01-01",
                  sex:"female",
                  img:"https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"

                }
              }/>
            </div>
              

              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center justify-between gap-2 text-xs font-medium flex-wrap">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+91 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Info Card */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Scedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcut</h1>
          <div className="mt-4 flex gap-4 flex-wrap tex-xs text-gray-500">
            <Link href={"/"} className="p-3 rounded-md bg-thmSkyLight">
            Student&apos;s Lessons
            </Link>

            <Link href={"/"} className="p-3 rounded-md bg-thmPurpleLight">
              Student&apos;s Teachers
            </Link>

            <Link href={"/"} className="p-3 rounded-md bg-pink-50">
              Student&apos;s Exams
            </Link>
            <Link href={"/"} className="p-3 rounded-md bg-thmSkyLight">
              Student&apos;s Assignments
            </Link>
            <Link href={"/"} className="p-3 rounded-md bg-thmYellowLight">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance/>
        <Announcement />
      </div>
    </div>
  );
};

export default SingleStudentPage;
