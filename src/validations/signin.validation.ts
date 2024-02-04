interface DataUser {
    username: string,
    password: string
}
export const validateLogin = ( data: DataUser ) => {
    if (!data.username && !data.password) {
        console.log('operation incompleted')
    }

    if (data.username === undefined || data.username === undefined) {
        console.log('Operation incomplete');
    }
}