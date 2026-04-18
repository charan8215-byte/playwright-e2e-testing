import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('valid login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.doLogin('standard_user', 'secret_sauce');
  await login.verifySuccess();
});

test('invalid login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.doLogin('wrong', 'wrong');
  await login.verifyError();
});