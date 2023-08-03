import { configureStore } from '@reduxjs/toolkit'
import coachName from './slice/coachName'
import printHeader from './slice/printHeader'
export default configureStore({
  reducer: {
    coachName,
    printHeader
	}
})