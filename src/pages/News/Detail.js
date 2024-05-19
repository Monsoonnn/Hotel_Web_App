import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { get } from "../../utils/request";
import Swal from "sweetalert2";
import { convertToDateString } from "../../services/convert";

const NewDetail = () => {

    const id = useParams();
    const navigate = useNavigate();
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await get(`/news?position=${id.newsID}&limit=1`);
            console.log(result)
            setNews(result.data.newss)
            // setOptions(result.data.hotels.map((item) => ({ value: `${item.name}` })))
        }
        fetchAPI()
        // Swal.fire({
        //     icon: "info",
        //     title: "Đang tải dữ liệu",
        //     showConfirmButton: false,
        //     timer: 5000,
        // });
    }, [id])

    console.log(news)
    return (
        <>
            <div className="NewDetail" style={{
                paddingTop: "150px",
                paddingBottom: "100px",
            }}>
                {news.length > 0 && (
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
                                {news[0].title}
                            </p>
                        </div>
                        <hr></hr>
                        <div className="detail__hotel" style={{
                            fontSize: "28px",
                            fontWeight: "500",
                            textAlign: "center"
                        }}>
                            {`[${news[0].hotel}]`}
                        </div>
                        <hr></hr>
                        <div className="detail__all" style={{
                            margin: "50px 0",
                            fontSize: "18px"
                        }}>
                            <p>Kính gửi Quý khách, </p>
                            <p>{`Cảm ơn Quý khách đã chọn ${news[0].hotel} là nơi lưu trú .`}</p>
                            <p>{`${news[0].hotel} xin thông báo ${news[0].content.toLowerCase()} `}</p>
                            <p>{`Thời gian bắt đầu từ ${convertToDateString(news[0].date)}.`}</p>
                            <p>{`Mọi thắc mắc, Quý khách vui lòng liên hệ với nhân viên an ninh của khách sạn hoặc qua hotline: +84-28-3823-3333.`}</p>
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
                            onClick={() => { navigate("/news") }}
                        >
                            Quay trở lại
                        </div>
                    </div>

                )
                }
            </div>

        </>
    )
}

export default NewDetail;