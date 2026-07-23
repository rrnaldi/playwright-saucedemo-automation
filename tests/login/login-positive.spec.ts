import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test("LGN-001 - Login berhasil dengan credential valid", async ({ page }) => {
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
