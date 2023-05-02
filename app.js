import React, { useState } from 'react';

const data = [
  {
    name: "Folder 1",
    type: "folder",
    children: [
      {
        name: "Subfolder 1.1",
        type: "folder",
        children: [
          {
            name: "File 1.1.1",
            type: "file"
          },
          {
            name: "File 1.1.2",
            type: "file"
          }
        ]
      },
      {
        name: "Subfolder 1.2",
        type: "folder",
        children: [
          {
            name: "File 1.2.1",
            type: "file"
          },
          {
            name: "File 1.2.2",
            type: "file"
          }
        ]
      }
    ]
  },
  {
    name: "Folder 2",
    type: "folder",
    children: [
      {
        name: "File 2.1",
        type: "file"
      },
      {
        name: "File 2.2",
        type: "file"
      }
    ]
  },{
    name: "File 0.1",
    type:"file"
  }
];


const File = ({ name }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <span>{name}</span>
    </div>
  );
};

const Folder = ({ name, contents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFolder}>
        {isOpen ? '-' : '+'} {name}
      </div>
      {isOpen && (
        <div style={{ marginLeft: 10 }}>
          {contents.map((item) =>
            item.type === 'file' ? (
              <File key={item.name} name={item.name} />
            ) : (
              <Folder key={item.name} name={item.name} contents={item.children} />
            )
          )}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Folder name="Root" contents={data} />
    </div>
  );
};

export default App;

