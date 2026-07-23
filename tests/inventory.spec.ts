import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
});

test("Menambahkan Backpack ke Cart", async () => {
  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.getCartBadge()).toHaveText("1");
});
