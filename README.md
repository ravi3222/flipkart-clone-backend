# Flipkart Clone Backend

REST API for Flipkart Clone & Admin Dashboard. It's being developed using `Node.js, ES6/ESNext, Express, JWT, Bcrypt, Multer, MongoDB, Mongoose` etc.

### Let's take a look at frontend and admin dashboard here at:

### [Flipkart Clone (https://github.com/ravi3222/flipkart-clone)](https://github.com/ravi3222/flipkart-clone)

### [Flipkart Admin Dashboard (https://github.com/ravi3222/flipkart-admin-dashboard)](https://github.com/ravi3222/flipkart-admin-dashboard)

## API Reference

This section describes the endpoints of the API:

| HTTP method            | Endpoint                  | Description                                          | Implemented | Allowed roles |
| ---------------------- | ------------------------- | ---------------------------------------------------- | ----------- | ------------- |
| **Authentication API** |
| POST                   | /api/admin/signin         | Sign in to the application (administrator)           | Yes         | Admin         |
| POST                   | /api/admin/signup         | Sign up of the application (administrator)           | Yes         | Admin         |
| POST                   | /api/admin/logout         | Logout of the application (administrator)            | Yes         | Admin         |
| POST                   | /api/signin               | Sign in to the application (user)                    | Yes         | User          |
| POST                   | /api/signup               | Sign up of the application (user)                    | Yes         | User          |
| **Category API**       |
| GET                    | /api/category/getcategory | Get all categories & sub-categories                  | Yes         | User          |
| POST                   | /api/category/create      | Create product categories (administrator)            | Yes         | Admin         |
| POST                   | /api/category/update      | Update Categories (administrator)                    | Yes         | Admin         |
| POST                   | /api/category/delete      | Delete Categories (administrator)                    | Yes         | Admin         |
| **Product API**        |
| POST                   | /api/product/create       | Create products (administrator)                      | Yes         | Admin         |
| GET                    | /api/products/:slug       | Get product by slug id                               | Yes         | User          |
| **Cart API**           |
| POST                   | /api/user/cart/addtocart  | Add items to cart                                    | Yes         | User          |
| **InitialData API**    |
| GET                    | /api/initialdata          | Get all categories and product lists (administrator) | Yes         | Admin         |
| **Page API**           |
| POST                   | /api/page/create          | Create product page with file upload (banners)       | Yes         | Admin         |

## `getCategories/ api`

```
{
    "categoryList": [
        {
            "_id": "5fd87ba28df7512600ef6ec8",
            "name": "Electronics",
            "slug": "Electronics",
            "children": [
                {
                    "_id": "5fd89e8a4a05500f148ff9f2",
                    "name": "Mobiles",
                    "slug": "Mobiles",
                    "children": [
                        {
                            "_id": "5fd89f734a05500f148ff9f5",
                            "name": "Realme",
                            "slug": "Realme",
                            "children": []
                        },
                        {
                            "_id": "5fd89f804a05500f148ff9f6",
                            "name": "MI",
                            "slug": "MI",
                            "children": []
                        },
                        {
                            "_id": "5fd89f894a05500f148ff9f7",
                            "name": "Samsung",
                            "slug": "Samsung",
                            "children": []
                        },
                        {
                            "_id": "5fd89f914a05500f148ff9f8",
                            "name": "IPhone",
                            "slug": "IPhone",
                            "children": []
                        },
                        {
                            "_id": "5fd89f9d4a05500f148ff9fa",
                            "name": "LG",
                            "slug": "LG",
                            "children": []
                        },
                        {
                            "_id": "5fd89fc24a05500f148ff9fb",
                            "name": "Motorola",
                            "slug": "Motorola",
                            "children": []
                        },
                        {
                            "_id": "5fd89fcd4a05500f148ff9fc",
                            "name": "Micromax",
                            "slug": "Micromax",
                            "children": []
                        },
                        {
                            "_id": "5fd89fdb4a05500f148ff9fd",
                            "name": "One Plus",
                            "slug": "One-Plus",
                            "children": []
                        },
                        {
                            "_id": "5fd89fe24a05500f148ff9fe",
                            "name": "Oppo",
                            "slug": "Oppo",
                            "children": []
                        },
                        {
                            "_id": "5fd89fe74a05500f148ff9ff",
                            "name": "Vivo",
                            "slug": "Vivo",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "_id": "5fd87c688df7512600ef6eca",
            "name": "Sports Books & More",
            "slug": "Sports-Books-and-More",
            "children": []
        },
        {
            "_id": "5fd87d4d2c0608218090bf05",
            "name": "Flights",
            "slug": "Flights",
            "children": []
        },
        {
            "_id": "5fd89a8c08c51715d0a51431",
            "name": "Women",
            "slug": "Women",
            "children": []
        },
        {
            "_id": "5fd89b0f08c51715d0a51432",
            "name": "Men",
            "slug": "Men",
            "children": [
                {
                    "_id": "5fd89ed74a05500f148ff9f3",
                    "name": "Shirts",
                    "slug": "Shirts",
                    "children": []
                }
            ]
        },
        {
            "_id": "5fd89c654a05500f148ff9ef",
            "name": "Kids",
            "slug": "Kids",
            "children": []
        },
        {
            "_id": "5fd89d314a05500f148ff9f1",
            "name": "Beauty, Health",
            "slug": "Beauty-Health",
            "children": []
        }
    ]
}

```

## `product/create api`

```
{
    "product": {
        "_id": "5fdaa4da4edacf2d5c25e5fb",
        "name": "Realme X3 SuperZoom (Arctic White, 128 GB)  (8 GB RAM).",
        "slug": "Realme-X3-SuperZoom-(Arctic-White-128-GB)-(8-GB-RAM).",
        "price": 27999,
        "quantity": 5,
        "description": "The realme X3 Super Zoom smartphone is here to take your photography and videography a notch higher. With the 60x super zoom feature, you can zoom into your subject and capture the most stunning details clearly. What’s more, all your videos are going to look shake-free, thanks to the UIS and UIS Max Ultra Image Stabilization feature. Oh, and it also comes with a 120 Hz smooth display that will ensure that you get to have a wonderful visual experience.",
        "productPictures": [
            {
                "_id": "5fdaa4da4edacf2d5c25e5fc",
                "img": "3phaDJQ7L-flipkart-dashboard-small.png"
            },
            {
                "_id": "5fdaa4da4edacf2d5c25e5fd",
                "img": "Yb_J0XNSXT-15122020.PNG"
            },
            {
                "_id": "5fdaa4da4edacf2d5c25e5fe",
                "img": "6oL79Iar6k-flipkart-dashboard.png"
            }
        ],
        "category": "5fd89f734a05500f148ff9f5",
        "createdBy": "5fd53155c3b31524a04c6764",
        "reviews": [],
        "createdAt": "2020-12-17T00:22:50.040Z",
        "updatedAt": "2020-12-17T00:22:50.040Z",
        "__v": 0
    }
}
```

## `cart/addtocart api`

### one user one cart, insert product only once, update cart items by quantity

```
{
    "cart": {
        "_id": "5fdd738d4cea1902d4a24aa0",
        "user": "5fd48df5c4c0c32c74de4319",
        "cartItems": [
            {
                "quantity": 3,
                "_id": "5fdd743e4cea1902d4a24aa5",
                "product": "5fdd71bb4cea1902d4a24a97",
                "price": 18999
            },
            {
                "quantity": 2,
                "_id": "5fdd744d4cea1902d4a24aa6",
                "product": "5fdaa4da4edacf2d5c25e5fb",
                "price": 27999
            }
        ],
        "createdAt": "2020-12-19T03:29:17.042Z",
        "updatedAt": "2020-12-19T03:32:29.351Z",
        "__v": 0
    }
}
```

## `page/create api`

```
{
  _id: 604119114ae041120434ae78,
  title: 'Apple Store',
  description: 'Apple is an awesome brand.',
  category: 5fd89f914a05500f148ff9f8,
  banners: [
    {
      _id: 6042650c583d8c18ace709b3,
      img: 'http://localhost:5000/public/VNNHMWtTj-9fddb61f281042c8.jpg',
      navigateTo: '/bannerClicked?categoryId=5fd89f914a05500f148ff9f8&type=undefined'
    }
  ],
  products: [
    {
      _id: 6042650c583d8c18ace709b4,
      img: 'http://localhost:5000/public/RqQrWbmtbh-76e02b73a6fd5aa7.jpg',
      navigateTo: '/productClicked?categoryId=5fd89f914a05500f148ff9f8&type=undefined'
    }
  ],
  createdBy: 5fd53155c3b31524a04c6764,
  createdAt: 2021-03-04T17:29:53.075Z,
  updatedAt: 2021-03-05T17:06:20.920Z,
  __v: 0
}
```

## `admin/signin api`

```

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ1MzE1NWMzYjMxNTI0YTA0YzY3NjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTgzNDg2NzMsImV4cCI6MTYxODQzNTA3M30.c7Xi5fn_seY4ZYog0sXhQuEi45e7IgUyn9HcXO4waDw",
    "user": {
        "_id": "5fd53155c3b31524a04c6764",
        "firstName": "Ravi",
        "lastName": "Kumar",
        "email": "test@gmail.com",
        "role": "admin",
        "fullName": "Ravi Kumar"
    }
}


```

# `/initialData/ api`

```
{
    "categories": [
        {
            "_id": "5fd87ba28df7512600ef6ec8",
            "name": "Electronics",
            "slug": "Electronics",
            "type": "undefined",
            "children": [
                {
                    "_id": "5fd89e8a4a05500f148ff9f2",
                    "name": "Mobiles",
                    "slug": "Mobiles",
                    "parentId": "5fd87ba28df7512600ef6ec8",
                    "type": "undefined",
                    "children": [
                        {
                            "_id": "5fd89f804a05500f148ff9f6",
                            "name": "MI",
                            "slug": "MI",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fd89f894a05500f148ff9f7",
                            "name": "Samsung",
                            "slug": "Samsung",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "type": "store",
                            "children": []
                        },
                        {
                            "_id": "5fd89f914a05500f148ff9f8",
                            "name": "Apple",
                            "slug": "Apple",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "type": "page",
                            "children": []
                        },
                        {
                            "_id": "5fd89f9d4a05500f148ff9fa",
                            "name": "LG",
                            "slug": "LG",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fd89fc24a05500f148ff9fb",
                            "name": "Motorola",
                            "slug": "Motorola",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fd89fcd4a05500f148ff9fc",
                            "name": "Micromax",
                            "slug": "Micromax",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fd89fdb4a05500f148ff9fd",
                            "name": "One Plus",
                            "slug": "One-Plus",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fd89fe24a05500f148ff9fe",
                            "name": "Oppo",
                            "slug": "Oppo",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fd89fe74a05500f148ff9ff",
                            "name": "Vivo",
                            "slug": "Vivo",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        },
                        {
                            "_id": "5fddb868c26e4e16b4793819",
                            "name": "Realme",
                            "slug": "Realme",
                            "parentId": "5fd89e8a4a05500f148ff9f2",
                            "children": []
                        }
                    ]
                },
                {
                    "_id": "5ffd6e1d738cd715402e186e",
                    "name": "Laptops",
                    "slug": "Laptops",
                    "parentId": "5fd87ba28df7512600ef6ec8",
                    "children": []
                },
                {
                    "_id": "5ffd6f1f738cd715402e186f",
                    "name": "Mobile Accessories",
                    "slug": "Mobile-Accessories",
                    "parentId": "5fd87ba28df7512600ef6ec8",
                    "children": []
                },
                {
                    "_id": "5ffd6f30738cd715402e1870",
                    "name": "Laptop Accessories",
                    "slug": "Laptop-Accessories",
                    "parentId": "5fd87ba28df7512600ef6ec8",
                    "children": []
                }
            ]
        },
        {
            "_id": "5fd87c688df7512600ef6eca",
            "name": "TVs & Appliances",
            "slug": "Sports-Books-and-More",
            "type": "page",
            "children": []
        },
        {
            "_id": "5fd87d4d2c0608218090bf05",
            "name": "Men",
            "slug": "Flights",
            "type": "undefined",
            "children": [
                {
                    "_id": "6049d4114a846c3684bc3411",
                    "name": "Shirts",
                    "slug": "Shirts-mZb153HHY",
                    "parentId": "5fd87d4d2c0608218090bf05",
                    "children": []
                }
            ]
        },
        {
            "_id": "5fd89a8c08c51715d0a51431",
            "name": "Women",
            "slug": "Women",
            "children": []
        },
        {
            "_id": "5fd89b0f08c51715d0a51432",
            "name": "Baby & Kids",
            "slug": "Men",
            "type": "undefined",
            "children": []
        },
        {
            "_id": "603f79f1c1b1742df8fd0954",
            "name": "Home & Furniture",
            "slug": "Home-and-Furniture-eG93Yxdjh",
            "type": "store",
            "children": []
        },
        {
            "_id": "6049d4214a846c3684bc3412",
            "name": "Flights",
            "slug": "Flights-dgpREIpbS",
            "children": []
        }
    ],
    "products": [
        {
            "_id": "5ffe6bc2c3647945dcbd01fe",
            "name": "Samsung Galaxy M31 (Ice Berg Blue, 128 GB)  (6 GB RAM)",
            "slug": "Samsung-Galaxy-M31-(Ice-Berg-Blue-128-GB)-(6-GB-RAM)",
            "price": 17999,
            "quantity": 100,
            "description": "64MP + 8MP + 5MP + 5MP rear camera | 32MP front facing camera 16.21 centimeters (6.4-inch) FHD+ capacitive touchscreen with 2340 x 1080 pixels resolution, 404 ppi pixel density and 16M color support Memory, Storage & SIM: 6GB RAM | 64GB storage expandable up to 512GB | Dual SIM with dual standby (4G+4G) Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor 6000mAH lithium-ion battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Box also includes: Travel Adapter, USB Cable, Ejection Pin, User Manual Fast face unlock and fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE , Dedicated Sim slot;Widevine L1 certification for HD streaming",
            "productPictures": [
                {
                    "_id": "5ffe6bc2c3647945dcbd01ff",
                    "img": "azKrVSZyJ-galaxy-m31-sm-m315f-ds-samsung-original-imafyz8xcywzds2x.jpeg"
                },
                {
                    "_id": "5ffe6bc2c3647945dcbd0200",
                    "img": "VycvaFMd-W-galaxy-m31-sm-m315f-ds-samsung-original-imafyz8xgpzkzdqz.jpeg"
                },
                {
                    "_id": "5ffe6bc2c3647945dcbd0201",
                    "img": "qyXnNL2dsX-samsung-m31-prime-sm-m315flbg1-original-imafwsr3azt8yh8w.jpeg"
                },
                {
                    "_id": "5ffe6bc2c3647945dcbd0202",
                    "img": "agBLAmijEo-samsung-m31-prime-sm-m315flbg1-original-imafwsr3hjnzbbqr.jpeg"
                },
                {
                    "_id": "5ffe6bc2c3647945dcbd0203",
                    "img": "rC-bTB7fKB-samsung-m31-prime-sm-m315flbg1-original-imafwwynjfkdyneu.jpeg"
                }
            ],
            "category": {
                "_id": "5fd89f894a05500f148ff9f7",
                "name": "Samsung"
            }
        },
        {
            "_id": "5ffe99c8c3647945dcbd0207",
            "name": "Samsung Galaxy M21 (Iceberg Blue, 128 GB)  (6 GB RAM)",
            "slug": "Samsung-Galaxy-M21-(Iceberg-Blue-128-GB)-(6-GB-RAM)",
            "price": 17999,
            "quantity": 100,
            "description": "48MP (F2.0) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera | 20MP (F2.2) front facing camera 16.21 centimeters (6.4-inch) FHD+ capacitive touchscreen with 2340 x 1080 pixels resolution 16M color support Memory, Storage & SIM: 4GB RAM | 64GB storage expandable up to 512GB| Dual SIM with dual standby (4G+4G) Android 10.0 operating system with 2.3GHz Exynos 9611-Octa Core processor 6000mAH lithium-ion battery",
            "productPictures": [
                {
                    "_id": "5ffe99c8c3647945dcbd0208",
                    "img": "wkKfuYHYQ-galaxy-m21-m215flbgins-samsung-original-imafyfzf2xeuafqa.jpeg"
                },
                {
                    "_id": "5ffe99c8c3647945dcbd0209",
                    "img": "Z35IOcUagt-samsung-galaxy-m21-sm-m215flbdins-original-imafxykjnbc2wghg.jpeg"
                },
                {
                    "_id": "5ffe99c8c3647945dcbd020a",
                    "img": "hSn5s1dO_I-samsung-galaxy-m21-sm-m215flbdins-original-imafxykjx6agfbkz.jpeg"
                },
                {
                    "_id": "5ffe99c8c3647945dcbd020b",
                    "img": "4121PZ0mPq-samsung-galaxy-m21-sm-m215flbdins-original-imafxykjzg7yvvf3.jpeg"
                }
            ],
            "category": {
                "_id": "5fd89f894a05500f148ff9f7",
                "name": "Samsung"
            }
        },
        {
            "_id": "5ffe9a81c3647945dcbd020c",
            "name": "Samsung M31 Prime (Space Black, 128 GB)  (6 GB RAM)",
            "slug": "Samsung-M31-Prime-(Space-Black-128-GB)-(6-GB-RAM)",
            "price": 17776,
            "quantity": 100,
            "description": "Quad camera setup - 64MP (F1.8) main camera + 8MP (F2.2) ultra wide camera + 5MP (F2.2) depth camera + 5MP (F2.4) macro camera | 32MP (F2.0) front facing camera 16.21 centimeters (6.4-inch) Super Amoled - Infinity U cut display, FHD+ capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 404 ppi with 16M color support Android v10.0 operating system with 1.7GHz+2.3GHz Exynos 9611 Octa core processor Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G) 6000mAH lithium-ion battery | 15W Type-C fast charger in the box 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Box also includes: Travel adapter, USB cable, ejection pin and user manual",
            "productPictures": [
                {
                    "_id": "5ffe9a81c3647945dcbd020d",
                    "img": "BRKS9UsAR-m31-prime-sm-m315fzkginu-samsung-original-imafx6vvkqbyzkvq.jpeg"
                },
                {
                    "_id": "5ffe9a81c3647945dcbd020e",
                    "img": "ViTpkObCpb-samsung-m31-prime-sm-m315fzbg1-original-imafwsr3cjzf8n4k.jpeg"
                },
                {
                    "_id": "5ffe9a81c3647945dcbd020f",
                    "img": "1OPm9YWipf-samsung-m31-prime-sm-m315fzbg1-original-imafwsr3d3myydug.jpeg"
                },
                {
                    "_id": "5ffe9a81c3647945dcbd0210",
                    "img": "6PbcMLKW87-samsung-m31-prime-sm-m315fzbg1-original-imafwsr3hg9h3ysa.jpeg"
                },
                {
                    "_id": "5ffe9a81c3647945dcbd0211",
                    "img": "n6Z6YdW8WR-samsung-m31-prime-sm-m315fzbg1-original-imafwsr3kx6vzccq.jpeg"
                }
            ],
            "category": {
                "_id": "5fd89f894a05500f148ff9f7",
                "name": "Samsung"
            }
        },
        {
            "_id": "5ffe9be1c3647945dcbd0212",
            "name": "Samsung Galaxy M51 (Celestial Black, 128 GB)  (8 GB RAM)",
            "slug": "Samsung-Galaxy-M51-(Celestial-Black-128-GB)-(8-GB-RAM)",
            "price": 26845,
            "quantity": 100,
            "description": "7000mAH lithium-ion battery | 25W USB Type-C to C fast charger in the box Fast face unlock and Side Fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE | 3.5 mm headphone jack",
            "productPictures": [
                {
                    "_id": "5ffe9be1c3647945dcbd0213",
                    "img": "TnuuM7eJI-samsung-galaxy-m51-m515fzkeins-original-imafx3ughnhmfhzz.jpeg"
                },
                {
                    "_id": "5ffe9be1c3647945dcbd0214",
                    "img": "AXyBdbwKoQ-samsung-galaxy-m51-m515fzkeins-original-imafx3ugqvgzdyjc.jpeg"
                },
                {
                    "_id": "5ffe9be1c3647945dcbd0215",
                    "img": "f1S3T-08I6-samsung-galaxy-m51-m515fzkeins-original-imafx3ugrt6jyuqs.jpeg"
                },
                {
                    "_id": "5ffe9be1c3647945dcbd0216",
                    "img": "eSJ9gs98JB-samsung-galaxy-m51-m515fzkeins-original-imafx3ugswsjrmvm.jpeg"
                },
                {
                    "_id": "5ffe9be1c3647945dcbd0217",
                    "img": "O5hu7P0jqV-samsung-galaxy-m51-m515fzkeins-original-imafx3ugxeuq7qr7.jpeg"
                }
            ],
            "category": {
                "_id": "5fd89f894a05500f148ff9f7",
                "name": "Samsung"
            }
        },
        {
            "_id": "5ffe9c45c3647945dcbd0218",
            "name": "Samsung Galaxy M51 (Celestial Black, 128 GB)  (8 GB RAM).",
            "slug": "Samsung-Galaxy-M51-(Celestial-Black-128-GB)-(8-GB-RAM).",
            "price": 26845,
            "quantity": 100,
            "description": "7000mAH lithium-ion battery | 25W USB Type-C to C fast charger in the box Fast face unlock and Side Fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE | 3.5 mm headphone jack",
            "productPictures": [
                {
                    "_id": "5ffe9c45c3647945dcbd0219",
                    "img": "T_uwTEwDJ-samsung-galaxy-m51-m515fzkeins-original-imafx3ugxeuq7qr7.jpeg"
                },
                {
                    "_id": "5ffe9c45c3647945dcbd021a",
                    "img": "Xt_qLUwxMe-samsung-galaxy-m51-m515fzkeins-original-imafx3ugswsjrmvm.jpeg"
                },
                {
                    "_id": "5ffe9c45c3647945dcbd021b",
                    "img": "3BEdYfK1L3-samsung-galaxy-m51-m515fzkeins-original-imafx3ugrt6jyuqs.jpeg"
                },
                {
                    "_id": "5ffe9c45c3647945dcbd021c",
                    "img": "O5LUp_Hgci-samsung-galaxy-m51-m515fzkeins-original-imafx3ugqvgzdyjc.jpeg"
                },
                {
                    "_id": "5ffe9c45c3647945dcbd021d",
                    "img": "mHZ5OYQvga-samsung-galaxy-m51-m515fzkeins-original-imafx3ughnhmfhzz.jpeg"
                }
            ],
            "category": {
                "_id": "5fd89f894a05500f148ff9f7",
                "name": "Samsung"
            }
        },
        {
            "_id": "5ffe9edbc3647945dcbd021e",
            "name": "Samsung Galaxy M51 (Electric Blue, 128 GB)  (8 GB RAM)",
            "slug": "Samsung-Galaxy-M51-(Electric-Blue-128-GB)-(8-GB-RAM)",
            "price": 26607,
            "quantity": 100,
            "description": "7,000mAh (typical)** battery and 25W of Super Fast Charging Blazing fast Qualcomm® Snapdragon™ 730G Processor 16.95cm (6.7\") FHD+ widescreen display, powered by Super AMOLED Plus technology",
            "productPictures": [
                {
                    "_id": "5ffe9edbc3647945dcbd021f",
                    "img": "iZmGEQied-samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8qgphcqw2.jpeg"
                },
                {
                    "_id": "5ffe9edbc3647945dcbd0220",
                    "img": "Qbgc4lr4PU-samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8fhjh4sra.jpeg"
                },
                {
                    "_id": "5ffe9edbc3647945dcbd0221",
                    "img": "IG9q9KKnDX-samsung-galaxy-m51-sm-m515fzbd-original-imafvvgfkgsmzsq9.jpeg"
                },
                {
                    "_id": "5ffe9edbc3647945dcbd0222",
                    "img": "5QCXBB_EDT-samsung-galaxy-m51-sm-m515fzbd-original-imafvvgft9cgdrsz.jpeg"
                },
                {
                    "_id": "5ffe9edbc3647945dcbd0223",
                    "img": "pAJgYNLwQI-samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8dz6yzgp2.jpeg"
                }
            ],
            "category": {
                "_id": "5fd89f894a05500f148ff9f7",
                "name": "Samsung"
            }
        }
    ]
}

```
