import {mount} from 'paymentslist/PaymentsList'; 
import { ReactElement, useEffect, useRef } from 'react';

export const PaymentsList = (): ReactElement => {

    const paymentsListDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mount(paymentsListDiv.current);
    }, [])

    return (
        <div ref={paymentsListDiv} />
    );
}