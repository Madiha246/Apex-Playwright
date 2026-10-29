class DashboardPage{
    constructor(page){
        this.dashboardtextheading=page.locator("//p[text()='APEX Demo Hospital']")
        this.dashboardrecentadmissions=page.locator("//h2[text()='Recent Admissions']")

    }
}
export default DashboardPage