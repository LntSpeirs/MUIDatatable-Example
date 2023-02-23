import MUIDataTable from "mui-datatables";
import { createTheme, themeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

import React from "react";
import { ThemeProvider } from "@emotion/react";

export class TableBasic extends React.Component {
    render() {
        const columns = ["Nombre", "Empresa", "Ciudad", "Estado"];
        const data = [
            {
                Nombre: "men's clothing",
                Empresa:
                    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                Ciudad: 109.95,
                Estado: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            },
        ];
        const options = { filterType: "checkbox" };
        return (
            <ThemeProvider theme={darkTheme}>
                <MUIDataTable
                    title={"Lista de empleados"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
        );
    }
}

export default TableBasic;