import { test, expect } from "@playwright/test"

test.describe("/", async () => {
  test("should have a link to home.", async ({ page }) => {
    await page.goto("/")
    const headerTitleLink = page.getByRole("link", { name: "M" })
    await expect(headerTitleLink).toHaveAttribute("href", "/")
  })

  test("should have a link to a post.", async ({ page }) => {
    await page.goto("/")
    await page.click('text="UIのテストについての神話"')
    await expect(page).toHaveURL("/posts/ui-testing-myth-translation-ja/")

    const headline = await page.locator("h1").first()
    await expect(headline).toContainText("UIのテストについての神話")
  })
})
