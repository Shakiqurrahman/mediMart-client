import ProfileBox from "@/components/modules/profile/ProfileBox";
import { getCurrentUser } from "@/services/user";

const ProfilePage = async () => {
  const { data } = await getCurrentUser();

  return (
    <>
      <ProfileBox data={data} />
    </>
  );
};

export default ProfilePage;
