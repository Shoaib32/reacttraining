import { ReactElement } from 'react';
import './pageHeader.css'

export const Menu = (): ReactElement => {
    return (<>
        <ul className='nav'>
            <li>Find a transaction</li>
            <li>New transaction</li>
        </ul>
    </>);
}