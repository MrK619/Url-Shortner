import * as React from "react";
import { UriData } from "../Helpers/datatable";
import axios from "axios";
import { serverurl } from "../Helpers/constant";
// import { Link } from "react-router-dom";
interface IDataTableProps {
    Data: UriData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const deleterecord = (id: any) => {
        console.log(`${serverurl}/api/shorturl/${id}`);
        axios.delete(`${serverurl}/api/shorturl/${id}`);
        window.location.reload();
    };
    const tabledata = props.Data.map((data, index) => {
        return (
            <tr
                key={index}
                className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
            >
                <td className="px-6 py-3 break-words">
                    {/* <Link to={data.fullUrl}>{data.fullUrl}</Link> */}
                    {data.fullUrl}
                </td>
                <td className="px-6 py-3">{data.shortUrl}</td>
                <td className="px-6 py-3">{data.clicks}</td>
                <td className="px-6 py-3">{data.createdAt.toString()}</td>

                <td className="px-6 py-3">{data.updatedAt.toString()}</td>
                <td className="px-10 py-3">
                    <button
                        className="text-white bg-red-700 p-2 rounded"
                        onClick={() => deleterecord(data._id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <div className="p-10 mx-auto">
            <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-md uppercase text-gray-50 bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-4/12">
                            FullUrl
                        </th>
                        <th scope="col" className="px-6 py-3 w-3/12">
                            ShortUrl
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Clicks
                        </th>
                        <th scope="col" className="px-6 py-3">
                            createdAt
                        </th>
                        <th scope="col" className="px-6 py-3">
                            updatedAt
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete Link
                        </th>
                    </tr>
                </thead>

                <tbody>{tabledata}</tbody>
            </table>
        </div>
    );
};

export default DataTable;
