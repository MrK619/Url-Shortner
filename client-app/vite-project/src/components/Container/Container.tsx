import * as React from "react";
import { useState } from "react";
interface IContainerProps {}
import { serverurl } from "../Helpers/constant";
import axios from "axios";
import FormContainer from "../FormContainer/FormContainer";
import DataTable from "../DataTable/Datatable";
import { UriData } from "../Helpers/datatable";
const Container: React.FunctionComponent<IContainerProps> = () => {
    const [data, setdata] = useState<UriData[]>([]);
    const fetchdata = async () => {
        const response = await axios.get(`${serverurl}/api/shorturl`);
        setdata(response.data);
        console.log(response.data);
    };
    React.useEffect(() => {
        fetchdata();
    }, []);
    return (
        <>
            <FormContainer />
            <DataTable Data={data} />
        </>
    );
};

export default Container;
