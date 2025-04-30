import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, messagesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Message = {
  id: number;
  from: string;
  class: string;
  date: string;
  time: string;
  message: string;
};

const columns = [
  {
    header: "Message",
    accessor: "message",
  },

  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },

  {
    header: "Time",
    accessor: "time",
    className: "hidden lg:table-cell ",
  },

  {
    header: "From",
    accessor: "from",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

const MessageListPage = () => {
  const renderRow = (item: Message) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-thmPurpleLight "
    >
      <td className="flex items-center gap-4 p-4">{item.message}</td>

      <td className="hidden lg:table-cell">{item.date}</td>
      <td className="hidden lg:table-cell">{item.time}</td>
      <td className="hidden md:table-cell ">{item.from}</td>
      <td className="">
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              {/* <FormModel table="message" type="update" data={item} /> */}
              <FormModel table="message" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 roundend-md mt-0 m-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold ">ALL Messages</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-thmYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-thmYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>

            {role === "admin" && <FormModel table="message" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={messagesData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default MessageListPage;
