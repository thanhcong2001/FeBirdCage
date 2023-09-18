import React, { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios';
export const Footer = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        axios.get('https://6507a9f63a38daf4803fa131.mockapi.io/api/v1/birdCage')
            .then(response => {
                setBlog(response.data)
            })
    }, [])
    return (
        <div>
            <div className='lineFooter'></div>
            <div className='footer'>
                <div style={{ width: 278 }}>
                    <img className='logo' src='http://mauweb.monamedia.net/birdshop/wp-content/uploads/2018/04/logo-robin.png' />
                    <p><span>A</span>: 319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                    <p><span>T</span>: 0126 922 0162</p>
                    <p><span>E</span>: demonhunter@gmail.com <br />mon@mona.media</p>
                    <p><span>S</span>: demonhunterp</p>
                </div>
                <div style={{ marginLeft: 30 }}>
                    <h3 style={{ marginTop: 0, marginLeft: 25 }}>BÀI VIẾT GẦN ĐÂY</h3>
                    <div>
                        {blog.slice(0, 3).map(item => (
                            <div>
                                <div style={{ display: 'flex', marginLeft: 20, width: 278 }} key={item?.id}>
                                    <img className='imgCircle' src={item.img} />
                                    <p className='test' style={{ width: 278 }}>{item.title}</p>
                                </div>
                                <div className='lineCircle'></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ marginLeft: 70 }}>
                    <h3 style={{ marginTop: 0, marginBottom: 35 }}>GIỜ MỞ CỬA</h3>
                    <p><span>Thứ 2 - Thứ 3</span>: 6.00 am - 10.00 pm</p>
                    <div className='lineTime'></div>
                    <p><span>Thứ 4 - Thứ 5</span>: 8.00 am - 6.00 pm</p>
                    <div className='lineTime'></div>
                    <p><span>Thứ 6 - Thứ 7</span>: 3.00 pm - 8.00 pm</p>
                    <div className='lineTime'></div>
                    <p><span>Chủ nhật</span>: Closed</p>
                </div>
                <div>
                    <img style={{ width: 278, height: 240, marginLeft: 50 }} src='https://www.google.com/maps/d/thumbnail?mid=1JwrFnS69sR3pVhdmBC1AnS4pibw&hl=en_US' />
                </div>
            </div>
        </div>
    )
}
