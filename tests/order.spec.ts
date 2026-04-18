import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/inventoryPage';
import { CheckoutPage } from './pages/checkoutPage';

test('complete order flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.doLogin('standard_user', 'secret_sauce');

  await inventory.addproducts();
  await inventory.verifyCartCount(2);
  await inventory.gotoCart();

  await checkout.checkout('Sai', 'Charan', '12345');
  await checkout.verifyOrderSuccess();
});