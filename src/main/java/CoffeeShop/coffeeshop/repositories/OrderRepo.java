package CoffeeShop.coffeeshop.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import CoffeeShop.coffeeshop.models.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order,Long>{
    Order findOrderByUserId(long userId);
    List<Order> findAllOrdersByUserId(long userId);    
}
