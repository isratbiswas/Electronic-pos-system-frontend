import MyProfile from "@/components/modules/Dashboard/MyProfile/MyProfile";
import { getUserInfo } from "@/services/auth/getUserInfo";

const MyProfilePage = async () => {
  const user = await getUserInfo();
  const userInfo = user?.data ?? [];
  console.log(user, "userInfo");
  return (
    <div>
      <MyProfile userInfo={userInfo} />
    </div>
  );
};

export default MyProfilePage;
