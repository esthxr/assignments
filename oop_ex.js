class Employee {
    name;
    department;
    #bankAcc;

    constructor(name, department, bankAcc){
        if (name === undefined || department === undefined || bankAcc === undefined){
            throw new Error('Name, department, and bank account are required');
        }

        this.name = name;
        this.department = department;
        this.#bankAcc = bankAcc;
    }

    publicInfo(){
        console.log('Name: ', this.name, 'Department: ', this.department);
   }

    privateInfo(){
        console.log('Bank Account: ', this.#bankAcc);
   }

    work(){
        console.log(`${this.name} is working...`);
    }
}

    class Manager extends Employee{
        managerCode;
        #salary;

        constructor(name, department, bankAcc, managerCode, salary){
            super(name, department, bankAcc);

            if(managerCode === undefined || salary === undefined){
                throw new Error('Manager Code and Salary are required');
            }
            this.managerCode = managerCode;
            this.#salary = salary;
        }
            publicInfo(){
                super.publicInfo();
                console.log('Manager Code: ', this.managerCode);
            }

            privateInfo(){
                super.privateInfo();
                console.log('Salary: ', this.#salary);
            }   

            login(code){
                if(code === this.managerCode){
                    console.log('Login Successful');
                } else{
                    console.log('Login Failed');
                }
            }

            manage(){
                console.log(`${this.name} is managing`);
            }
        }

    class Staff extends Employee{
        staffCode;
        #contractInfo;

        constructor(name, department, bankAcc, staffCode, contractInfo){
            super(name, department, bankAcc);
            if(staffCode === undefined || contractInfo === undefined){
                throw new Error('Staff Code and Contract Info are required');
            }
            this.staffCode = staffCode;
            this.#contractInfo = contractInfo;
        }

        publicInfo(){
            super.publicInfo();
            console.log('Staff Code: ', this.staffCode);
        }

        privateInfo(){
            super.privateInfo();
            console.log('Contract Info: ', this.#contractInfo);
        }

       handleTask(){
            console.log(`${this.name} is handling tasks`);
        }
 }


//  const employee1 = new Employee ('Leo', 'IT', '123456789');
//  const employee2 = new Employee ('Mia', 'HR', '987654321');
//  const employee3 = new Employee ('Max', 'Finance', '456789123');

//  const employees = [employee1, employee2, employee3];

//  for(const employee of employees){
//     employee.publicInfo();
//     employee.privateInfo();
//     employee.work();
//     console.log('\n');
//  }


// const manager1 = new Manager ('Alice', 'IT', '123456789', 'MGR001', 80000);
// const manager2 = new Manager ('Bob', 'HR', '987654321', 'MGR002', 75000);   
// const manager3 = new Manager ('Charlie', 'Finance', '456789123', 'MGR003', 90000);

// const managers = [manager1, manager2, manager3];

// for(const manager of managers){
//     manager.publicInfo();
//     manager.privateInfo();
//     manager.login('MGR003');
//     manager.manage();
//     console.log('----------------------');
// }


// const staff1 = new Staff ('David', 'IT', '123456789', 'STF001', 'Full-time');
// const staff2 = new Staff ('Eva', 'HR', '987654321', 'STF002', 'Part-time');
// const staff3 = new Staff ('Frank', 'Finance', '456789123', 'STF003', 'Contract');   

// const staffs = [staff1, staff2, staff3];

// for (const staff of staffs){
//     staff.publicInfo();
//     staff.privateInfo();
//     staff.handleTask();
//     console.log('----------------------');
// }


const employee = new Employee('John Doe', 'IT', '123456789');
const manager = new Manager('Jane Smith', 'HR', '987654321', 'MGR001', 80000);
const staff = new Staff('Mike Johnson', 'Finance', '456789123', 'STF001', 'Full-time');

const employees = [employee, manager, staff];

for (const employee of employees) {
    if (employee instanceof Employee) {
        employee.publicInfo();
        employee.privateInfo();
        employee.work();
    }

    if (employee instanceof Manager) {
        employee.login('MGR003');
        employee.manage();
    }

    if (employee instanceof Staff) {
        employee.handleTask();
    }
}