// import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/muthahir/OneDrive/Desktop/HospitalMgmnt/testData/hospitalData.json")
// let data=JSON.parse(datafile)
import data from "../testData/hospitalData.json"
class PatientPage{
    constructor(page){
        this.firstnameTextField=page.locator("#pf-first-name")
        //this.lastnameTextField=page.locator("pf-last-name")
        this.dateofBirth=page.locator("#pf-dob")
        this.genderDropdown=page.locator("#pf-gender")
        this.phoneTextField=page.locator("#pf-phone")
        this.registerPatientButton=page.getByRole("button",{name:"Register Patient"})
        this.createnextpatient=page.getByRole("button",{name:"+ New Patient"})

        this.patientcreated=page.locator("//span[text()='APX-010431']")

    }
   
     async createPatient(){
        for(let d of data.patients){
     if (!d.enabled) {
            continue;
        }
        await this.firstnameTextField.fill(d.name)
        await this.dateofBirth.fill(d.dateofBirth)
        await this.genderDropdown.selectOption(d.gender)
        await this.phoneTextField.fill(d.phone)
        await this.registerPatientButton.click()
       // await this.createnextpatient.click()
        }
    }
// for creating multiple patients
  
    //   async createPatient1(){
    // for(let d of data.patients){
    //     await this.firstnameTextField.fill(d.name)
    //     await this.dateofBirth.fill(d.dateofBirth)
    //     await this.genderDropdown.selectOption(d.gender)
    //     await this.phoneTextField.fill(d.phone)
    //     await this.registerPatientButton.click()
    //     }
    // }
}
export default PatientPage