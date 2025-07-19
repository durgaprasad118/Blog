# GitHub Comments Setup Guide

This guide will help you set up GitHub Discussions for comments on your blog posts.

## Step 1: Enable GitHub Discussions

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check the box for **Discussions**
5. Click **Save**

## Step 2: Get Your Repository ID

1. Go to [GitHub GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)
2. Run this query (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```graphql
{
  repository(owner: "YOUR_USERNAME", name: "YOUR_REPO_NAME") {
    id
    discussionCategories(first: 10) {
      nodes {
        id
        name
      }
    }
  }
}
```

3. Copy the repository ID (it will be a long string like `MDEwOlJlcG9zaXRvcnkzMjU0NTY3ODkw`)

## Step 3: Get Category ID (Optional)

If you want to use a specific discussion category:

1. In the same GraphQL query result, find the category you want to use
2. Copy its ID (e.g., `DIC_kwDOGm4PKc4CQh1q`)

## Step 4: Update the Component

Edit `app/components/GitHubComments.js` and replace these values:

```javascript
// Replace with your actual values
script.setAttribute('data-repo', 'YOUR_USERNAME/YOUR_REPO_NAME');
script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
script.setAttribute('data-category', 'General'); // or your preferred category
script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // optional
```

## Step 5: Remove Setup Instructions

After configuration, remove the yellow setup instructions box from the component.

## Example Configuration

```javascript
script.setAttribute('data-repo', 'johndoe/my-blog');
script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzMjU0NTY3ODkw');
script.setAttribute('data-category', 'General');
script.setAttribute('data-category-id', 'DIC_kwDOGm4PKc4CQh1q');
```

## Features

- ✅ **GitHub Authentication**: Users sign in with their GitHub account
- ✅ **Markdown Support**: Comments support full markdown formatting
- ✅ **Reactions**: Users can react to comments with emojis
- ✅ **Dark/Light Mode**: Automatically matches your blog's theme
- ✅ **Unique Discussions**: Each blog post gets its own discussion thread
- ✅ **Moderation**: Full moderation tools through GitHub

## Troubleshooting

- **Comments not showing**: Make sure Discussions are enabled in your repo
- **Authentication issues**: Check that the repository is public or you have proper permissions
- **Wrong repository**: Double-check the `data-repo` value matches your actual repository

Once configured, your blog will have a beautiful comment system powered by GitHub Discussions! 🎉 