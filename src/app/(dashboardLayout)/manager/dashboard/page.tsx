import React from 'react';
import AllProduct from './allProduct/page';
import ProfitPage from './profit/page';
import DailySalePage from '../dailySales/page';

const ManagerPage = () => {
    return (
        <div>
            <h2>Manager</h2>
            <DailySalePage/>
            <AllProduct/>
            <ProfitPage/>
        </div>
    );
};

export default ManagerPage;