import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'
import GetAllUserCartHook from './../../hook/cart/get-all-user-cart-hook';

const CartPage = () => {
    const [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCartHook()

    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                    {
                        cartItems.length >= 1 ? (cartItems.map((item, index) => {
                            return (<CartItem key={index} item={item} />)
                        })) : <h6>لا يوجد منتجات فى العربة</h6>
                    }

                </Col>

                <Col xs="6" md="3">
                    <CartCheckout cartItems={cartItems} couponNameRes={couponNameRes} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} totalCartPrice={totalCartPrice} />
                </Col>
            </Row>
        </Container >
    )
}

export default CartPage
