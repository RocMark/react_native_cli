import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions as exampleActions } from '../store/reducers/example/exampleReducer'

const useExample = () => {
  const dispatch = useDispatch()
  const example_API = (data) => dispatch(exampleActions.example_AC(data))
  const exampleState = useSelector((store) => store.exampleState.exampleState)

  useEffect(() => {
    example_API({ test: 'test123' })
  }, [])

  return {
    api: {
      get: example_API,
    },
    data: exampleState,
  }
}

export { useExample }
