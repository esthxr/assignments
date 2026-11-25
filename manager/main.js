const { Manager, Employee, Staff } = require('./class');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const employees = [];

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (ans) => {
            resolve(ans);
        });
    });
}

function printMenu() {
    console.log('\nEmployees');
    console.log('1. Add employee');
    console.log('2. Add staff');
    console.log('3. Add manager');
    console.log('4. List employees');
    console.log('5. Delete employees');
    console.log('0. Exit');
}

async function askCommonDetails() {
    const name = await askQuestion('Enter name: ');
    const department = await askQuestion('Enter department: ');
    const bankAcc = await askQuestion('Enter Bank Account: ');
    return { name, department, bankAcc };
}

async function addEmployee() {
    try {
        const {name, department, bankAcc} = await askCommonDetails();

        const newEmployee = new Employee(name, department, bankAcc);
        employees.push(newEmployee);

        console.log('Employee added successfully!');
    } catch (error) {
        console.log (`Error: ${error.message}`);
    }
}

async function addstaff() {
    try {
        const {name, department, bankAcc} = await askCommonDetails();
        const staffCode = await askQuestion('Enter staffCode: ');
        const phone = await askQuestion('Enter phone number: ');

        const newStaff = new Staff(name, department, bankAcc, staffCode, phone);
        employees.push(newStaff);

        console.log('Staff added successfully!');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

async function addManager(){
    try {
        const {name, department, bankAcc} = await askCommonDetails();
        const managerCode = await askQuestion('Enter manager code: ')
        const salary = Number(await askQuestion('Enter salary: '));

        const newManager = new Manager (name, department, bankAcc, managerCode, salary);
        employees.push(newManager);

        console.log('Manager added successfully!');
    } catch (error) {
        console.log (`Error: ${error.message}`) 
    }
}

async function listEmployees() {
    if (employees.length === 0) {
        console.log('No employees to display.')
        return;
    }

    employees.forEach((employee, index) => {
        const staffCode = employee instanceof Staff ? `staff code: ${employee.staffCode}` : '';
        const phone = employee instanceof Staff ? `phone number: ${employee.phone}` : '';
        const managerCode = employee instanceof Manager ? `manager code: ${employee.managerCode}` : '';
        const salary = employee instanceof Manager ? `salary: ${employee.salary}` : '';

        console.log(
            `${index + 1}. Name: ${employee.name}, Department: ${employee.department}, Bank Account: ${employee.bankAcc}, ${staffCode} ${phone} ${managerCode} ${salary}`,
        );
    });
}

async function deleteEmployees() {
    listEmployees();
    if (employees.length === 0) {
        return;
    }

    const number = Number(await askQuestion('Enter a number to delete: '));
    const index = number - 1;

    if (!Number.isInteger(number) || index < 0 || index >= employees.length) {
        console.log('Invalid employee number.');
        return;
    }

    const removed = employees.splice(index, 1)[0];
    console.log(`${removed.name} deleted.`);
}

async function main() {
    while(true) {
        printMenu();
        const choice = await askQuestion('Choose an option: ');
        
        if (choice === '1') {
            await addEmployee();
        } else if (choice === '2') {
            await addstaff();
        } else if (choice === '3') {
            await addManager();
        } else if (choice === '4') {
            listEmployees();
        } else if (choice === '5') {
            await deleteEmployees();
        } else if (choice === '0') {
            console.log('Goodbye');
            break;
        } else {
            console.log ('Invalid option.');
        }
    }

    rl.close();
}

main();