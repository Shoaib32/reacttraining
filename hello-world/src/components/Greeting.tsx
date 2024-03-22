import { ReactElement, useState } from 'react';
import './Greeting.css';

type GreetingProps = {name: string, age: number}

const Greeting = ({name, age}: GreetingProps): ReactElement => {

    let [currentName,setCurrentName] = useState<string>(name);

    const changeName = (): void => {
        setCurrentName('James');
    }

    return  (<>
        <p className="greeting_text"> Hello {currentName}. You are {age} years old. </p>
        <button onClick={changeName}>change my name</button>
    </>);
}
// function Greeting(props: GreetingProps) {
//     return (<>
//         <p className="greeting_text"> Hello {props.name}. You are {props.age} years old. </p>
//     </>);
// }

export default Greeting;