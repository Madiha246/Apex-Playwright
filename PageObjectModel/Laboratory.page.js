import data from "../testData/hospitalData.json"

class LaboratoryPage{
    constructor(page){
        this.page=page
        this.lablink=page.getByRole('link', { name: 'Laboratory' })
        this.newOrderBtn=page.getByRole("button",{name:"+ New Order"})
        this.selectpatientDD=page.locator("#lab-patient")
        this.clinicalNotes=page.locator("#lab-notes")
        this.createOrderBtn=page.getByRole("button",{name:"Create Order"})
    }

    async labOrder(){
        await this.lablink.click()
        await this.newOrderBtn.click()
        await this.selectpatientDD.selectOption(data.laboratory.patient)
        await this.clinicalNotes.fill(data.laboratory.clinical_notes)
        await this.createOrderBtn.click()


    }
    
}    
export default LaboratoryPage