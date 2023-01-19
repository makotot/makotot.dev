import { test, expect } from "@playwright/test"
import { getPosts } from "../src/utils/getPosts"

test.describe("/", async () => {
  test("should have a link to home.", async ({ page }) => {
    await page.goto("/")
    const headerTitleLink = page.getByRole("link", { name: "M" })
    await expect(headerTitleLink).toHaveAttribute("href", "/")
  })

  test("should have a link to a blog post.", async ({ page }) => {
    await page.goto("/")
    const posts = getPosts()
    await page.click(`text=${posts[0].data.title}`)
    await expect(page).toHaveURL(`/posts/${posts[0].slug}`)
    await expect(page.locator("h1")).toContainText(posts[0].data.title)
  })
})
