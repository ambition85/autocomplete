import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from '../reducers/settings-reducer'
import statsReducer from '../reducers/stats-reducer'

export default configureStore({
  reducer: {
    settings: settingsReducer,
    stats: statsReducer,
  }
})