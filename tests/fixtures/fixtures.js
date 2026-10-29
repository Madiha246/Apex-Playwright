import{test as base,expect} from "@playwright/test"
import Login from "../../PageObjectModel/Login.page"
import HomePage from "../../PageObjectModel/Home.page"
import DashboardPage from "../../PageObjectModel/Dashboard.page"
import PatientPage from "../../PageObjectModel/Patient.page"
import AppointmentPage from "../../PageObjectModel/Appointment.page"
import OPDPage from "../../PageObjectModel/OPD.page"
import EmergencyPage from "../../PageObjectModel/Emergency.page"
import IPDPage from "../../PageObjectModel/IPD.page"
import LaboratoryPage from "../../PageObjectModel/Laboratory.page"


import Logout from "../../PageObjectModel/Logout.page"

export const test=base.extend({
    
    loggedIn:async({page},use)=>{
    let loginPage=new Login(page)
    await loginPage.login()
    await use(page)
   },

    homePage: async ({ loggedIn }, use) => {
        await use(new HomePage(loggedIn));
    },

    dashboardPage: async ({ loggedIn }, use) => {
        await use(new DashboardPage(loggedIn));
    },

    patientPage: async ({ loggedIn }, use) => {
        await use(new PatientPage(loggedIn));
    },

    appointmentPage: async ({ loggedIn }, use) => {
        await use(new AppointmentPage(loggedIn));
    },

    opdPage: async ({ loggedIn }, use) => {
        await use(new OPDPage(loggedIn));
    },

     ipdPage: async ({ loggedIn }, use) => {
        await use(new IPDPage(loggedIn));
    },

     emergencyPage: async ({ loggedIn }, use) => {
        await use(new EmergencyPage(loggedIn));
    },

     laboratoryPage: async ({ loggedIn }, use) => {
        await use(new LaboratoryPage(loggedIn));
    },

    logoutPage: async ({ loggedIn }, use) => {
        await use(new Logout(loggedIn));
    }
})
export{expect};