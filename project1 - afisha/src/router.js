import { createBrowserRouter } from "react-router-dom";

import App from './components/App';
import EventPage from "./components/Pages/EventPage";
import MainPage from "./components/Pages/MainPage";
import AdminPage from "./components/Pages/AdminPage";
import UserPage from "./components/Pages/UserPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: "/Events/:EventId",
                element: <EventPage />,
                loader: ({ params }) => {
                    const id = params.EventId
                    return [id]
                }
            }, // Events
            {
                path: "/Calendar/Filter",
                children: [
                    {
                        path: "/Calendar/Filter/:Option/:OptionId",
                        element: <MainPage />,
                        loader: ({ params }) => {
                            const state = params.Option.toLowerCase()
                            const id = params.OptionId
                            return [state, id]
                        }
                    },
                    {
                        path: "/Calendar/Filter/:actionId",  
                        element: <MainPage />,
                        loader: ({ params }) => {
                            const state = params.actionId.toLowerCase()
                            return [state]
                        },
                    }
                ]
            }, // Calendar
            {
                path: "/Admin",
                children: [
                    {
                        path: "/Admin/:actionId",
                        element: <AdminPage />,
                        loader: ({ params }) => {
                            const action = params.actionId
                            return [action]
                        },
                    },
                    {
                        path: "/Admin/editEvent/:EventId/:Action",
                        element: <AdminPage />,
                        loader: ({ params }) => {
                            const action = "editEvent"
                            const id = params.EventId
                            const editAction = params.Action
                            return [action, id, editAction]
                        }
                    }
                ]
            }, // Admin
            {
                path: "/User",
                children: [
                    {
                        path: "/User/:actionId",
                        element: <UserPage />,
                        loader: ({ params }) => {
                            const action = params.actionId.toLowerCase()
                            return [action]
                        },
                    },
                ]
            }, // User
        ]
    },
]);