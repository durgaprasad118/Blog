# GitHub Comments Setup Guide

This guide will help you integrate real GitHub comments into your blog using **giscus** (GitHub Discussions).

## What is Giscus?

Giscus is a comment system powered by GitHub Discussions. It allows visitors to comment on your blog posts using their GitHub accounts, and all comments are stored in your GitHub repository's Discussions section.

## Setup Steps

### 1. Create/Use a GitHub Repository

- If you haven't already, create a GitHub repository for your blog
- Make sure it's **public** (giscus only works with public repos)

### 2. Enable GitHub Discussions

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check the box for **Discussions**

### 3. Get Your Repository Information

Visit [giscus.app](https://giscus.app) and:

1. **Enter your repository**: `username/repository-name`
2. **Choose Discussion Category**: Select "General" or create a new category
3. **Configure settings** as desired
4. **Copy the configuration** that giscus generates

### 4. Update Your Blog Configuration

In `app/components/GitHubComments.js`, replace these placeholders:

```javascript
// Replace these with your actual values:
script.setAttribute('data-repo', 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME');
script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
```

### 5. How to Get Your IDs

#### Repository ID:
Run this GraphQL query on [GitHub's GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer):
```graphql
{
  repository(owner: "YOUR_USERNAME", name: "YOUR_REPO_NAME") {
    id
  }
}
```

#### Category ID:
```graphql
{
  repository(owner: "YOUR_USERNAME", name: "YOUR_REPO_NAME") {
    discussionCategories(first: 10) {
      nodes {
        id
        name
      }
    }
  }
}
```

### 6. Example Configuration

Here's an example of what your configuration might look like:

```javascript
script.setAttribute('data-repo', 'johndoe/my-blog');
script.setAttribute('data-repo-id', 'R_kgDOGxT2_A');
script.setAttribute('data-category', 'General');
script.setAttribute('data-category-id', 'DIC_kwDOGxT2_M4COD6u');
```

## Features You Get

✅ **GitHub Authentication**: Users sign in with GitHub  
✅ **Real GitHub UI**: Actual GitHub comment interface  
✅ **Markdown Support**: Full markdown formatting  
✅ **Reactions**: Emoji reactions like on GitHub  
✅ **Email Notifications**: Users get notified of replies  
✅ **Moderation**: You can moderate comments in GitHub Discussions  
✅ **Dark/Light Theme**: Automatically matches your site theme  

## Benefits

- **No Database Needed**: Comments stored in GitHub
- **Free**: No cost, unlimited comments
- **Spam Protection**: GitHub's built-in spam protection
- **SEO Friendly**: Comments are indexed by search engines
- **Developer Friendly**: Perfect for technical blogs

## Quick Setup (Alternative)

If you want to get started quickly, you can also:

1. Go to [giscus.app](https://giscus.app)
2. Enter your repository details
3. Copy the generated `<script>` tag
4. Replace the entire `useEffect` content in `GitHubComments.js` with the giscus-generated code

## Troubleshooting

- **Comments not loading**: Check that your repo is public and Discussions are enabled
- **Wrong theme**: The theme automatically matches your site's dark/light mode
- **Categories**: Make sure the discussion category exists in your repo

## Next Steps

After setup:
1. Test commenting on a blog post
2. Check your GitHub repository's Discussions tab
3. Customize the appearance if needed
4. Share your blog!

---

**Need help?** Check the [giscus documentation](https://giscus.app) or [GitHub Discussions docs](https://docs.github.com/en/discussions). 