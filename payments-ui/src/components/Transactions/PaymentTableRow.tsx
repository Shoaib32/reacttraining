import { ReactElement } from "react";
import {PaymentType} from "../../components/data/DataFunctions"
import React from "react";

export const PaymentTableRow = (props: PaymentType): ReactElement => {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.amount}</td>
            <td>{props.orderId}</td>
            <td>{props.country}</td>
            <td>{props.currency}</td>
            <td>{props.date}</td>
        </tr>
    );
}