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
                            const state = params.Option.toUpperCase()
                            const id = params.OptionId
                            return [state, id]
                        },
                    },
                    {
                        path: "/Calendar/Filter/allEvents",
                        element: <MainPage />,
                        loader: () => {
                            const state = "ALL"
                            return [state]
                        },
                    },
                    {
                        path: "/Calendar/Filter/pastEvents",
                        element: <MainPage />,
                        loader: () => {
                            const state = "PAST"
                            return [state]
                        },
                    },
                    {
                        path: "/Calendar/Filter/futureEvents",
                        element: <MainPage />,
                        loader: () => {
                            const state = "FUTURE"
                            return [state]
                        },
                    },

                ]
            }, // Calendar
            {
                path: "/Admin",
                children: [
                    {
                        path: "/Admin/allEvents",
                        element: <AdminPage />,
                        loader: () => {
                            const action = "allEvents"
                            return [null, action]
                        },
                    },
                    {
                        path: "/Admin/allUsers",
                        element: <AdminPage />,
                        loader: () => {
                            const action = "allUsers"
                            return [null, action]
                        },
                    },
                    {
                        path: "/Admin/createEvent",
                        element: <AdminPage />,
                        loader: () => {
                            const action = "createEvent"
                            return [null, action]
                        },
                    },
                    {
                        path: "/Admin/editEvent/:EventId/:Action",
                        element: <AdminPage />,
                        loader: ({ params }) => {
                            const action = "editEvent"
                            const id = params.EventId
                            const editAction = params.Action
                            return [id, action, editAction]
                        }
                    }
                ]
            }, // Admin
            {
                path: "/User",
                children: [
                    {
                        path: "/User/Profile",
                        element: <UserPage />,
                        loader: () => {
                            const action = "profile"
                            return ["", action]
                        },
                    },
                    {
                        path: "/User/SignUp",
                        element: <UserPage />,
                        loader: () => {
                            const action = "signup"
                            return ["", action]
                        },
                    },
                    {
                        path: "/User/SignIn",
                        element: <UserPage />,
                        loader: () => {
                            const action = "signin"
                            return ["", action]
                        },
                    },
                ]
            }, // User
        ]
    },
]);