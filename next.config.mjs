import withMDX from "@next/mdx"
import { remarkHeadingId } from "remark-custom-heading-id"
import remarkGfm from "remark-gfm"
import rehypeMdxCodeProps from "rehype-mdx-code-props"
import emoji from "remark-emoji"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { h, s } from "hastscript"

import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default bundleAnalyzer(
  withMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm, remarkHeadingId, emoji],
      rehypePlugins: [
        rehypeMdxCodeProps,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            content: [h("span", "ⓘ")],
            test: ["h3"],
          },
        ],
      ],
      // If you use `MDXProvider`, uncomment the following line.
      providerImportSource: "@mdx-js/react",
    },
  })(nextConfig)
)
