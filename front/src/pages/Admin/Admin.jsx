import React from 'react';
import TableUser from '../../components/TableUser/TableUser';
import TableCabinet from '../../components/TableCabinet/TableCabinet';
import TableAnimaux from '../../components/TableAnimaux/TableAnimaux';

const Admin = () => {
    return (
        <>
        <TableUser/>
        <TableCabinet/>
        <TableAnimaux/>
        </>
    );
};

export default Admin;