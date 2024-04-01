import { AboutUs, Contacts, Home, Pricing, Skills } from "../pages";

export const RouterComponents=[
    {
        path:"#home",
        element: Home,
        name:"Bosh sahifa",
        id:1
    },
    {
        path:"#skills",
        element:Skills,
        name:"Imkoniyatlar",
        id:2
    },
    {
        path:"#about",
        element:AboutUs,
        name:"Biz haqimizda",
        id:3
    },
    {
        path:"#pricing",
        element:Pricing,
        name:"Narxlar",
        id:4
    },
    {
        path:"#contacts",
        element:Contacts,
        name:"Aloqa",
        id:5
    },
]