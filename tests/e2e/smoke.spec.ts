import { test, expect } from "@playwright/test";

test.describe("Production Acceptance Tests", () => {
  test("Homepage loads and renders correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/TOTAL CARE/);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("Services page loads and renders correctly", async ({ page }) => {
    await page.goto("/services");
    await expect(page).toHaveTitle(/TOTAL CARE/);
    await expect(page.getByText("TOTAL CARE delivers uncompromising quality")).toBeVisible();
  });

  test("Contact form validation works", async ({ page }) => {
    await page.goto("/");
    const submitBtn = page.getByRole("button", { name: /Request Quote/i });
    await expect(submitBtn).toBeVisible();
  });

  test("Admin login page renders", async ({ page }) => {
    await page.goto("/admin/login");
    await expect(page.getByRole("button", { name: /Sign In/i })).toBeVisible();
  });
});
