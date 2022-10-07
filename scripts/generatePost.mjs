import { writeFile } from "node:fs/promises"
import path from "node:path"
import inquirer from "inquirer"

inquirer
  .prompt([
    {
      name: "title",
      message: "Enter post title.",
      default: "",
    },
    {
      name: "slug",
      message: "Enter slug.",
      default: "",
    },
    {
      name: "draft",
      message: "Choose draft or not.",
      type: "confirm",
    },
    {
      name: "date",
      message: "Enter date",
      default: () => {
        const date = new Date()
        const month = `${date.getMonth() + 1}`.padStart(2, "0")
        const day = `${date.getDate()}`.padStart(2, "0")

        return `${date.getFullYear()}-${month}-${day}`
      },
    },
  ])
  .then((answers) => {
    writeFile(
      path.join(process.cwd(), `/content/${answers["slug"]}.mdx`),
      `---
title: ${answers["title"]}
slug: ${answers["slug"]}
date: "${answers["date"]}"
draft: ${answers["draft"]}
tags: []
---
`
    )
  })
