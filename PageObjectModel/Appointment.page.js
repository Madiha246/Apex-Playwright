import data from "../testData/hospitalData.json"

class AppointmentPage{
    constructor(page){
        this.page=page
        this.appointmentlink=page.locator("//button[@class='qa-tile']/descendant::span[text()='Appointments']")
        this.bookappointmentbutton=page.locator("//button[text()='+ Book Appointment']")
        this.searchpatientbyname=page.getByPlaceholder("Search patient by name, UHID, or phone…")
        this.departmentdropdown=page.locator("#appt-dept")
        this.doctordropdown=page.locator("#appt-doc")
        this.date=page.locator("#appt-date")
        this.time=page.locator("#appt-time")
        this.reason=page.locator("#appt-reason")
        this.bookapptButton=page.getByRole("button",{name:"Book appointment",exact:true})

        this.appointmentmsg=page.locator("//div[contains(text(),'Appointment booked ')]")

    }

    async bookappointment(){
        
        await this.appointmentlink.click()
        await this.bookappointmentbutton.click() 
       // await this.searchpatientbyname.click()
        
        await this.searchpatientbyname.fill(data.appointment.name)
        //  await this.searchpatientbyname.fill(data.appointment.name)
        await this.searchpatientbyname.click()     
         await this.page.keyboard.press("ArrowDown")
       
        // await this.page.keyboard.press("ArrowDown")
          await this.page.keyboard.press("Enter")
        await this.departmentdropdown.selectOption(data.appointment.department)
        await this.doctordropdown.selectOption(data.appointment.doctor)
        await this.date.fill(data.appointment.date)
        await this.time.fill(data.appointment.time)
        await this.reason.fill(data.appointment.reason)
        await this.bookapptButton.click()

    }
}
export default AppointmentPage