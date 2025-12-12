import React from 'react';
import GetAllOrder from '../../(commonProtectedLayout)/getOrder/page';
import { OrderCreateForm } from '@/components/modules/orders/CreateOrder';


const CashierDashboardPage = () => {
    return (
        <div>
            <OrderCreateForm/>
            <GetAllOrder/>
        </div>
    );
};

export default CashierDashboardPage;