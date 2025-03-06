# Markdown Previewer

A simple React-based Markdown Previewer that allows users to write Markdown text in a textarea and see a live preview of the rendered HTML on the other side. This project uses **React** for the UI, **Tailwind CSS** for styling, and **Marked** to convert the Markdown input into HTML.

## Features

- **Live Markdown Preview**: Write Markdown in a text area, and the preview updates instantly on the right side.
- **Supports Common Markdown Syntax**: Including headings, lists, links, code blocks, images, and more.
- **Styled with Tailwind CSS**: Clean, modern design with responsive layout.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components with utility-first classes.
- **Marked**: A Markdown parser that converts input to HTML.

## How It Works

1. **Input Section**: On the left, there's a text area where users can input Markdown-formatted text.
2. **Preview Section**: On the right, the app uses the `marked` library to convert the Markdown input into HTML and display the rendered output in real-time.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Hussain-Tinwala/Markdown-Previewer
   cd markdown-previewer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` to see the Markdown Previewer in action.

## Usage

1. Type or paste Markdown text in the input section (left side).
2. The right section will automatically display the rendered HTML preview.
3. You can add headings, lists, links, images, and other Markdown elements to see how they are rendered.

## Example Markdown

```markdown
# Welcome to My Markdown Previewer

## Introduction

This is a **Markdown** previewer where you can input **Markdown** text and see it rendered in real-time.

### Features
- **Live preview** of your Markdown.
- **Code block** support.

---

## Code Example

Here’s an example of inline code: const x = 10;

And a code block:

---

## Lists

### Unordered List
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
- Item 3

### Ordered List
1. First
2. Second
3. Third

---

## Blockquote

> "The only way to do great work is to love what you do." - Steve Jobs

---

## Links

[Visit Google](https://www.google.com)

---

## Emphasis

This is **bold** text and *italic* text.

You can also combine **bold** and *italic* text.

---

## Horizontal Rule

---

## Tables

| Name   | Age | Occupation   |
|--------|-----|--------------|
| John   | 30  | Developer    |
| Jane   | 25  | Designer     |
| Alice  | 28  | Engineer     |

---

## Footnotes

This is a sentence with a footnote[^1].

[^1]: This is the footnote content.

---

## Strikethrough

This text is ~~strikethrough~~.

---

## Emoji

Here are some emojis for fun: 😄 🚀 🎉

 
```