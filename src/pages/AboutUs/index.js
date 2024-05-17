const AboutUs = () => {
    return (
        <>
            <div className="aboutUs" style={{
                paddingTop: "200px",
                paddingBottom: "100px",
            }}>
                <div className="container">
                    <div className="aboutUs__title">
                        <p style={{
                            fontSize: "40px",
                            fontWeight: "500",
                            textAlign: "center"
                        }}>Về chúng tôi</p>
                        <p style={{
                            textAlign: "center",
                            fontSize: "18px"
                        }}>
                            SỐNG, LÀM VIỆC, VUI CHƠI, TRUYỀN CẢM HỨNG NHƯ MỘT NGƯỜI ĐỊA PHƯƠNG!
                        </p>
                    </div>
                    <div className="aboutUs__detail" style={{
                        textAlign: "center",
                        marginTop: "80px"
                    }}>
                        <p>
                            Local Stitch Creator Town Seogyo là một không gian đa dạng với 296 phòng thuộc 3 loại khác nhau từ tầng 3 đến tầng 7, cùng với các không gian chung tiện lợi và sáng tạo (trung tâm thể dục, phòng họp, vườn trên mái, nhà bếp, phòng giặt, v.v.) cũng như các quán cà phê và nhà hàng hợp thời trang.
                        </p>
                        <p>
                            Hãy tham gia cùng các người du mục kỹ thuật số từ khắp nơi trên thế giới để trải nghiệm một môi trường truyền cảm hứng và tự nhiên kết hợp công việc và cuộc sống tại Local Stitch Creator Town Seogyo đầy phong cách!
                        </p>
                        <p>
                            Từ các nhà sáng tạo Hàn Quốc đến các người du mục kỹ thuật số quốc tế, cộng đồng Local Stitch ở đây dành cho bạn. Tìm nguồn cảm hứng từ các thành viên Local Stitch và bắt đầu những dự án sáng tạo mới. 1.400 thành viên Local Stitch sẽ hỗ trợ và cổ vũ bạn.
                        </p>
                    </div>
                    <div className="aboutUS__room">
                        <p style={{
                            fontSize: "40px",
                            fontWeight: "500",
                            textAlign: "center",
                            marginTop: "80px"
                        }}>Phòng nghỉ</p>
                    </div>

                    <div className="aboutUS__roomDetail" style={{
                        display: "flex",
                        marginTop: "40px"
                    }}>
                        <div className="left" style={{
                            width: '50%',
                            paddingRight: '30px'
                        }}
                        >
                            <img src={`https://www.lottehotel.com/content/dam/lotte-hotel/associated-partner/local-stitch-creater-town-seogyo/rooms/suite/studio/230705-35-2000-roo-APSG.jpg.thumb.768.768.jpg`}
                                style={{
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            >
                            </img>
                        </div>
                        <div className="right" style={{
                            width: '50%'
                        }}
                        >
                            <div className="right__detail" style={{
                                marginTop: "30px",
                                fontSize: "18px"
                            }}>
                                Không gian cá nhân của bạn quan trọng không kém gì các không gian chung. Nó là một phần không thể tách rời của bạn, ngay cả khi không gian đó không thuộc về bạn hoặc không quá rộng rãi. Đơn vị sống chung của Creator Town Seogyo được trang bị đầy đủ với nội thất mô-đun được thiết kế bởi Local Stitch. Cá nhân hóa không gian của bạn theo lối sống và sở thích của mình với nội thất mô-đun có thể di chuyển tự do.
                            </div>
                        </div>
                    </div>



                    <div className="aboutUS__facilities">
                        <p style={{
                            fontSize: "40px",
                            fontWeight: "500",
                            textAlign: "center",
                            marginTop: "80px"
                        }}>Tiện nghi</p>
                    </div>
                    <div className="aboutUS__facilitiesDetail" style={{
                        display: "flex",
                        marginTop: "40px"
                    }}>
                        <div className="left" style={{
                            width: '50%',
                            paddingRight: '30px'
                        }}
                        >
                            <img src={`https://www.lottehotel.com/content/dam/lotte-hotel/associated-partner/local-stitch-creater-town-seogyo/facilities/service/lounge/231124-08-2000-fac-APSG.jpg.thumb.768.768.jpg`}
                                style={{
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            >
                            </img>
                        </div>
                        <div className="right" style={{
                            width: '50%'
                        }}
                        >
                            <div className="right__detail" style={{
                                marginTop: "30px",
                                fontSize: "18px"
                            }}>
                               Để tận hưởng cuộc sống chung tốt hơn, có một phòng họp ở tầng hầm để trò chuyện với các thành viên khác, một phòng chờ để lắng nghe nhạc yên tĩnh, một nhà bếp chung để chuẩn bị bữa ăn cùng nhau, một phòng tắm riêng dành cho thú cưng, một phòng nhận bưu phẩm, một phòng lưu trữ cần thiết cho các kỳ lưu trú dài hạn, một trung tâm thể dục để giải tỏa căng thẳng sau một ngày dài, một phòng giặt lớn để giặt và sấy khô, một sân thượng và một ban công.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs