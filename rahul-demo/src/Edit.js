// import { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import './App.css';

// export default function App() {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   return (
//     <>
//       <Editor
//         apiKey='your-api-key'
//         onInit={(_evt, editor) => editorRef.current = editor}
//         initialValue="<p>This is the initial content of the editor.</p>"
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//             'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//             'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
//           ],
//           toolbar: 'undo redo | blocks | ' +
//             'bold italic forecolor | alignleft aligncenter ' +
//             'alignright alignjustify | bullist numlist outdent indent | ' +
//             'removeformat | help',
//           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//         }}
//       />
//       <button onClick={log}>Log editor content</button>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import './Edit.css';

const Toolbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setCurrentTime(currentTime);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleE2ButtonClick = () => {
    console.log('E2 button clicked');
  };

  const handleFxButtonClick = () => {
    console.log('fx button clicked');
  };

  const handleDmsButtonClick = () => {
    console.log('DMS button clicked');
  };

  const handleBackButtonClick = () => {
    console.log('Back button clicked');
  };

  const handleForwardButtonClick = () => {
    console.log('Forward button clicked');
  };

  const handleReloadButtonClick = () => {
    console.log('Reload button clicked');
  };

  const handleSearchButtonClick = () => {
    console.log('Search button clicked');
  };

  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <button className="toolbar-button" onClick={handleE2ButtonClick}>E2</button>
        <button className="toolbar-button" onClick={handleFxButtonClick}>fx</button>
        <button className="toolbar-button" onClick={handleDmsButtonClick}>DMS</button>
      </div>
      <div className="toolbar-group">
        <button className="toolbar-button" onClick={handleBackButtonClick}>&larr;</button>
        <button className="toolbar-button" onClick={handleForwardButtonClick}>&rarr;</button>
        <button className="toolbar-button" onClick={handleReloadButtonClick}>&circlearrow;</button>
      </div>
      <div className="toolbar-group">
        <span>{currentTime}</span>
      </div>
      <div className="toolbar-group">
        <button className="toolbar-button" onClick={handleSearchButtonClick}>Search</button>
        <input type="search" placeholder="Type here to search" />
      </div>
    </div>
  );
};

export default Toolbar;