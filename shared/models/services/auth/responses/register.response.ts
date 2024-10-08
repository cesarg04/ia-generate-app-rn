
export interface IRegisterResponse {
    msg:   string;
    user:  User;
    token: string;
}

export interface User {
    name:  string;
    email: string;
    id:    string;
}
