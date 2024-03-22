{
let age:number=20;
// age= "twenty";
console.log(age)
let coder:string = 'matt';

const incrementAge = (age: number): number => {
    return age + 1;
}

const printAge = (age: number): void => console.log(age);

printAge(age);

let newAge: number = incrementAge(age);

printAge(newAge);

let roomname: number | string;

roomname = 801;
roomname = "Towerb 801"
// roomname = true;

let dhoniage:number|null;
dhoniage=42;
console.log(incrementAge(dhoniage));

dhoniage = null;

if (dhoniage !== null){
    incrementAge(dhoniage);
} else {
    incrementAge(1);
}

incrementAge(dhoniage ?? 1);

incrementAge(dhoniage!)

//optional parameter
const returnAge1 = (age:number|null): number => {
    return age!+1 ?? 21;
}


const returnAge2 = (age?: number): number => {
    return age ?? 21;
}

const returnAge3 = (age: number = 23): number => {
    return age;
}

//classes 

class Person {
    name: string;
    age?: number;
    active: boolean = false;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday(): void {
        if (this.age !== undefined)
            this.age++;
        this.name = 'Ranbir';
    }

}

const person1 = new Person('Shoaib', 30);
const person2 = new Person('Bhavya');


console.log(person1, person2);

person1.celebrateBirthday();
person2.celebrateBirthday();

console.log(person1, person2);


class Person1 {
    active: boolean = false;

    constructor(public name: string, public age?: number) {
    }

    celebrateBirthday(): void {
        if (this.age !== undefined)
            this.age++;
        this.name = 'Ranbir';
    }

}

const person3 = new Person1("Ranbi", 37);
console.log(person3);

class Person3 {
    name: string;
    age?: number;
    active: boolean = false;
    private _changed: boolean = false;

    constructor(name: string, age?: number) {
    }

    celebrateBirthday(): void {
        if (this.age !== undefined)
            this.age++;
        // this.name = 'Ranbir';
    }

    public get changed(): boolean {
        return this._changed;
    }

    public set changed(value: boolean) {
        this._changed = value;
    }
}

const person4 = new Person3("Ranbir", 37);
console.log(person4.changed);
person4.changed = true;
console.log(person4.changed);


class Child extends Person {
    toys: string[];

    constructor(name: string, toys: string[], age?:number){
        super(name, age);
        this.toys = toys;
    }
}

let child1 = new Child('taimur', ['car', 'star parents'], 5);

console.log(child1);

//interfaces

interface Account {
    id: number;
    balance: number;
    transaction: number[];
}

class CheckingAccount implements Account {
    id: number;
    balance: number;
    transaction: number[];

    constructor(id: number, balance: number, transaction: number[]) {
        this.id = id;
        this.balance = balance;
        this.transaction = transaction;
    }

    // public addBalance(newBalance: number): void {
    //     this.balance = this.balance + newBalance;         
    // }
}



let account: CheckingAccount = {id:34, balance: 2000, transaction: [100,200]};
console.log(account);
// account.addBalance(300);
console.log(account);


//types

type Transaction = {
    date: Date;
    amount: number;
    description: string;
}

const transaction1: Transaction = {date: new Date(), amount: 100, description: 'deposit'};

class EnhancedTransaction implements Transaction {
    constructor(public date: Date, public amount: number, public description: string) {}
}

//combining types

let x: number | string;

type Teacher = { name: string, role: string, id: number};
type Employee = {id: number, salary: number}

type SchoolEmployee = Teacher & Employee;

let s1: SchoolEmployee = { name: 'ABC', role: 'Teacher', id: 1, salary: 2000};

//warning: if used with alternative types - it will only give the common type

type type1 = string | number | boolean;
type type2 = Teacher | number | boolean;

type type3 = type1 & type2;

function convertNumberToArray(x: number,y: number) {
    return [x,y];
}

let result1= convertNumberToArray(10,20);
console.log(result1);

function convertToArray<T>(x: T, y: T){
         return [x,y];
}
let result2= convertToArray(10,30);
console.log(result2)

let result3= convertToArray('Shoaib','Mansoori');
console.log(result3)

class AccountManager<T> {
    account: T;
    constructor(account: T) {
        this.account = account;
    }
}

const checkingAccountManager = new AccountManager<CheckingAccount>(new CheckingAccount(1, 100, [1,2,3]));

console.log(checkingAccountManager);

//Enum

const enum TransactionType { Deposit, Withdraw, Transfer};

const ttype1: TransactionType = TransactionType.Deposit;
const ttype2: TransactionType = TransactionType.Withdraw;
const ttype3: TransactionType = TransactionType.Transfer;

console.log(ttype1);
console.log(ttype2);
console.log(ttype3);

const enum TransactionType2 { Deposit = 'D', Withdraw= 'W', Transfer= 'T'};

const ttype11: TransactionType = TransactionType.Deposit;
const ttype22: TransactionType = TransactionType.Withdraw;
const ttype33: TransactionType = TransactionType.Transfer;

console.log(ttype11);
console.log(ttype22);
console.log(ttype33);

type User = { name: String, password?: string, active: boolean}
const user: User = { name: 'Matt', active: true};
console.log(user.password?.length || 'no password set');

const description = document.getElementById('description') as HTMLInputElement;
description.value;

}


