import React, { useState } from "react";
import { marked } from 'marked';
import { FaCopy, FaDownload, FaTrash, FaCode } from 'react-icons/fa';

function Engine() {
  const defaultMarkdown = `
# Heading 1

## Heading 2

[Google](https://www.google.com)

\`inline code\`

\`\`\`
code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [showHtml, setShowHtml] = useState(false);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const renderMarkdown = () => {
    marked.setOptions({
      breaks: true
    });
    return { __html: marked(markdown) };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    alert("Markdown Copied to Clipboard ✅");
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "markdown.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearEditor = () => {
    setMarkdown("");
  };

  const toggleHtmlView = () => {
    setShowHtml(!showHtml);
  };

  return (
    <>
      <div className="container font-mono flex flex-col border-2 max-h-screen gap-10 p-[20px] m-10 mt-5 mx-auto mb-0 bg-transparent w-300 rounded-lg shadow-lg shadow-blue-500/50 ring-1">
        <div className="flex h-[450px] gap-5">
          {/* Input Section */}
          <div className="container1 m-3 p-5 w-1/2 h-120 border-2 bg-[#F1F5F9] rounded-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-900">
            <h2 className="border-2 bg-[#172554] text-white rounded-md h-8">Input</h2>
            <textarea
              id="editor"
              value={markdown}
              onChange={handleChange}
              className="w-full h-96 m-2 mx-auto p-2 outline-none resize-none bg-transparent text-black"
              placeholder="Enter markdown here..."
            />
          </div>

          {/* Preview Section */}
          <div className="container2 m-3 p-5 w-1/2 h-120 border-2 bg-[#F1F5F9] rounded-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-900">
            <h2 className="border-2 bg-[#172554] text-white rounded-md h-8">Preview</h2>
            <div
              id="preview"
              className="w-full h-[400px] m-2 p-4 prose prose-lg overflow-y-auto"
              dangerouslySetInnerHTML={renderMarkdown()}
            />

          </div>
            {/* {showHtml && (
              <div className=" m-3 p-5 h-120 w-auto border-2 bg-[#F1F5F9] rounded-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-900">
                <pre>{marked(markdown)}</pre>
              </div>
            )} */}

            {/* Raw HTML Section (Toggled) */}
          {showHtml && (
            <div className="container3 m-3 p-5 w-1/3 h-120 border-2 bg-[#F1F5F9] rounded-xl shadow-lg shadow-blue-500/50 ring-2 ring-blue-900">
              <h2 className="border-2 bg-[#172554] text-white rounded-md h-8">Raw HTML</h2>
              <pre className="w-full h-[400px] m-2 p-4 overflow-y-auto">{marked(markdown)}</pre>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-6 mt-10 text-white">
          <button onClick={copyToClipboard} className="bg-blue-600 p-2 rounded-md cursor-pointer"><FaCopy /></button>
          <button onClick={downloadMarkdown} className="bg-green-600 p-2 rounded-md cursor-pointer"><FaDownload /></button>
          <button onClick={clearEditor} className="bg-red-600 p-2 rounded-md cursor-pointer"><FaTrash /></button>
          <button onClick={toggleHtmlView} className="bg-purple-600 p-2 rounded-md cursor-pointer"><FaCode /></button>
          <p className="text-sm mt-3 text-white">Word Count: {markdown.split(/\s+/).filter(Boolean).length} | Characters: {markdown.length}</p>
        </div>
      </div>
    </>
  );
}

export default Engine;
