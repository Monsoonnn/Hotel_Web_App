import { Navigate, useNavigate, useParams } from "react-router-dom";

const NewDetail = () => {

    let { id } = useParams();

    const navigate = useNavigate();
    return (
        <>
            <div className="NewDetail" style={{
                paddingTop: "150px",
                paddingBottom: "100px",
            }}>
                <div className="container">
                    <div className="detail__title">
                        <p style={{
                            fontSize: "35px",
                            fontWeight: "500",
                            textAlign: "center"
                        }}>Thông báo</p>
                        <p style={{
                            textAlign: "center",
                            fontSize: "18px"
                        }}>
                            Hồ bơi hoạt động trở lại
                        </p>
                    </div>
                    <hr></hr>
                    <div className="detail__hotel" style={{
                            fontSize: "28px",
                            fontWeight: "500",
                            textAlign: "center"
                        }}>
                        [Khách sạn Sài Gòn] Thông báo hồ bơi hoạt động trở lại
                    </div>
                    <hr></hr>
                    <div className="detail__all" style={{
                        margin: "50px 0"
                    }}>
                        <pre style={{
                            fontSize: "18px"
                        }}>{
                            `Kính gửi Quý khách,
Cảm ơn Quý khách đã chọn khách sạn LOTTE Sài Gòn là nơi lưu trú tại Thành phố Hồ Chí Minh.
Khách sạn LOTTE Sài Gòn xin thông báo khu vực hồ bơi hoạt động trở lại từ ngày 4 tháng 8 năm 2023.
Mọi thắc mắc, Quý khách vui lòng liên hệ với nhân viên an ninh của khách sạn hoặc qua hotline: +84-28-3823-3333.`}
                        </pre>
                    </div>
                    <hr></hr>
                    <div style={{
                        backgroundColor: "#fff",
                        border: "1px solid #000",
                        margin: "0px auto",
                        maxWidth: "200px",
                        padding: "8px 16px",
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "400",
                        cursor: "pointer"
                    }}
                    onClick={() => {navigate("/news")}}
                    >
                        Quay trở lại
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDetail;