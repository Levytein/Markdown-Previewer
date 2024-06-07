import React, { useEffect, useState } from 'react';
import marked from 'marked';

const MarkdownPreview = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const parseMarkdown = () => {
      const processedContent = marked(markdownContent, { sanitize: true });
      setHtmlContent(processedContent);
      console.log("Processed Content:", processedContent);
    };

    parseMarkdown();
  }, [markdownContent]);

  const handleInputChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Markdown to HTML Example</h1>
      <textarea
        value={markdownContent}
        onChange={handleInputChange}
        placeholder="Enter your markdown here..."
        className="w-full p-4 mb-4 border rounded"
        rows="10"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">HTML Output</h2>
      <div
        className="p-6 bg-white rounded shadow-md"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default MarkdownPreview;
