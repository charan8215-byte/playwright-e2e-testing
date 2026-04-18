import {Page,expect} from '@playwright/test'

export class LoginPage{
    constructor (private page: Page){}
    async goto(){
        await this.page.goto('https://www.saucedemo.com');
    } 

    async doLogin(username:string,password:string)
    {
         await this.page.locator('[data-test="username"]').fill(username);
         await this.page.locator('[data-test="password"]').fill(password);
         await this.page.locator('[data-test="login-button"]').click();
    }
    async verifySuccess()
    {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.page.locator('.inventory_list')).toBeVisible();

    }
    async verifyError()
    {
        const error = this.page.locator('[data-test="error"]');
        await expect(error).toBeVisible();
        await expect(error).toContainText('Username and password do not match');
    }


}

