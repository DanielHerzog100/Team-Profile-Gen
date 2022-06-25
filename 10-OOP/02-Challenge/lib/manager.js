import Employee from "./employee"
class Manager extends Employee{
    constructor(id, name, email,officeNumber) {
      super(id,name,email)
      this.officeNumber = officeNumber;
    }
    getOfficeNumber (){
        return this.officeNumber
    }
    
    getRole (){
        return "Manager"
    }
  }
export default Manager