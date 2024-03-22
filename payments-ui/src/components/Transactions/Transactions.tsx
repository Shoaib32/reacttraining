import { PaymentType, getAllPayments, getAllPaymentsAxios, getAllPaymentsOld, getAllPaymentsRestVersion } from "../data/DataFunctions";
import "./Transactions.css";
import { PaymentTableRow } from "./PaymentTableRow";
import { ChangeEvent, useEffect, useState } from "react";

export type Transaction = {
  id: number;
  date: Date;
  country: string;
  currency: string;
  amount: number;
};

export type TransactionProps = {
  transactions: Transaction[];
};

export const Transactions = ({ transactions }: TransactionProps) => {

    const [payments, setPayments] = useState<PaymentType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // const payments: PaymentType[] = getAllPaymentsOld();
    useEffect(() => {
      loadData();
    }, []);


  const loadData = (): void => {
        getAllPaymentsAxios().then(response => {
            setPayments(response.data);
            setLoading(false);
          });        
  }

  const countries = Array.from(
    new Set(payments.map((payment) => payment.country))
  );

  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);

  const changeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
  };
  return (
    <>
      <div className="countrySelector">{loading}
        <select onChange={changeCountry}>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="loadingMessage">The data is loading </p>}

      {!loading &&       <div className="transaction-section">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Order Id</th>
              <th>Country</th>
              <th>Currency</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments
              .filter((payment) => payment.country === selectedCountry)
              .map((payment) => {
                return (
                  <PaymentTableRow
                    key={payment.id}
                    {...payment}
                  ></PaymentTableRow>
                );
              })}
          </tbody>
        </table>
      </div>}

    </>
  );
};
