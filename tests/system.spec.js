
import {expect, test} from "./fixtures/fixtures"


test("patient registration+laborder", async ({ homePage, patientPage, laboratoryPage }) => {
    await homePage.newPatient.click();

    await patientPage.createPatient();
    await expect(patientPage.patientcreated).toBeVisible();

    await homePage.homeLink.click();
    await laboratoryPage.labOrder();
});

test("opd+ipd", async ({ opdPage, ipdPage }) => {
    await opdPage.opdVisit();
    await expect(opdPage.opdpatientexist).toBeVisible();

    await ipdPage.ipdVisit();
});

test("opd+emergency", async ({ opdPage, emergencyPage }) => {
    await opdPage.opdVisit();
    await expect(opdPage.opdpatientexist).toBeVisible();

    await emergencyPage.emergencyVisit();
    await emergencyPage.emergencyLink.click();

    await expect(emergencyPage.emergencypatientadmitcreatedsystem).toBeVisible();
});

// test("ipd+emergency", async ({ ipdPage, emergencyPage }) => {
//     await ipdPage.ipdVisit();

//     await emergencyPage.emergencyVisit();
// });

test("emergency+discharge", async ({ emergencyPage, ipdPage }) => {
    await emergencyPage.emergencyVisit();

    await ipdPage.ipdDischarge();
});

test.afterEach("logout", async ({ logoutPage }) => {
    await logoutPage.logout();
});

// test("patient registration+laborder", async({loggedIn})=>{
//     let homePage =new HomePage(loggedIn)
//     await homePage.newPatient.click()
//     let patientPage =new PatientPage(loggedIn)
//     await patientPage.createPatient()
//     await expect(patientPage.patientcreated).toBeVisible()
//     await homePage.homeLink.click()
//     let laboratoryPage=new LaboratoryPage(loggedIn)
//     await laboratoryPage.labOrder()
  

// })

// test("opd+ipd", async({loggedIn})=>{
//       let opdPage=new OPDPage(loggedIn)
//     await opdPage.opdVisit()
//     //await page.waitForTimeout(3000)
//    await expect(opdPage.opdpatientexist).toBeVisible();
//     let ipdPage=new IPDPage(loggedIn)
//     await ipdPage.ipdVisit() 

// })

// test("opd+emergency", async({loggedIn})=>{
//     let opdPage=new OPDPage(loggedIn)
//     await opdPage.opdVisit()
//     //await page.waitForTimeout(1000)
//    await expect(opdPage.opdpatientexist).toBeVisible();
//     let emergencyPage=new EmergencyPage(loggedIn)
//       await emergencyPage.emergencyVisit()
//       //await page.waitForTimeout(4000)
//       await emergencyPage.emergencyLink.click()
//      await expect(emergencyPage.emergencypatientadmitcreatedsystem).toBeVisible()

// })

// test("ipd+emergency", async({loggedIn})=>{
//     let ipdPage=new IPDPage(loggedIn)
//     await ipdPage.ipdVisit() 
     
//     let emergencyPage=new EmergencyPage(loggedIn)
   
//       await emergencyPage.emergencyVisit()
     
    
// })

// test("emergency+discharge", async({loggedIn})=>{
    
//     let emergencyPage=new EmergencyPage(loggedIn)
//       await emergencyPage.emergencyVisit()
  
//       let ipdPage=new IPDPage(loggedIn)
//     await ipdPage.ipdDischarge()
//  //   await expect(ipdPage.totalDue).toBeVisible()
     
// })


// test.afterEach("logout",async({loggedIn})=>{
//      let logoutPage=new Logout(loggedIn)
//      await logoutPage.logout()
// })