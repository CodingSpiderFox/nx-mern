import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomerForm } from '../customer-form/customer-form';
import { CustomerList } from '../customer-list/customer-list';

export function Customers() {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const customersRes = await axios.get(`${process.env.NX_SITE_URL}/customer`);
    setCustomers(customersRes.data.reverse());
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}
