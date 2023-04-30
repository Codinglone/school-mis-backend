export interface userPayload {
    firstName: string
    lastName: string 
    email: string 
    password: string 
    role: string 
    school: string
}

export interface loginPayload {
    email: string 
    password: string
}

export interface categoryPayload {
    categoryName: string 
    duration: string
}

export interface coursesPayload {
    name: string 
    profile: string
}