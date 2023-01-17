import './skeleton.scss'

const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`
  return (
    <div className={ classes }> SkeletonElement </div>
  )
}

export default SkeletonElement