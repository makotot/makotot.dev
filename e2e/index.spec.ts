import { test, expect } from "@playwright/test"

test.describe("/", async () => {
  test("should have a link to home.", async ({ page }) => {
    await page.goto("/")
    const headerTitleLink = page.getByRole("link", { name: "M" })
    await expect(headerTitleLink).toHaveAttribute("href", "/")
  })
})
