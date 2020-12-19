const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    // console.log(cart);
    if (cart) {
      const product = req.body.cartItems.product;
      const productInCart = cart.cartItems.find((c) => c.product == product);

      if (productInCart) {
        console.log("Updating Cart by quantity");
        Cart.findOneAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            $set: {
              cartItems: {
                ...req.body.cartItems,
                quantity: productInCart.quantity + req.body.cartItems.quantity,
              },
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        });
      } else {
        console.log("Updating Cart");
        Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        });
      }

      // return res.status(200).json({ message: "cart Exists" });
    } else {
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};
