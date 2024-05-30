import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { serverurl } from "../Helpers/constant";
interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    const [url, setUrl] = useState<string>("");

    const handle = async (e: React.FormEvent) => {
        e.preventDefault();
        //post url to mongodbdb using axios
        try {
            axios.post(`${serverurl}/api/shorturl`, { fullUrl: url });
            setUrl("");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mt-10">
                    Url Shortener
                </h1>
            </div>
            <div className="container mx-auto mt-20">
                <form
                    onSubmit={handle}
                    className="flex space-x-2 mx-auto justify-center items-center"
                >
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="border-2 border-gray-300 p-2 rounded-lg w-[400px]"
                        placeholder="https://example.com"
                        required
                    />
                    <button
                        type="submit"
                        className="border-2 bg-blue-600 p-2 px-4 rounded-lg text-white "
                    >
                        Shorten
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormContainer;
