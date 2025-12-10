
import DashboardNavbarContent from './DashboardNavbarContent';
import { getUserInfo } from '@/services/auth/getUserInfo';
import { IUser } from '@/types';

const DashboardNavbar = async() => {
   const userInfo = (await getUserInfo()) as IUser;
    console.log(userInfo,"navbartrfgf");
    return (
        <div> 
            <DashboardNavbarContent userInfo={userInfo}/>
        </div>
    );
};

export default DashboardNavbar;

// "use client"; // top of file

// import React, { useEffect, useState } from 'react';

// import { getUserInfo } from '@/services/auth/getUserInfo';
// import DashboardNavbarContent from './DashboardNavbarContent';

// const DashboardNavbar = () => {
//     const [userInfo, setUserInfo] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             const data = await getUserInfo();
//             setUserInfo(data);
//             console.log(data, "navbar");
//         };
//         fetchUser();
//     }, []);

//     if (!userInfo) return <div>Loading...</div>;

//     return (
//         <div>
//             <DashboardNavbarContent userInfo={userInfo} />
//         </div>
//     );
// };

// export default DashboardNavbar;