export class Employee {
    id: string;
    name: string;
    dept: String;

    constructor(id: string, name: string, dept: string) { }
};

export class EmployeeDetail {
    id: string;
};

export interface EmpState {
    employees: Employee[];
}

export const initialState: EmpState = {
    employees: [
        new Employee('1000','Raushan Sinha', 'IT')
    ]
};