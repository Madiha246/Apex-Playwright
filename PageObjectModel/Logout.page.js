class Logout{
    constructor(page){
        this.logoutadmin=page.locator("//span[text()='Demo Administrator']")
        this.logoutButtn=page.locator("//button[text()='Logout']")
    }
    async logout(){
   
       await this.logoutadmin.click()
       await this.logoutButtn.click()
    }

}
export default Logout