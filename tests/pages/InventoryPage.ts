import { Page,expect } from '@playwright/test';

export class InventoryPage{
    constructor(private page: Page){}
  
    async addproducts()
    {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        
    }
    async verifyCartCount(count: number) {
    await expect(this.page.locator('[data-test="shopping-cart-badge"]'))
      .toHaveText(String(count));
    }

    async gotoCart()
    {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
        await expect(this.page).toHaveURL(/cart/);
    }
}