import React, { useEffect, useState } from 'react';
import HealingIcon from '@mui/icons-material/Healing';
import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import '../App.css'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
export const TodoList = () => {
    const [data, setdata] = useState([])
    const [blog, setBlog] = useState([])
    useEffect(() => {
        axios.get('https://6507a9f63a38daf4803fa131.mockapi.io/api/v1/Intro')
            .then(res => {
                setdata(res.data)
            })
        axios.get('https://6507a9f63a38daf4803fa131.mockapi.io/api/v1/birdCage')
            .then(response => {
                setBlog(response.data)
            })
    }, [])

    return (
        <Stack>
            <Box>
                <Typography style={{ marginBottom: 10, textAlign: 'center', marginLeft: 30, fontWeight: '900', color: '#3c3451', fontFamily: "cursive" }} fontSize={35}>MONA MEDIA</Typography>
                <img style={{ marginLeft: 150, height: 306, width: 1200, objectFit: 'fill' }} src='https://www.ferplast.co.uk/cdn/shop/collections/3000x750px_04_UCCELLI_Sottocategorie-1_ACCESSORI_1200x630.jpg?v=1604571800' alt='This is bird image' />
            </Box>
            {
                data.map(i => (
                    <Grid container spacing={15} style={{ justifyContent: 'center', marginBottom: 200 }}>
                        <Grid item xs={3} key={i?.id} >
                            <div className='title'>
                                <div className='icon-cus' style={{ margin: '20px auto' }}>
                                    <FlutterDashIcon />
                                </div>
                                <p className='nameStore'>{i.name}</p>
                                <p>{i.title}</p>
                                <Button variant='contained' style={{ alignContent: 'center', backgroundColor: '#64BE43', borderRadius: 20 }}>Click me</Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className='title'>
                                <div className='icon-cusone' style={{ margin: '20px auto' }}>
                                    <HealingIcon />
                                </div>
                                <p className='nameStore'>Mona Shop</p>
                                <p>Dịch vụ chăm sóc  thú nuôi với tác phong chuyên nghiệp các bạn hoàn toàn có thể yên tâm khi giao vật nuôi của các bạn cho chúng tôi.Chúng tôi rất mong được phục vụ quý khách.</p>
                                <Button variant='contained' style={{ alignContent: 'center', backgroundColor: '#64BE43', borderRadius: 20 }}>Click me</Button>
                            </div>
                        </Grid>
                        <Grid item xs={3} >
                            <div className='title'>
                                <div className='icon-cus' style={{ margin: '20px auto' }}>
                                    <CloudQueueIcon />
                                </div>
                                <p className='nameStore'>Mona Shop</p>
                                <p>Chuyên cung cấp các loại thức ăn cho vật nuôi đa dang phong phú.<br /><br />
                                    Cung cấp phụ kiện,đồ chơi cho từng loài vật nuôi khác nhau.</p>
                                <Button variant='contained' style={{ alignContent: 'center', backgroundColor: '#64BE43', borderRadius: 20 }}>Click me</Button>
                            </div>
                        </Grid>
                    </Grid>
                ))
            }
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

        </Stack>
    )
}
