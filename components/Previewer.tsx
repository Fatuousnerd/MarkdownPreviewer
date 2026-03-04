"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent } from "./ui/card";
import { useMdStore } from "@/lib/zustand/stores";
import { MessageContent, MessageResponse } from "./ai-elements/message";

const Previewer = () => {
  const { md } = useMdStore();

//   if (!md) return <p className="flex-1">Loading...</p>;
  return (
    <>
      <Card className="flex-1 p-1">
        <CardContent>
          <MessageContent className="h-[70vh] overflow-y-scroll">
            <MessageResponse>{md}</MessageResponse>
          </MessageContent>
        </CardContent>
      </Card>
    </>
  );
};

export default Previewer;
