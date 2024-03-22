import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import './Search.css'

export const Search = (): ReactElement => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);

    const doSearch = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(searchTerm);        
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        setSearchTerm(event.target.value);
        setTouched(true);
        setValid(event.target.value.trim().length > 0)
    }

    return (
        <>
        <div className='searchBox'>
            <form onSubmit={doSearch}>
                <label htmlFor="orderId">Order Id: </label>
                <input id="orderId" type="text" value={searchTerm} onChange={handleChange} className={touched && !valid ? 'searchBoxError' : ''}></input>
                <button type='submit' disabled={!valid}>Search order</button>
            </form>
        </div>
        </>
    );
}