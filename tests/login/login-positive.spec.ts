import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { users } from "../../test-data/users";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test("LGN-001 - Login berhasil dengan credential valid", async ({ page }) => {
  await loginPage.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
