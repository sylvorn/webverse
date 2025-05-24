import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";

export default () => (
  <NodeViewWrapper className="code-block">
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
);
