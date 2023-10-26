import Homepage from "../components/Homepage";
import Layout from "../components/Layout";

export const routesConfig = [
{
    path: '/',
    element: <Layout />,
    children: [
        { path: '/', element: <Homepage /> },
    ]

}
]