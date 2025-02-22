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