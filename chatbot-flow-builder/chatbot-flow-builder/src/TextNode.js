import React from "react";
import { Handle, Position } from "reactflow";

function TextNode({ data }) {
  return (
    <div className="text-node">
      <div className="text-node-header">Send Message</div>
      <div className="text-node-body">{data.label}</div>

      {/* Handles for connecting edges */}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export default TextNode;
