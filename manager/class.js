class Employee {
    name;
    department;
    #bankAcc;

    constructor(name, department, bankAcc){
        if (!name?.trim()) {
            throw new Error ('Name is required');
        }
        if (!department?.trim()){
            throw new Error ('Department is required');
        }
        if (!bankAcc?.trim()){
            throw new Error ('Bank Account is required');
        }        
        
        this.name = name.trim();
        this.department = department.trim();
        this.#bankAcc = bankAcc.trim();
    }

    get bankAcc() {
        return this.#bankAcc;
    }

    set bankAcc(newBankAcc) {
        if (!newBankAcc?.trim()) {
            throw new Error ('Bank Account is required')
        }
        this.#bankAcc = newBankAcc.trim();
    }

    info() {
        console.log(this.name, this.department, this.#bankAcc);
    }
}

    class Manager extends Employee{
        managerCode;
        #salary;

        constructor(name, department, bankAcc, managerCode, salary){
            super(name, department, bankAcc);

            if(!managerCode?.trim()) {
                throw new Error ('managerCode should be provided');
            }
            if(!Number.isFinite(salary) || salary < 0) {
                throw new Error ('Salary must be a positive number.');
            }
            
            this.managerCode = managerCode;
            this.#salary = salary;
        }

        get salary() {
            return this.#salary;
        }
        
        set salary(newSalary) {
            if (!Number.isFinite(newSalary) || newSalary < 0) {
                throw new Error ('Salary must be a positive number')
            }
        this.#salary = newSalary;
        }

        manage(){
                console.log(`${this.name} is managing`);
            }
        }

    class Staff extends Employee{
        staffCode;
        #phone;

        constructor(name, department, bankAcc, staffCode, phone){
            super(name, department, bankAcc);
            
            if (!staffCode?.trim()) {
                throw new Error ('Staff Code is required');
            }
            if (!phone?.trim()) {
                throw new Error ('Phone Number is required');
            }
            
            this.staffCode = staffCode.trim();
            this.#phone = phone.trim();
        }

        get phone() {
            return this.#phone;
        }

        set phone(newPhone) {
            if(!newPhone?.trim()) {
                throw new Error ('Phone Number is required');
            }
        this.#phone = newPhone.trim();
        }

       handleTask(){
            console.log(`${this.name} is handling tasks`);
       }
    }

module.exports = { Employee, Manager, Staff };