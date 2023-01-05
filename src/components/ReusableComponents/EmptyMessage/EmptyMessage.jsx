import './emptyMessage.scss'
const EmptyMessage = ({text}) => {
  return (
    <div className='emptyMessage'>
        <p className='emptytext'>{text}</p> 
    </div>
  )
}

export default EmptyMessage