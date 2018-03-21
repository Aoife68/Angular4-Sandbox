//The ? signifies that the properties are optional

export interface User{
  firstName:string,
  lastName:string,
  email: string,
  isActive?: boolean, 
  registered?: any,
  hide?: boolean
}

export interface Address{
   street: string,
   city: string,
   county: string
 }