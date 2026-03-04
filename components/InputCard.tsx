"use client";

import { CornerDownLeft } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeEditor from "./CodeEditor";

const InputCard = () => {
  return (
    <>
      {/* <Card className="flex-1 p-1">
        <CardContent className="p-0">
          <InputGroup className="flex-1"> */}
            <CodeEditor/>
            {/* <InputGroupAddon align={"block-end"} className="border-t">
              <InputGroupText>Line 1, Column 1</InputGroupText>
              <InputGroupButton
                size={"sm"}
                className="ml-auto"
                variant={"default"}
              >
                Run
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon align={"block-start"} className="border-b">
              <InputGroupText>Markdown</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </CardContent>
      </Card> */}
    </>
  );
};

export default InputCard;
