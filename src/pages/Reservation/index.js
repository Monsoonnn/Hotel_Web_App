
import { Col, Form, Row } from 'antd';
import FormItem from 'antd/es/form/FormItem';
const Reservation = () =>{


    return(
        <>
            <div className="findReservation">
                <Row>
                    <Col lg={24}>
                        <div className="findReservation__title">
                            TÌM KIẾM ĐẶT PHÒNG KHÔNG PHẢI HỘI VIÊN
                        </div>
                    </Col>
                    <Form>
                        <FormItem>
                            Đây là item 1
                        </FormItem>
                    </Form>
                    
                </Row>
            </div>
        </>
    )
}
export default Reservation;