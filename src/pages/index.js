import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

export default function Home() {
  const initialMarkdown = `
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine === ' \\\`\\\`\\\` ' && lastLine === ' \\\`\\\`\\\` ') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![hampter](https://t1.uc.ltmcdn.com/en/posts/4/4/5/vegetables_hamsters_can_eat_7544_paso_0_orig.jpg)

  `;
  const [markdownContent, setMarkdownContent] = useState(initialMarkdown);
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const parseMarkdown = () => {
      if (markdownContent) {
        const processedContent = marked(markdownContent, { sanitize: false });
        setHtmlContent(processedContent);
        console.log("Processed Content:", processedContent);
      }
    };

    parseMarkdown();
  }, [markdownContent]);

  const handleInputChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Markdown to HTML Example</h1>
          <textarea id="editor"
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            placeholder="Enter your markdown here..."
            className="w-full p-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="10"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">HTML Output</h2>
          <div id="preview"
            className="prose prose-lg p-6 bg-gray-50 rounded shadow-inner"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
}
