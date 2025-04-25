import ManageUser from "@/components/modules/dashboard/ManageUser";
import { getAllUsers } from "@/services/user";

const UserManagement = async () => {
  const res = await getAllUsers();

  const { data: allUsers } = res || {};
  return (
    <section className="m-4 mt-16 lg:m-8">
      <ManageUser allUsers={allUsers} />
    </section>
  );
};

export default UserManagement;
