import Markdown from 'marked-react'
import React from 'react'
import './Previewer.css'

export const Previewer = ({ input }) => {
  return (
    <div className="output">
      <Markdown>{input}</Markdown>
    </div>
  )
}
