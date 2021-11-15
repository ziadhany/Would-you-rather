export const AUTHED_USER= 'AUTHED_USER'
export const UN_AUTHED_USER= 'UN_AUTHED_USER'

export function setAuthedUser(id){
    return{
        type: AUTHED_USER,
        id
    }
}

export function unAuthedUser(){
    return {
        type: UN_AUTHED_USER,
    }
}