import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"
import "@code-hike/mdx/dist/index.css"
import Link from "next/link"
import { IconBrandGithub, IconCircleDotted, IconRss } from "@tabler/icons"
import { Router } from "next/router"
import { useEffect, useState } from "react"
import { REPO_URL, SITE_NAME } from "../config"
import { Post } from "../types/Post"

const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true)
    })

    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false)
    })

    Router.events.on("routeChangeError", () => {
      setIsLoading(false)
    })
  }, [])

  return {
    isLoading,
  }
}

function MyApp({
  Component,
  pageProps,
}: AppProps<
  | {
      source: {
        compiledSource: string
        frontMatter: Record<string, unknown>
        scope: Post["data"]
      }
      frontMatter: {
        title: string
        draft: boolean
        date: string
        tags: string[]
      }
    }
  | {
      posts: Post[]
    }
>) {
  const { isLoading } = usePageLoading()
  console.log(pageProps)

  return (
    <>
      <Head>
        <title>
          {"frontMatter" in pageProps
            ? `${pageProps.frontMatter.title} | ${SITE_NAME}`
            : SITE_NAME}
        </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-3xl w-full md:w-2/3 mx-auto py-4 px-4 md:py-8 md:px-8">
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="inline-flex justify-center items-center w-8 h-8 border border-solid border-primary text-primary hover:bg-primary hover:text-base-100 hover:border-primary-focus"
          >
            {isLoading ? (
              <span className="animate-spin text-primary hover:bg-primary hover:text-base-100 hover:border-primary-focus">
                <IconCircleDotted size={16} />
              </span>
            ) : (
              "M"
            )}
          </Link>
        </div>
      </header>
      <div className="max-w-3xl w-full md:w-2/3 mx-auto py-4 px-4 md:py-8 md:px-8">
        <Component {...pageProps} />
      </div>
      <footer className="max-w-3xl w-full md:w-2/3 mt-auto mx-auto py-4 px-4 md:py-8 md:px-8">
        <div className="flex justify-center gap-2">
          <a href="/rss/feed.json" className="inline-flex">
            <IconRss />
          </a>
          <a
            href={REPO_URL}
            className="inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub />
          </a>
        </div>
      </footer>
    </>
  )
}

export default MyApp
