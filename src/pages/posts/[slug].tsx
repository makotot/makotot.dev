import path from "path"
import fs from "fs"
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { remarkCodeHike } from "@code-hike/mdx"
import { CH } from "@code-hike/mdx/components"
import theme from "shiki/themes/github-dark-dimmed.json"
import { Post } from "../../types/Post"

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context?.params ? context.params.slug : ""
  const filePath = path.join(process.cwd(), "/content/", `${slug}.mdx`)
  const source = fs.readFileSync(filePath, { encoding: "utf-8" })
  const { content, data } = matter(source)
  const postData = data as Post["data"]
  const mdxSource = await serialize(content, {
    scope: postData,
    mdxOptions: {
      rehypePlugins: [],
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            theme,
            lineNumbers: true,
            autoImport: false,
            showCopyButton: true,
          },
        ],
      ],
      useDynamicImport: true,
    },
  })

  if (postData.draft) {
    return {
      notFound: true,
      props: {
        source: mdxSource,
        frontMatter: postData,
      },
    }
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: postData,
    },
  }
}

export const getStaticPaths = async () => {
  const filePaths = fs
    .readdirSync(path.join(process.cwd(), "/content/"))
    .filter((path) => /\.mdx?$/.test(path))

  const paths = filePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

const PostPage = ({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <article className="prose mx-auto md:prose-lg">
      <h1>{frontMatter.title}</h1>
      <div className="text-sm">
        Published <time dateTime={frontMatter.date}>{frontMatter.date}</time>
      </div>
      <MDXRemote {...source} components={{ CH }} />
    </article>
  )
}

export default PostPage
