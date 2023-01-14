// adapted from https://github.com/vuejs/blog/

import walkSync from 'walk-sync';
import matter from 'gray-matter';
import path from 'path';
import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';
import { Feed } from 'feed';
import { fileURLToPath } from 'url';

const blogUrl = "https://silverthorn.blog";
const dirname = path.dirname(fileURLToPath(import.meta.url));
const postDir = path.resolve(dirname, '../posts');

function getPost(file, postDir) {
  const fullePath = path.join(postDir, file);
  const src = readFileSync(fullePath, 'utf-8');
  const { data } = matter(src);

  const post = {
    title: data.title,
    href: `/posts/${file.replace(/index\.md$/, '')}`,
    html: `dist/posts/${file.replace(/\.md$/, '.html')}`,
    date: new Date(data.date),
    data: data,
  }

  return post;
}

const posts = walkSync(postDir, { globs: ['*/index.md'] })
  .filter((file) => /\.md$/.test(file))
  .map((file) => getPost(file, postDir))
  .sort((a, b) => b.date - a.date);

const feed = new Feed({
  title: 'Bryan Silverthorn',
  description: 'They sounded like good ideas at the time',
  id: blogUrl,
  link: blogUrl,
  language: 'en',
  favicon: `${blogUrl}/favicon.ico`,
  copyright: 'Copyright © Bryan Silverthorn, 2022–present',
});

posts.forEach((post) => {
  const file = path.resolve(dirname, post.html);
  const rendered = readFileSync(file, 'utf-8');
  const $ = cheerio.load(rendered);

  // manually munge contents to improve RSS friendliness
  $("a.header-anchor").remove();
  $("h2#notes").remove();
  $("sup.footnote-ref a").each((i, e) => {
    $(e).replaceWith($(e).text());
  });
  $("a.footnote-backref").remove();

  // generate the feed item
  const content = $("main").html();

  if (!content) {
    throw new Error(`no content match found for file ${post.href}`);
  }

  feed.addItem({
    title: post.title,
    id: `${blogUrl}${post.href}`,
    link: `${blogUrl}${post.href}`,
    description: post.data.description,
    content: content,
    date: post.data.date,
  });
});

writeFileSync(path.resolve(dirname, 'dist/feed.rss'), feed.rss2());
