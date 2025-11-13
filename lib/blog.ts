import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  tags: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

// Use React cache to prevent multiple reads during build/render
export const getAllPosts = cache((): BlogPost[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || '',
        category: data.category || '',
        image: data.image || '',
        tags: data.tags || [],
        content,
      } as BlogPost
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
})

export function getLatestPosts(count: number = 3): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, count)
}
