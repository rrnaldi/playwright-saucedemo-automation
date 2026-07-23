import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

// LGN-002
test("LGN-002 - Login gagal karena password kosong", async () => {
  await loginPage.login("standard_user", "");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Password is required",
  );
});

// LGN-003
test("LGN-003 - Login gagal karena username kosong", async () => {
  await loginPage.login("", "secret_sauce");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required",
  );
});

// LGN-004
test("LGN-004 - Login gagal karena username dan password kosong", async () => {
  await loginPage.login("", "");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required",
  );
});

// LGN-005
test("LGN-005 - Login gagal karena password salah", async () => {
  await loginPage.login("standard_user", "pass123");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

// LGN-006
test("LGN-006 - Login gagal karena username salah", async () => {
  await loginPage.login("salah_user", "secret_sauce");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

// LGN-007
test("LGN-007 - Login gagal karena username dan password salah", async () => {
  await loginPage.login("salah_user", "pass123");

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
