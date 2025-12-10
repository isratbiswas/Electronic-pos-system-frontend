
import { getUserInfo } from "@/services/auth/getUserInfo";




const MyProfilePage = async() => {
    const userInfo = await getUserInfo();
    console.log(userInfo , "userInfo");
    return (
        <div>
           {/* <MyProfile userInfo={userInfo} /> */}
           <h2>My Prfile</h2>
        </div>
    );
};

export default MyProfilePage;