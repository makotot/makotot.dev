import "../styles/globals.css"

import type { AppProps } from "next/app"
import Script from "next/script"
import Head from "next/head"
import "@code-hike/mdx/dist/index.css"
import Link from "next/link"
import { IconBrandGithub, IconCircleDotted, IconRss } from "@tabler/icons"
import { Router } from "next/router"
import { useEffect, useState } from "react"
import { REPO_URL, SITE_NAME, GA_ID } from "../config"
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
      <header className="mx-auto w-full max-w-3xl p-4 md:w-2/3 md:p-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex h-8 w-8 items-center justify-center border border-solid border-primary text-primary hover:border-primary-focus hover:bg-primary hover:text-base-100"
          >
            {isLoading ? (
              <span className="animate-spin text-primary hover:border-primary-focus hover:bg-primary hover:text-base-100">
                <IconCircleDotted size={16} />
              </span>
            ) : (
              "M"
            )}
          </Link>
        </div>
      </header>
      <div className="mx-auto w-full max-w-3xl p-4 md:w-2/3 md:p-8">
        <Component {...pageProps} />
      </div>
      <footer className="mx-auto mt-auto w-full max-w-3xl p-4 md:w-2/3 md:p-8">
        <div className="flex justify-center gap-2">
          <a href="/rss/feed.json" className="inline-flex">
            <IconRss aria-label="RSS" />
          </a>
          <a
            href={REPO_URL}
            className="inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub aria-label="Github" />
          </a>
        </div>
      </footer>

      {/*
        Global site tag (gtag.js) - Google Analytics
        Ref: https://nextjs.org/docs/messages/next-script-for-ga#using-gtagjs
       */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}

export default MyApp
