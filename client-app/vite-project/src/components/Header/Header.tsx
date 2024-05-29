import * as React from "react";
import Link from "../../images/link.svg";
export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
    public render() {
        return (
            <div className="p-5 flex space-x-2 bg-cyan-600 text-base">
                <img src={Link} width={40} />
                <h2 className="text-2xl mt-[2px]">Url Shortener</h2>
            </div>
        );
    }
}
