# Flipkart Clone Backend

## `getCategories api`

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

# `product/create api`

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

# `cart/addtocart api [updated]`

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

# `page/create api`

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