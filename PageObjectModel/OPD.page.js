import data from "../testData/hospitalData.json"
class OPDPage{
    constructor(page){

        this.page=page
        this.opdqueuelink=page.locator("//span[text()='OPD Queue']")
        this.newVisitButton=page.getByRole("button",{name:"+ New Visit"})
        this.selectPatientDD=page.locator("#opd-patient-id")
        this.selectDepartmentDD=page.locator("#opd-department-id")
        this.selectDoctorDD=page.locator("#opd-doctor-id")
        this.chiefcomplaintButtn=page.locator("#opd-chief-complaint")
        this.createVisitButton=page.getByRole("button",{name:"Create Visit"})

        this.opdpatientexist=page.locator("(//div[text()='APX-010430'])[1]")

    }

   async opdVisit(){
    
        await this.opdqueuelink.click()
        await this.newVisitButton.click()
        await this.selectPatientDD.click()
        await this.page.keyboard.press("ArrowDown")
         await this.page.keyboard.press("Enter")
        await this.selectDepartmentDD.selectOption(data.opd.department)
        await this.selectDoctorDD.selectOption(data.opd.doctor)
        await this.chiefcomplaintButtn.fill(data.opd.complaint)
        await this.createVisitButton.click()
        

   }



}
export default OPDPage