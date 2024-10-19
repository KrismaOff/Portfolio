import { createBrowserRouter } from "react-router-dom";

import RegistrationPage from "./components/Pages/RegistrationPage";
import CatalogPage from "./components/Pages/CatalogPage";
import ProductPage from "./components/Pages/ProductPage";
import ProfilePage from "./components/Pages/ProfilePage";
import BasketPage from './components/Pages/BasketPage'
import OrderPage from "./components/Pages/OrderPage";
import MainPage from "./components/Pages/MainPage";
import GiftPage from "./components/Pages/GiftPage";
import App from './components/App'

import Snickers from './assets/image/poster/SnickersFull.png'
import Hoodies from './assets/image/poster/Hoodies.png'

import { generalPageLink } from "./assets/varibles/generalData";

const data = {
    story: [
        {
            id: "story1",
            name: "Название истории",
            img: "http://archello.s3.eu-central-1.amazonaws.com/images/2017/04/24/SHINEleighton2423.1506945262.462.jpg",
        },
        {
            id: "story2",
            name: "Название истории",
            img: "https://damion.club/uploads/posts/2022-01/1641175790_84-damion-club-p-foni-dlya-magazinov-odezhdi-88.jpg",
        },
        {
            id: "story3",
            name: "Название истории",
            img: "https://perou.io/wp-content/uploads/2014/12/otkrytie-magazina-i-love-ugly-v-melburne-04.jpg",
        },
        {
            id: "story4",
            name: "Название истории",
            img: "http://retaildesignblog.net/wp-content/uploads/2016/11/Gabriele-Pasini-store-by-Meregalli-Merlo-Architetti-Associati-Los-Angeles-California-02.jpg",
        }
    ],
    product: [
        {
            id: "product1",
            name: "Air Jordan",
            cost: "12500",
            src: Snickers,
            brand: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg"
        },
        {
            id: "product2",
            name: "Air Jordan",
            cost: "12500",
            src: "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg",
            brand: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
        },
        {
            id: "product3",
            name: "Air Jordan",
            cost: "12500",
            src: Snickers,
            brand: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg",
        },
        {
            id: "product4",
            name: "Air Jordan",
            cost: "12500",
            src: "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg",
            brand: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
        },
        {
            id: "product5",
            name: "Air Jordan",
            cost: "12500",
            src: Snickers,
            brand: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg",
        },
        {
            id: "product6",
            name: "Air Jordan",
            cost: "12500",
            src: "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg",
            brand: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
        },
        {
            id: "product7",
            name: "Air Jordan",
            cost: "12500",
            src: Snickers,
            brand: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg",
        },
        {
            id: "product8",
            name: "Air Jordan",
            cost: "12500",
            src: "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg",
            brand: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
        },

    ],
    brand: [
        {
            id: "brand1",
            name: "Nike",
            src: Snickers,
        },
        {
            id: "brand2",
            name: "Louis Vuitton",
            src: Snickers,
        },
        {
            id: "brand3",
            name: "Stone Island",
            src: Snickers,
        },
        {
            id: "brand4",
            name: "Yeezy",
            src: Snickers,
        },
    ],

    tagSimple: [
        {
            name: "Все",
            id: "tagSimple1"
        },
        {
            name: "Обувь",
            id: "tagSimple2"
        },
        {
            name: "Одежда",
            id: "tagSimple3"
        },
        {
            name: "Аксессуары",
            id: "tagSimple4"
        },
    ],
    tagSelect: [
        {
            name: "Бренды",
            id: "tagSelect1",
            params: [
                {
                    name: "текст",
                    id: "tagSelectParams1"
                },
                {
                    name: "теееееееееекст",
                    id: "tagSelectParams2"
                },
                {
                    name: "текст",
                    id: "tagSelectParams3"
                },
                {
                    name: "текст",
                    id: "tagSelectParams4"
                },
                {
                    name: "текст",
                    id: "tagSelectParams5"
                },
                {
                    name: "текст",
                    id: "tagSelectParams6"
                },
                {
                    name: "текст",
                    id: "tagSelectParams7"
                },
                {
                    name: "текст",
                    id: "tagSelectParams8"
                },
                {
                    name: "текст",
                    id: "tagSelectParams9"
                },
                {
                    name: "текст",
                    id: "tagSelectParams10"
                },
            ]
        },
        {
            name: "Тип одежды",
            id: "tagSelect2",
            params: [
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams6"
                },
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams7"
                },
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams8"
                },
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams9"
                },
            ]
        },
        {
            name: "Размеры",
            id: "tagSelect3",
            params: [
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams10"
                },
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams11"
                },
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams12"
                },
                {
                    name: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
                    id: "tagSelectParams13"
                },
            ]
        },
        {
            name: "Коллекции",
            id: "tagSelect4",
            params: [
                {
                    name: "текст",
                    id: "tagSelectParams14"
                },
                {
                    name: "текст",
                    id: "tagSelectParams15"
                },
                {
                    name: "текст",
                    id: "tagSelectParams16"
                },
                {
                    name: "текст",
                    id: "tagSelectParams17"
                },
            ]
        },
    ],

    productPage: {
        product1: {
            name: ["Air Jordan 1 Retro Bred", "Off-White Unc Universary"],
            tag: "Популярно",
            cost: "99.999",
            brand: "Nike",
            describe: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
            article: "NK-BS-M-39-BL",
            img: [Snickers, Hoodies, "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg", "https://ahockeyworld.net/wp-content/uploads/adidas-fabela-2.jpg", "https://classic.cdn.media.amplience.net/i/hibbett/T0977_1000_main3"]
        },
        product2: {
            name: ["Air Jordan 1 Retro Bred", "Off-White Unc Universary"],
            tag: "Популярно",
            cost: "99.999",
            brand: "Nike",
            describe: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
            article: "NK-BS-M-39-BL",
            img: [Hoodies, Snickers, "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg", "https://ahockeyworld.net/wp-content/uploads/adidas-fabela-2.jpg", "https://classic.cdn.media.amplience.net/i/hibbett/T0977_1000_main3"]
        }
    },
    brandPage: {
        Nike: {
            name: "Nike",
            logo: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg",
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Ultricies mi eget mauris pharetra et ultrices neque ornare.",
            img: "https://i0.wp.com/cultedge.com/wp-content/uploads/2014/01/nike-air-max-lunar-90-og-02.jpg?resize=1000%2C600&ssl=1"
        }
    },

    basket: [
        {
            id: "product1",
            name: "Air Jordan",
            cost: "12500",
            src: Snickers,
            brand: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg",
        },
        {
            id: "product2",
            name: "Air Jordan",
            cost: "12500",
            src: "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg",
            brand: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
        },
        {
            id: "product3",
            name: "Air Jordan",
            cost: "12500",
            src: Snickers,
            brand: "https://loghi-famosi.com/wp-content/uploads/2020/04/Logo-della-Nike.jpg",
        },
        {
            id: "product4",
            name: "Air Jordan",
            cost: "12500",
            src: "https://www.tradeinn.com/f/13748/137483289/nike-sportswear-synthetic-fill-hoodie-jacket.jpg",
            brand: "https://thumbs.dreamstime.com/b/vinnitsa-ukraine-october-nike-sport-brand-logo-icon-vector-editorial-illustration-vinnitsa-ukraine-october-nike-sport-brand-logo-260965415.jpg",
        },
    ],
    adress: [
        {
            id: "adress1",
            name: "ул. Новый Арбат, 32",
            cord: "55.753481, 37.580366",
            floor: "10",
            entrance: "2",
            flat: "230",
            comment: "Ну типо иди туда, потом заверни за угол, потом топаешь к дверям, звонишь в них и я открою, дальше по методичке"
        },
        {
            id: "adress2",
            name: "Павловский Посад",
            cord: "55.780199, 38.654449",
            floor: "2",
            entrance: "1",
            flat: "10",
            comment: ""
        }
    ]
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: generalPageLink.main.path,
                element: <MainPage />,
                loader: () => {
                    const story = data.story,
                        product = data.product,
                        brand = data.brand
                    return [story, product, brand]
                }
            },
            {
                path: generalPageLink.catalog.path,
                element: <CatalogPage />,
                loader: () => {
                    const tagSimple = data.tagSimple,
                        tagSelect = data.tagSelect,
                        product = data.product
                    return [tagSimple, tagSelect, product]
                }
            },
            {
                path: `${generalPageLink.product.path}/:ProductId`,
                element: <ProductPage />,
                loader: ({ params }) => {
                    const productData = data.productPage[params.ProductId],
                        product = data.product,
                        brandData = data.brandPage[productData.brand]
                    return [productData, product.slice(0, 4), brandData]
                }
            },
            {
                path: generalPageLink.basket.path,
                element: <BasketPage />,
                loader: () => {
                    const basket = data.basket,
                        product = data.product
                    return [basket, product]
                }
            },
            {
                path: generalPageLink.gift.path,
                element: <GiftPage />,
                loader: () => {
                    const product = data.product
                    return [product]
                }
            },
            {
                path: generalPageLink.order.path,
                element: <OrderPage />,
                loader: () => {
                    const basket = data.basket
                    return [basket]
                }
            },
            {
                path: generalPageLink.profile.path,
                element: <ProfilePage />,
                loader: () => {
                    const adress = data.adress
                    return [adress]
                }
            },
            {
                path: `${generalPageLink.authorization.path}/:ModeId`,
                element: <RegistrationPage />,
                loader: ({ params }) => {
                    const mode = params.ModeId
                    return [mode]
                }
            },
        ]
    }
])