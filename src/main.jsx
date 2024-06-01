import ReactDOM from 'react-dom/client'
import './index.css'
import appRouter from './routes/appRouter.jsx'
import { RouterProvider } from 'react-router-dom'
import './components/Slider.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)