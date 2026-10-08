// Import your Cart model
const Cart = require('../models/Cart');

exports.removeItemFromCart = async (req, res) => {
    try {
        const { itemId } = req.params;
        const userId = req.user.id; // From your auth middleware

        // 1. Find the cart and remove the item from the items array
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Filter the items array to exclude the deleted item
        cart.items = cart.items.filter(item => item.productId.toString() !== itemId);

        // 2. Recalculate Totals based on your Checkout UI
        // Sum of (price * quantity) for remaining items
        cart.itemTotal = cart.items.reduce((acc, item) => acc + (item.price * item.qty), 0);

        // Fixed logic for Delivery Fee and Coupon from your image
        const deliveryFee = 20;
        const couponDiscount = 30;

        // Calculate final amount
        cart.amountToPay = (cart.itemTotal + deliveryFee) - couponDiscount;
        
        // Prevent negative totals
        if (cart.amountToPay < 0) cart.amountToPay = 0;

        // 3. Save the updated cart to MongoDB
        await cart.save();

        // 4. Return the updated data so the UI reflects the change immediately
        res.status(200).json({
            success: true,
            cart: {
                items: cart.items,
                itemTotal: cart.itemTotal,
                deliveryFee: deliveryFee,
                couponDiscount: couponDiscount,
                amountToPay: cart.amountToPay
            }
        });

    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};