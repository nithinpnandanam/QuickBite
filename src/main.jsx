import ReactDOM from 'react-dom/client'
import './index.css'
import appRouter from './routes/appRouter.jsx'
import { RouterProvider } from 'react-router-dom'
import appStore from './store/appStore.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
)