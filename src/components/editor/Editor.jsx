import './Editor.css'

export const Editor = ({ placeHolder, onChange }) => {
  return (
    <textarea className="input" onChange={onChange}>
      {placeHolder}
    </textarea>
  )
}
