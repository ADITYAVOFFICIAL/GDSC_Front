import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  FiBold,
  FiItalic,
  FiLink,
  FiCode,
  FiCopy,
  FiImage,
} from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

const Toolbar = ({ insertText }) => {
  const handleInsertText = (text) => {
    insertText(text);
  };


  return (
    <div className="flex items-center gap-x-0.5 p-2 bg-#282c34 rounded-xl">
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("# ")}
      >
        H1
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("## ")}
      >
        H2
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("### ")}
      >
        H3
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("**")}
      >
        <FiBold size={20} />
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("_")}
      >
        <FiItalic size={20} />
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("[Link](url)")}
      >
        <FiLink size={20} />
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("![Alt Text](image-url)")}
      >
        <FiImage size={20} />
      </button>
      <button
        className="inline-flex items-center justify-center gap-x-2 px-2 py-1 text-sm font-semibold rounded-xl border border-transparent text-white hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={() => insertText("```code\n\n```")}
      >
        <FiCode size={20} />
      </button>
    </div>
  );
};

const MarkdownEditor = () => {
  const defaultMarkdown = `
  [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

  <p align="center">
  <a href="https://downedmarkdown.netlify.app/">
    <img alt = "Downed Logo" width="250" src = "https://raw.githubusercontent.com/ADITYAVOFFICIAL/GDSC_Front/main/public/favicon.png">
  </a>

  # Project Title

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders
## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
 ## Current Contributors 🔻
<div align="center"><a href="https://github.com/ADITYAVOFFICIAL/GDSC_Front/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ADITYAVOFFICIAL/GDSC_Front" />
</a>
</div>
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    toast.success("Markdown copied!");
  };

  const insertText = (text) => {
    const textarea = document.getElementById("markdownTextarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText =
      markdown.substring(0, start) + text + markdown.substring(end);
    setMarkdown(newText);
    textarea.focus();
    textarea.setSelectionRange(start + text.length, start + text.length);
  };

  const components = {
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={synthwave84}
          language={match[1]}
          PreTag="div"
          wrapLines={true}
          {...props}
        >
          {String(props.children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
    ul({ node, ...props }) {
      return <ul className="list-disc pl-5 mb-4 text-white" {...props} />;
    },
    ol({ node, ...props }) {
      return <ol className="list-decimal pl-5 mb-4 text-white" {...props} />;
    },
    li({ node, ...props }) {
      return <li className="mb-2" {...props} />;
    },
    h1({ node, ...props }) {
      return (
        <h1
          className="text-4xl font-bold mb-4 text-white border-b-2 pb-2 border-gray-400"
          {...props}
        />
      );
    },
    h2({ node, ...props }) {
      return (
        <h2
          className="text-3xl font-bold mb-4 text-white border-b-2 pb-2 border-gray-400"
          {...props}
        />
      );
    },
    h3({ node, ...props }) {
      return (
        <h3
          className="text-2xl font-bold mb-4 text-white border-b-2 pb-2 border-gray-400"
          {...props}
        />
      );
    },
    p({ node, ...props }) {
      return <p className="mb-4 para" {...props} />;
    },
    a({ node, ...props }) {
      return <a className="text-blue-500 hover:underline" {...props} />;
    },
    blockquote({ node, ...props }) {
      return (
        <blockquote
          className="text-white border-l-4 border-gray-400 pl-4 italic my-4"
          {...props}
        />
      );
    },
  };

  return (
    <div className="#282c34 flex flex-col h-scree md:flex-row">
      <div className="md:flex-1 flex flex-col">
        <div className="p-4 border-b md:border-r flex-none">
          <Toolbar insertText={insertText} />
        </div>
        <div className="p-4 border-b md:border-r border-gray-300 flex-1 relative">
          <textarea
            id="markdownTextarea"
            className="#282c34 w-full h-full p-2 border rounded-xl focus:outline-none resize-none"
            placeholder="Enter Markdown here..."
            value={markdown}
            onChange={handleMarkdownChange}
          ></textarea>
        </div>
      </div>
      <div className="markdown-output md:flex-1 p-4 relative overflow-auto">
        <ReactMarkdown
          components={components}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {markdown}
        </ReactMarkdown>
        <CopyToClipboard text={markdown} onCopy={handleCopy}>
          <button className="absolute top-4 right-4 bg-gray-500 hover:#282c34 transition-all p-2 rounded-lg text-black hover:text-gray-100 focus:outline-none">
            <FiCopy size={20} />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default MarkdownEditor;
