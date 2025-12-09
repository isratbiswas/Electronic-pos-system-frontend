import React from 'react';
import DashboardNavbarContent from './DashboardNavbarContent';
import { getUserInfo } from '@/services/auth/getUserInfo';

const DashboardNavbar = async() => {
    const userInfo= await getUserInfo();
    return (
        <div> 
            <DashboardNavbarContent userInfo={userInfo}/>
        </div>
    );
};

export default DashboardNavbar;