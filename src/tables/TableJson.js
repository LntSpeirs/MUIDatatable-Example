import MUIDataTable from "mui-datatables";
import users from "./users.json";

const columns = [
    {
        name: "id",
        label: "ID",
        options: { filter: true, sort: true },
    },
    {
        name: "name",
        label: "NAME",
        options: { filter: true, sort: true },
    },
    {
        name: "gender",
        label: "GENDER",
        options: { filter: true, sort: true },
    },
];

const TableJson = () => {
    return (
        <MUIDataTable
            title={"Lista de usuarios"}
            data={users}
            columns={columns}
        />
    );
};

export default TableJson;
