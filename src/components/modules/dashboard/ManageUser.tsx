"use client";
import { formatDate } from "@/lib/formatDate";
import { IUser } from "@/types/userType";
import { GoDotFill } from "react-icons/go";

const ManageUser = ({ allUsers }: { allUsers: IUser[] }) => {
  const handleUpdate = (id: string, value: string) => {
    console.log(id, value);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 buser-b buser-gray-200">
        <h2 className="text-lg font-semibold">Manage Users</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allUsers?.length > 0 ? (
              allUsers?.map((user: IUser) => (
                <tr key={user?._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user?.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user?.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {formatDate(user?.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`border   ${
                        user?.isDeleted
                          ? "text-rose-600 border-rose-600 bg-[#ffeded]"
                          : "text-[#09cc57] border-[#09cc57] bg-[#edfff4]"
                      } inline-flex items-center px-2 py-0.5 rounded-[10px] text-sm gap-0.5`}
                    >
                      <GoDotFill className="text-xs" />
                      <span>{user?.isDeleted ? "Deleted" : "Active"}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      name="userActions"
                      id="userActions"
                      className="px-3 py-1 outline-none border border-gray-200"
                      defaultValue={user?.isDeleted ? "Delete" : "Active"}
                      onChange={(e) => handleUpdate(user?._id, e.target.value)}
                    >
                      <option value="Active">Active</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <p className="px-6 py-4 w-full">No users found!</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
