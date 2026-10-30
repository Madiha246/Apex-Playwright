import {test,expect} from "./fixtures/fixtures"


test("RegisterPatient+bookAppointment", async ({ homePage, patientPage }) => {
    await homePage.newPatient.click();

    await patientPage.createPatient();

   // await expect(patientPage.patientcreated).toBeVisible();
});

test("OPDvisit+OPD Queue", async ({ opdPage }) => {
    await opdPage.opdVisit();

    await expect(opdPage.opdpatientexist).toBeVisible();
});

test("IPDvisit+IPDadmit", async ({ ipdPage }) => {
    await ipdPage.ipdVisit();
});

test("Emergency visit +asserted", async ({ emergencyPage }) => {
    await emergencyPage.emergencyVisit();

    //await expect(emergencyPage.emergencypatientadmitcreated).toBeVisible();
});

test("discharge", async ({ ipdPage }) => {
    await ipdPage.ipdDischarge();

   // await expect(ipdPage.totalDue).toBeVisible();
});

// test.beforeEach("login",async({page})=>{
   
//    let loginPage= new Login(page)
//    await loginPage.login()
 
// })

// test("RegisterPatient+bookAppointment", async({loggedIn})=>{
//     let homePage =new HomePage(loggedIn)
// await homePage.newPatient.click()
// let patientPage =new PatientPage(loggedIn)
// await patientPage.createPatient()
//     //await page.waitForTimeout(1000)
//     await expect(patientPage.patientcreated).toBeVisible()
// })

// test("OPDvisit+OPD Queue", async({loggedIn})=>{
//     let opdPage=new OPDPage(loggedIn)
//     await opdPage.opdVisit()
//     //await page.waitForTimeout(1000)
//    await expect(opdPage.opdpatientexist).toBeVisible();
// })

// test("IPDvisit+IPDadmit", async({loggedIn})=>{
//     let ipdPage=new IPDPage(loggedIn)
//     await ipdPage.ipdVisit() 

// })

// test("Emergency visit +asserted", async({loggedIn})=>{
//       let emergencyPage=new EmergencyPage(loggedIn)
//       await emergencyPage.emergencyVisit()
//       //await page.waitForTimeout(1000)
//      await expect(emergencyPage.emergencypatientadmitcreated).toBeVisible()

// })

// test("discharge",async({loggedIn})=>{
// let ipdPage=new IPDPage(loggedIn)
//     await ipdPage.ipdDischarge()
//     await expect(ipdPage.totalDue).toBeVisible()

// })

