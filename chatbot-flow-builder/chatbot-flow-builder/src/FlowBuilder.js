import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import TextNode from "./TextNode";

const nodeTypes = { text: TextNode };

function FlowBuilder() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Add new Message Node
  const addMessageNode = () => {
    const newNode = {
      id: `${+new Date()}`,
      type: "text",
      position: { x: 250, y: 100 },
      data: { label: "New Message" },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  // ✅ Proper node change handler
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // ✅ Proper edge change handler
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleSave = () => {
    console.log("Saved Flow:", { nodes, edges });
    alert("Flow saved! Check console for output.");
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* Save Button */}
      <button className="save-btn" onClick={handleSave}>
        💾 Save Changes
      </button>

      {/* Nodes Panel */}
      <div className="dock">
        <div className="dock-header">Nodes Panel</div>
        <div className="node-card" onClick={addMessageNode}>
          💬 Message Node
        </div>
      </div>

      {/* React Flow Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default FlowBuilder;
