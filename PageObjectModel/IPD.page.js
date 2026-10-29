import data from "../testData/hospitalData.json"
class IPDPage{
    constructor(page){

        this.page=page
        this.ipdqueuelink=page.locator("//span[text()='IPD / Beds']")
        this.admitpatient=page.getByRole("button",{name:"+ Admit Patient"})
        this.selectpatientDropdn=page.locator("#ipd-patient")
        this.wardDropdwn=page.locator("#ipd-ward")
        this.departmentDropdwn=page.locator("#ipd-department")
        this.bedDropdwn=page.locator("#ipd-bed")
        this.diagnosis=page.locator("#ipd-diagnosis")
        this.submitButton=page.getByRole("button",{name:"Submit Admission"})

        this.semi_private=page.locator("//div[@title='SPV-02 · Arjun Chopra — click for details / discharge']")
        this.dischargeButton=page.locator("//button[@class='btn btn-primary' and contains(text(),'Discharge')]")
        this.dischargeSummary=page.getByPlaceholder("Condition at discharge, follow-up advice, medications, notes…")
        this.waveofCheckbox=page.locator("//input[@type='checkbox']")
        this.typedischarge=page.locator("//input[@placeholder='DISCHARGE']")
        this.confimDischargeButton=page.getByRole("button",{name:"Confirm Discharge"})
       // this.payButton=page.getByRole("button",{name:"Pay"})
        //this.recredpayButton=page.getByRole("button",{name:"Record Payment"})
       // this.totalDue=page.locator("//span[text()='Total Due']/following-sibling::span[.='₹0.00']")
    }

    async ipdVisit(){
    
        await this.ipdqueuelink.click()
        await this.admitpatient.click()
        await this.selectpatientDropdn.selectOption({value:`${data.ipd.value}`})
        await this.wardDropdwn.selectOption({value:`${data.ipd.ward}`})
        await  this.departmentDropdwn.selectOption(data.ipd.department)
        await this.bedDropdwn.click()
          await this.page.keyboard.press("ArrowDown")
         await this.page.keyboard.press("Enter")
        await this.diagnosis.fill(data.ipd.diagnosis)
       // await
        await this.submitButton.click()
    }

     async ipdDischarge(){

            await this.ipdqueuelink.click()
            await this.semi_private.click()
            await this.dischargeButton.click()
            await this.dischargeSummary.fill(data.ipd.summary)
            await this.waveofCheckbox.click()
            //await page.waitForTimeout(1000)
            await this.typedischarge.fill(data.ipd.discharge)
            await this.confimDischargeButton.click()
           // await this.payButton.click()
            //await this.recredpayButton.click()
            
        }



}
export default IPDPage
