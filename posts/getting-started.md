---
title: "Getting Started with Your New Blog"
date: "2024-01-05"
excerpt: "Everything you need to know to start blogging with this markdown-powered platform. Set up your first post in minutes!"
tags: ["getting-started", "tutorial", "setup"]
author: "Blog Author"
readTime: 4
displayonmainpage: "Featured"
---

Congratulations on setting up your new markdown-powered blog! This guide will help you get up and running with your first posts.

## Quick Start

Your blog is already configured and ready to use. Here's what you need to know:

### File Structure

```
your-blog/
├── posts/           # Your markdown files go here
├── public/          # Store your images here
├── app/            # Next.js app code
└── lib/            # Blog utilities
```

### Creating Your First Post

1. Create a new file in the `posts` directory
2. Name it something like `my-first-post.md`
3. Add frontmatter at the top
4. Write your content in markdown

## Frontmatter Fields

Your posts need frontmatter (metadata) at the top. Here are the available fields:

```yaml
---
title: "Your Post Title"        # Required
date: "2024-01-05"             # Required (YYYY-MM-DD format)
excerpt: "Brief description"    # Optional but recommended
tags: ["tag1", "tag2"]         # Optional
author: "Your Name"            # Optional
readTime: 5                    # Optional (minutes)
displayonmainpage: "Custom"    # Optional (custom text to show)
---
```

### Required Fields
- `title`: The title of your post
- `date`: Publication date in YYYY-MM-DD format

### Optional Fields
- `excerpt`: A brief description shown on the homepage
- `tags`: Array of tags for categorization
- `author`: Author name
- `readTime`: Estimated reading time in minutes
- `displayonmainpage`: Custom text to show instead of first tag

## Adding Images

### Step 1: Add Images to the Public Folder
Place your images in the `public` directory:
```
public/
├── hero-image.jpg
├── diagram.png
└── screenshot.gif
```

### Step 2: Reference Images in Markdown
```markdown
![Alt text](/your-image.jpg)
```

The images will be automatically served by Next.js and display correctly.

## Example Post

Here's a complete example of a blog post:

```markdown
---
title: "My Amazing Journey"
date: "2024-01-05"
excerpt: "Join me as I share the incredible adventure that changed my perspective on life."
tags: ["personal", "journey", "inspiration"]
author: "Jane Doe"
readTime: 3
displayonmainpage: "Must Read"
---

# My Amazing Journey

Last year, I embarked on a journey that would change my life forever...

## The Beginning

It all started when I decided to...

![Beautiful landscape](/journey-photo.jpg)

## What I Learned

Through this experience, I discovered:

- The importance of stepping outside your comfort zone
- How travel broadens your perspective
- The value of human connections

## Conclusion

This journey taught me that...
```

## Tips for Success

### 1. Write Regularly
Consistency is key to building an audience. Try to publish new content regularly.

### 2. Use Descriptive Filenames
Name your markdown files descriptively:
- ✅ `introduction-to-react-hooks.md`
- ❌ `post1.md`

### 3. Optimize Your Images
- Use appropriate file formats (JPEG for photos, PNG for graphics)
- Compress images before uploading
- Use descriptive alt text

### 4. Preview Your Posts
Check how your posts look by running the development server:
```bash
npm run dev
```

### 5. Organize with Tags
Use consistent tags to help readers find related content:
- Keep tags lowercase
- Use hyphens for multi-word tags
- Be specific but not too narrow

## Customization

Want to customize your blog further? Here are some ideas:

- **Styling**: Edit `app/globals.css` to change colors and fonts
- **Layout**: Modify `app/layout.js` for different header/footer designs
- **Homepage**: Update `app/page.js` to change how posts are displayed
- **Post Layout**: Edit `app/blog/[id]/page.js` for different post designs

## Getting Help

If you run into issues:

1. Check the console for error messages
2. Verify your markdown syntax
3. Ensure frontmatter is properly formatted
4. Make sure image paths are correct (images go in `public/` directory)

## What's Next?

Now that you know the basics:

1. Create your first post
2. Add some images to the `public` folder
3. Experiment with different markdown features
4. Share your blog with the world!

Ready to start writing? Create your first post and watch your blog come to life! 🚀 