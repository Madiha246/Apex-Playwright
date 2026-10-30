import testData from "../testData/login.json"
class Login{
    constructor(page){
        this.page = page 
        this.username=page.locator("#login-username")
        this.password=page.locator("#login-password")
        this.signinbutton=page.getByRole("button",{name:"Sign In"})
    }
    async login(){
        await this.page.goto(process.env.BASE_URL)
        await this.username.fill(process.env.TEST_USERNAME)
        await this.password.fill(process.env.PASSWORD)
        await this.signinbutton.click() 
    }
}
export default Login