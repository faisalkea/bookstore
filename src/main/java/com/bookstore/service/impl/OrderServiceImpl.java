package com.bookstore.service.impl;

import com.bookstore.domain.*;
import com.bookstore.repository.OrderRepository;
import com.bookstore.service.CartItemService;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by z00382545 on 12/30/16.
 */

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartItemService cartItemService;

//    public Order createOrder(
//            ShoppingCart shoppingCart,
//            ShippingAddress shippingAddress,
//            BillingAddress billingAddress,
//            Payment payment,
//            String shippingMethod
//            ) {
//        Order order = new Order();
//        order.setBillingAddress(billingAddress);
//        order.setOrderStatus("created");
//        order.setPayment(payment);
//        order.setShippingAddress(shippingAddress);
//        order.setShippingMethod(shippingMethod);
//
//        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
//    }
}
