import Header from "../component/Header";
import React from 'react';
import LinkBtn from "../component/asset/LinkBtn";
import EmployeeListTable from "../component/employees-components/EmployeeListTable";
function EmployeeList () {

    return(
        <div className="base-flex-col">
            <Header title={"Current Employees"}/>
            <EmployeeListTable/>
            <LinkBtn slug={""} linkName={"Home"}/>
        </div>

    );
}
export default EmployeeList;