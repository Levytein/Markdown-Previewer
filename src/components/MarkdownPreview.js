import React, { useState, useEffect } from 'react';
import {marked} from 'marked';

const MarkdownPreview = () => {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!
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

There's also [links](https://www.youtube.com), and
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
![Hampter](https://images.unsplash.com/photo-1584553421349-3557471bed79?fit=fillmax&fm=jpg&ixid=MnwzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTY1ODk0Mjc1MQ&ixlib=rb-1.2.1&q=75)
`;

  const [markdownContent, setMarkdownContent] = useState(defaultMarkdown);

  const handleInputChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  /*return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Markdown to HTML Example</h1>
      <div className="flex flex-row gap-6">
          <textarea
            id="editor"
            value={markdownContent}
            onChange={handleInputChange}
            placeholder="Enter your markdown here..."
            className="w-1/2  p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
          
        <div
            id="preview"
            className="prose p-4 bg-white rounded-md shadow-sm overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: marked(markdownContent) }}
        ></div>
      </div>
    </div>
  );
  */
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Markdown to HTML Example</h1>
      <div className="flex flex-row gap-6 h-[calc(100vh-10rem)]">
        <div className="w-1/2 h-full">
          <textarea
            id="editor"
            value={markdownContent}
            onChange={handleInputChange}
            placeholder="Enter your markdown here..."
            className="w-full h-full p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black bg-white"
          />
        </div>
        <div className="w-1/2 h-full">
          <div
            id="preview"
            className="prose w-full h-full p-4 bg-white rounded-md shadow-sm overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: marked(markdownContent) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

  

export default MarkdownPreview;