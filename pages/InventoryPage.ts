import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  getBackpackButton() {
    return this.page.locator("#add-to-cart-sauce-labs-backpack");
  }

  getCartBadge() {
    return this.page.locator(".shopping_cart_badge");
  }

  getShoppingCart() {
    return this.page.locator(".shopping_cart_link");
  }

  async addBackpackToCart() {
    await this.getBackpackButton().click();
  }

  async openCart() {
    await this.getShoppingCart().click();
  }
}
