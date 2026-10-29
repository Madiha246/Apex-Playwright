import data from "../testData/hospitalData.json"

class EmergencyPage{
    
    constructor(page){
        this.page=page
        this.emergencyLink=page.locator("//span[text()='Emergency']")
        this.triageButton=page.getByRole("button",{name:"🚨 New Triage"})
        this.emergencyPatient=page.locator("//input[@class='input']")
        this.triageLevelDropdwn=page.locator("//select[@name='triage_level']")
        this.chiefComplaint=page.getByPlaceholder("Chief complaint")
        this.submitButton=page.locator("//button[@type='submit']")

        this.emergencypatientadmitcreated=page.locator("td").filter({ hasText: "ER-1025" });
        this.emergencypatientadmitcreatedsystem=page.locator("td").filter({ hasText: "ER-1038" });
    }

    async emergencyVisit(){
        await this.emergencyLink.waitFor({ state: "visible" });
        await this.emergencyLink.click()
        await this.triageButton.click()
    //      await this.emergencyPatient.waitFor({ state: "visible" });
    //        await this.page.getByText(data.emergency.patient, { exact: true }).waitFor({
    //     state: "visible"
    // });
    //     await this.emergencyPatient.click()
    //     await this.page.keyboard.press("ArrowDown")
    //       await this.page.keyboard.press("ArrowDown")
    //      await this.page.keyboard.press("Enter")
         //await this.page.waitForTimeout(4000)
       // await this.triageLevelDropdwn.selectOption(data.emergency.triage_level)
        await this.chiefComplaint.fill(data.emergency.chief_complaint)
        await this.submitButton.click()

}
}
export default EmergencyPage