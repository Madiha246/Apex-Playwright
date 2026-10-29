class HomePage{

    constructor(page){
        this.dashboardButton=page.locator("//span[text()='Dashboard']")
        this.active=page.getByRole("button",{name:"Online"})
        this.newPatient=page.locator("//button[@class='qa-tile']/descendant::span[text()='New Patient']")
        this.homeLink=page.locator("//span[text()='Home']")
    }

}
export default HomePage