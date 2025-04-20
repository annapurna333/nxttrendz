import {useNavigate,useParams} from 'react-router-dom'
import React from 'react'

const withNavigation = WrappedComponent => {
  return props => {
    const navigate = useNavigate()
    const params = useParams();
    return <WrappedComponent {...props} navigate={navigate} params={params}/>
  }
}

export default withNavigation