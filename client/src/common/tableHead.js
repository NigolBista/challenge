import React from "react";

const TableHead = ({ item }) => {
    return (
        <th scope="col" title={item}>
            {item}
        </th>
    );
};

export default TableHead;