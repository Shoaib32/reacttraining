
import { ReactElement } from 'react';
import { Menu } from './Menu';
import './pageHeader.css';

export const PageHeader = (): ReactElement => {
    return (
        <>
            <div className='pageHeader'>
                <h1>Payment Application</h1><Menu></Menu>
            </div>
        </>
    );
}