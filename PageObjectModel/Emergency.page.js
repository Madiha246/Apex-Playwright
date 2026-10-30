
// import data from "../testData/hospitalData.json";

// class EmergencyPage {
//     constructor(page) {
//         this.page = page;

//         this.emergencyLink = page.locator("//span[text()='Emergency']");
//         this.triageButton = page.getByRole("button", {
//             name: "🚨 New Triage"
//         });

//         this.emergencyPatient = page.locator("input.input");
//         this.triageLevelDropdwn = page.locator(
//             "select[name='triage_level']"
//         );
//         this.chiefComplaint = page.getByPlaceholder("Chief complaint");
//         this.submitButton = page.locator("button[type='submit']");

//         // Prefer verifying the actual patient/record ID after saving.
//         this.emergencyTableRows = page.locator("tbody tr");
//     }

//     async emergencyVisit() {
//         await this.emergencyLink.waitFor({ state: "visible" });
//         await this.emergencyLink.click();

//         await this.triageButton.click();

//         await this.emergencyPatient.waitFor({ state: "visible" });

//         // Select a patient using the application's actual dropdown behavior.
//         // Update this step after confirming how the patient field works.
//         await this.emergencyPatient.click();
//         await this.page.keyboard.press("ArrowDown");
//         await this.page.keyboard.press("Enter");

//         await this.triageLevelDropdwn.selectOption(
//             data.emergency.triage_level
//         );

//         await this.chiefComplaint.fill(
//             data.emergency.chief_complaint
//         );

//         await this.submitButton.click();

//         // Wait for the submission to finish; verify the resulting record
//         // in the test after confirming the application's success behavior.
//     }
// }

// export default EmergencyPage;





import data from "../testData/hospitalData.json"

class EmergencyPage{
    
    constructor(page){
        this.page=page
        this.emergencyLink=page.getByRole('link', { name: 'Emergency' })
        this.triageButton=page.getByRole("button",{name:"🚨 New Triage"})
        this.emergencyPatient=page.locator("//input[@class='input']")
        this.triageLevelDropdwn=page.locator("//select[@name='triage_level']")
        this.chiefComplaint=page.getByPlaceholder("Chief complaint")
        this.submitButton=page.locator("//button[@type='submit']")

        this.emergencypatientadmitcreated=page.locator("td").filter({ hasText: data.emergency_created });
        this.emergencypatientadmitcreatedsystem=page.locator("td").filter({ hasText: data.emergency_created_system} );
    }

    async emergencyVisit(){
        await this.emergencyLink.waitFor({ state: "visible" });
        await this.emergencyLink.click()
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