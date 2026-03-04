"use client";

import { useMdStore } from "@/lib/zustand/stores";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const { md, setMd } = useMdStore();

  return (
    <>
      <Editor
        height={"65vh"}
        width={'45vw'}
        defaultLanguage="Markdown"
        value={md as string}
        onChange={(val) => setMd(val as string)}
        theme="vs-dark"
      />
    </>
  );
};

export default CodeEditor;
