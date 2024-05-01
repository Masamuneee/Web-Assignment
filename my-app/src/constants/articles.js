const publishStatus = {
  published: "success",
  scheduled: "warning",
  rejected: "danger",
  draft: "default",
  pending: "secondary",
}

const columns = [
  { name: "ID", uid: "articleID" },
  { name: "TITLE", uid: "title" },
  // { name: "CATEGORY", uid: "category" },
  { name: "DATE_PUBLISHED", uid: "datePublished" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
]

const articles = [
  {
    articleID: 1,
    title: "Taylor Swift's 'THE TORTURED POETS DEPARTMENT': Records Broken",
    shortDescription: "The 31-track LP sold 1.4 million copies in its first day.",
    content: "yet to have",
    datePublished: "April 24th, 2024",
    category: "Music",  
    status: "published",
  },
  {
    articleID: 2,
    title: "Taylor Swift Welcomed Fans to 'THE TORTURED POETS DEPARTMENT' in Sweet Hand-Written Record Store Day Note",
    shortDescription: "\"It's my goal to create a memento you'll want to keep forever,\" she wrote.",
    content: "yet to have",
    datePublished: "April 24th, 2024",
    category: "Music",  
    status: "published",
  },
  {
    articleID: 3,
    title: "The Starting Line Reacts to Taylor Swift's 'The Black Dog' Lyric About the Band's Song Being 'Intertwined' in Her Relationship",
    shortDescription: "Swift's rumored ex Matty Healy covered The Starting Line's \"The Best of Me\" on tour with The 1975 last spring.",
    content: "yet to have",
    datePublished: "April 24th, 2024",
    category: "Music",  
    status: "published",
  }
]

export { columns, articles, publishStatus };