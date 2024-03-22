var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
{
    var age = 20;
    // age= "twenty";
    console.log(age);
    var coder = 'matt';
    var incrementAge = function (age) {
        return age + 1;
    };
    var printAge = function (age) { return console.log(age); };
    printAge(age);
    var newAge = incrementAge(age);
    printAge(newAge);
    var roomname = void 0;
    roomname = 801;
    roomname = "Towerb 801";
    // roomname = true;
    var dhoniage = void 0;
    dhoniage = 42;
    console.log(incrementAge(dhoniage));
    dhoniage = null;
    if (dhoniage !== null) {
        incrementAge(dhoniage);
    }
    else {
        incrementAge(1);
    }
    incrementAge(dhoniage !== null && dhoniage !== void 0 ? dhoniage : 1);
    incrementAge(dhoniage);
    //optional parameter
    var returnAge1 = function (age) {
        var _a;
        return (_a = age + 1) !== null && _a !== void 0 ? _a : 21;
    };
    var returnAge2 = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var returnAge3 = function (age) {
        if (age === void 0) { age = 23; }
        return age;
    };
    //classes 
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.active = false;
            this.name = name;
            this.age = age;
        }
        Person.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            this.name = 'Ranbir';
        };
        return Person;
    }());
    var person1 = new Person('Shoaib', 30);
    var person2 = new Person('Bhavya');
    console.log(person1, person2);
    person1.celebrateBirthday();
    person2.celebrateBirthday();
    console.log(person1, person2);
    var Person1 = /** @class */ (function () {
        function Person1(name, age) {
            this.name = name;
            this.age = age;
            this.active = false;
        }
        Person1.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            this.name = 'Ranbir';
        };
        return Person1;
    }());
    var person3 = new Person1("Ranbi", 37);
    console.log(person3);
    var Person3 = /** @class */ (function () {
        function Person3(name, age) {
            this.active = false;
            this._changed = false;
        }
        Person3.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            // this.name = 'Ranbir';
        };
        Object.defineProperty(Person3.prototype, "changed", {
            get: function () {
                return this._changed;
            },
            set: function (value) {
                this._changed = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person3;
    }());
    var person4 = new Person3("Ranbir", 37);
    console.log(person4.changed);
    person4.changed = true;
    console.log(person4.changed);
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person));
    var child1 = new Child('taimur', ['car', 'star parents'], 5);
    console.log(child1);
    var CheckingAccount = /** @class */ (function () {
        function CheckingAccount(id, balance, transaction) {
            this.id = id;
            this.balance = balance;
            this.transaction = transaction;
        }
        return CheckingAccount;
    }());
    var account = { id: 34, balance: 2000, transaction: [100, 200] };
    console.log(account);
    // account.addBalance(300);
    console.log(account);
    var transaction1 = { date: new Date(), amount: 100, description: 'deposit' };
    var EnhancedTransaction = /** @class */ (function () {
        function EnhancedTransaction(date, amount, description) {
            this.date = date;
            this.amount = amount;
            this.description = description;
        }
        return EnhancedTransaction;
    }());
    //combining types
    var x = void 0;
    var s1 = { name: 'ABC', role: 'Teacher', id: 1, salary: 2000 };
    function convertNumberToArray(x, y) {
        return [x, y];
    }
    var result1 = convertNumberToArray(10, 20);
    console.log(result1);
    function convertToArray(x, y) {
        return [x, y];
    }
    var result2 = convertToArray(10, 30);
    console.log(result2);
    var result3 = convertToArray('Shoaib', 'Mansoori');
    console.log(result3);
    var AccountManager = /** @class */ (function () {
        function AccountManager(account) {
            this.account = account;
        }
        return AccountManager;
    }());
    var checkingAccountManager = new AccountManager(new CheckingAccount(1, 100, [1, 2, 3]));
    console.log(checkingAccountManager);
    ;
    var ttype1 = 0 /* TransactionType.Deposit */;
    var ttype2 = 1 /* TransactionType.Withdraw */;
    var ttype3 = 2 /* TransactionType.Transfer */;
    console.log(ttype1);
    console.log(ttype2);
    console.log(ttype3);
    ;
    var ttype11 = 0 /* TransactionType.Deposit */;
    var ttype22 = 1 /* TransactionType.Withdraw */;
    var ttype33 = 2 /* TransactionType.Transfer */;
    console.log(ttype11);
    console.log(ttype22);
    console.log(ttype33);
    var user = { name: 'Matt', active: true };
    console.log(((_a = user.password) === null || _a === void 0 ? void 0 : _a.length) || 'no password set');
    var description = document.getElementById('description');
    description.value;
}
