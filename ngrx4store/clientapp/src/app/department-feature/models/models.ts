export class Department {
    id: string;
    Name: string

    constructor(id: string, Name: string) { }
};

export class DepartmentDetail {
    id: string;
    description: string;
    numberOfEmployees: number;
    location: string
};

export interface DeptState {
    departments: Department[];
}

export const initialState: DeptState = {
    departments: [
        new Department('IT','Information Tech')
    ]
};