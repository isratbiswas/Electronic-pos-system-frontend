import React from 'react';

const CashierDashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
           <div>{children} </div>
        </div>
    );
};

export default CashierDashboardLayout;