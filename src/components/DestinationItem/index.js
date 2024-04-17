import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="destinationItem-container">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
