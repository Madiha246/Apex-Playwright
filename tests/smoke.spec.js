import {test,expect} from "./fixtures/fixtures"

test("HomePage", async ({homePage }) => {
    await expect(homePage.active).toBeVisible();
});

test("Dashboard", async ({ homePage, dashboardPage }) => {
    await homePage.dashboardButton.click();

    await expect(dashboardPage.dashboardtextheading).toBeVisible();
    await expect(dashboardPage.dashboardrecentadmissions).toBeVisible();
});

test("Create Patient", async ({ homePage, patientPage }) => {
    await homePage.newPatient.click();

    await patientPage.createPatient();
});

// test("create appointment", async ({ appointmentPage }) => {
//     await appointmentPage.bookappointment();

//     await expect(appointmentPage.appointmentmsg()).toBeVisible();
// });

test("opd visit", async ({ opdPage }) => {
    await opdPage.opdVisit();
});

test.afterEach("logout", async ({ logoutPage }) => {
    await logoutPage.logout();
    console.log("logged out")
});












// test("HomePage", async({loggedIn})=>{

//    let homePage =new HomePage(loggedIn)
//    await expect(homePage.active).toBeVisible()

// })

// test("Dashboard",async({loggedIn})=>{
//  let homePage =new HomePage(loggedIn)
//  await homePage.dashboardButton.click()
//  let dashboardPage=new DashboardPage(loggedIn)
// await expect(dashboardPage.dashboardtextheading).toBeVisible()
// await expect(dashboardPage.dashboardrecentadmissions).toBeVisible()
// })

// test("Create Patient", async({loggedIn})=>{
// let homePage =new HomePage(loggedIn)
// await homePage.newPatient.click()
// let patientPage =new PatientPage(loggedIn)
// await patientPage.createPatient()
// })

// test("create appointment",async({loggedIn})=>{
//     let appointmentPage=new AppointmentPage(loggedIn)
//     await appointmentPage.bookappointment()
//     await expect(appointmentPage.appointmentmsg).toBeVisible()
//     await page.waitForTimeout(3000)

// })

// test("opd visit", async({loggedIn})=>{
//     let opdPage=new OPDPage(loggedIn)
//     await opdPage.opdVisit()
//     //await page.waitForTimeout(3000)
// })

// test.afterEach("logout",async({loggedIn})=>{
//      let logoutPage=new Logout(loggedIn)
//      await logoutPage.logout()
// })