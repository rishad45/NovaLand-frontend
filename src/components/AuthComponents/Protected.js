import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Protected = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const admin = useSelector((state) => state.admin)
  return (
    <div>Protected</div>
  )
}

export default Protected