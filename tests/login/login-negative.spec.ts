import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { users } from "../../test-data/users";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

// LGN-002
test("LGN-002 - Login gagal karena password kosong", async () => {
  await loginPage.login(
    users.emptyPassword.username,
    users.emptyPassword.password,
  );

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Password is required",
  );
});

// LGN-003
test("LGN-003 - Login gagal karena username kosong", async () => {
  await loginPage.login(
    users.emptyUsername.username,
    users.emptyUsername.password,
  );

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required",
  );
});

// LGN-004
test("LGN-004 - Login gagal karena username dan password kosong", async () => {
  await loginPage.login(
    users.emptyCredential.username,
    users.emptyCredential.password,
  );

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required",
  );
});

// LGN-005
test("LGN-005 - Login gagal karena password salah", async () => {
  await loginPage.login(
    users.wrongPassword.username,
    users.wrongPassword.password,
  );

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

// LGN-006
test("LGN-006 - Login gagal karena username salah", async () => {
  await loginPage.login(
    users.wrongUsername.username,
    users.wrongUsername.password,
  );

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

// LGN-007
test("LGN-007 - Login gagal karena username dan password salah", async () => {
  await loginPage.login(
    users.invalidCredential.username,
    users.invalidCredential.password,
  );

  await expect(loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
