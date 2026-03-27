'use client'

import { useCallback } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes = [
  // First Year
  { id: '1', position: { x: 50, y: 50 }, data: { label: 'Análisis Matemático I' }, className: 'bg-white border-2 border-primary-500 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '2', position: { x: 50, y: 150 }, data: { label: 'Álgebra y Geometría' }, className: 'bg-white border-2 border-primary-500 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '3', position: { x: 50, y: 250 }, data: { label: 'Física I' }, className: 'bg-white border-2 border-primary-500 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '4', position: { x: 50, y: 350 }, data: { label: 'Dibujo Topográfico' }, className: 'bg-white border-2 border-primary-500 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '5', position: { x: 50, y: 450 }, data: { label: 'Ingeniería y Soc.' }, className: 'bg-white border-2 border-primary-500 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '6', position: { x: 50, y: 550 }, data: { label: 'Química General' }, className: 'bg-white border-2 border-primary-500 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },

  // Second Year
  { id: '7', position: { x: 300, y: 50 }, data: { label: 'Análisis Matemático II' }, className: 'bg-white border-2 border-secondary-400 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '8', position: { x: 300, y: 150 }, data: { label: 'Física II' }, className: 'bg-white border-2 border-secondary-400 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '9', position: { x: 300, y: 250 }, data: { label: 'Estabilidad I' }, className: 'bg-white border-2 border-secondary-400 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '10', position: { x: 300, y: 350 }, data: { label: 'Materiales' }, className: 'bg-white border-2 border-secondary-400 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },

  // Third Year
  { id: '11', position: { x: 550, y: 50 }, data: { label: 'Matemática Sup.' }, className: 'bg-white border-2 border-blue-400 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
  { id: '12', position: { x: 550, y: 150 }, data: { label: 'Estabilidad II' }, className: 'bg-white border-2 border-blue-400 rounded-md p-3 max-w-[150px] text-center font-medium shadow-sm', type: 'default' },
]

const initialEdges = [
  // AM1 -> AM2, AM1 -> FIS2, AM1 -> MAT SUP
  { id: 'e1-7', source: '1', target: '7', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e1-8', source: '1', target: '8', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e2-7', source: '2', target: '7', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e3-8', source: '3', target: '8', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e2-9', source: '2', target: '9', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e3-9', source: '3', target: '9', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e6-10', source: '6', target: '10', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e7-11', source: '7', target: '11', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e9-12', source: '9', target: '12', animated: true, style: { stroke: '#9ca3af' } },
]

export function RoadmapCivil() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="w-full h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-secondary-800">Plan de Estudios: Ingeniería Civil</h2>
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary-500"></span>1° Año</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary-400"></span>2° Año</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-400"></span>3° Año</div>
        </div>
      </div>
      <p className="text-sm text-secondary-600">
        Hacé zoom, mové el lienzo y seguí las flechas para ver las correlatividades de las materias obligatorias.
      </p>
      <div className="w-full h-[600px] border border-secondary-200 rounded-xl overflow-hidden shadow-inner bg-secondary-50/50">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          className="bg-white"
        >
          <Controls />
          <MiniMap nodeStrokeColor={() => '#6366f1'} nodeColor={(n) => n.className?.includes('primary') ? '#fde047' : n.className?.includes('secondary') ? '#9ca3af' : '#93c5fd'} />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  )
}
