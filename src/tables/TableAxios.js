import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

const TableAxios = () => {
    //1 configuramos los hooks
    const [products, setProducts] = useState([]);

    //2-Traer datos con axios
    const endpoint = "https://fakestoreapi.com/products";

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.table(data);
            setProducts(data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    //3-Definimos las columnas
    const colums = [
        {
            name: "id",
            label: "ID",
        },
        {
            name: "title",
            label: "TITLE",
        },
        {
            name: "category",
            label: "CATEGORY",
        },
    ];
    //4-Renderizamos la tabla
    return (
        <MUIDataTable
            title={"Lista de productos"}
            data={products}
            columns={colums}
        />
    );
};

export default TableAxios;
