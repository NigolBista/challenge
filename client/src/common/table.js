import React from "react";
import TableRow from "./tableRow";
import TableHead from "./tableHead";
import {Table} from "reactstrap";

const TableComp = ({ theadData, tbodyData }) => {
    return (
        <Table>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHead key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item,index) => {
                    return <TableRow key={index} data={Object.values(tbodyData[index])} />;
                })}
            </tbody>
        </Table>
    );
};

export default TableComp;