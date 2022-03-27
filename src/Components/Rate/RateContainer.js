import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import ViewAllReviewHook from './../../hook/review/view-all-review-hook';
import { useParams } from 'react-router-dom';
const RateContainer = ({ rateAvg, rateQty }) => {
    const { id } = useParams()
    const [allReview, onPress] = ViewAllReviewHook(id)

    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${rateQty}  تقيم`})</div>
                </Col>
            </Row>

            <RatePost />

            {allReview.data ? (allReview.data.map((review, index) => {
                return (<RateItem key={index} review={review} />)
            })) : <h6>لا يوجد تقيمات الان</h6>}


            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            }
        </Container>
    )
}

export default RateContainer
