import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '../reducers/settings-reducer'

export default configureStore({
  reducer: {
    settings: settingsReducer
  }
})