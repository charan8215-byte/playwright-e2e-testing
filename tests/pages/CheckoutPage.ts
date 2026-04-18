import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async checkout(firstName: string, lastName: string, zip: string) {
    await this.page.locator('[data-test="checkout"]').click();

    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zip);

    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}