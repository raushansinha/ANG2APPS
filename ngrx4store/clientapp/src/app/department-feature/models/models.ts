export type Department = {
    id: string,
    Name: string
};

export type DepartmentDetail = {
    id: string,
    description: string,
    numberOfEmployees: number,
    location: string
};

export interface DeptState {
    departments: Department[];
    departmentDetails: DepartmentDetail;
};

export const initialState: DeptState = {
    departments: [{ "id": "TEST", "Name": "Test Department" }],
    departmentDetails: {
        id: "",
        description: "",
        numberOfEmployees: 0,
        location: ""
    }
};