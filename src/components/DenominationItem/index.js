import './index.css'

const DenominationsList = props => {
  const {list, onButton} = props
  const {id, value} = list
  const deleteThis = () => {
    onButton(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={deleteThis}>
        {value}
      </button>
    </li>
  )
}

export default DenominationsList
