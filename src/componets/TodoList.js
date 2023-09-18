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
    useEffect(() => {
        axios.get('https://6507a9f63a38daf4803fa131.mockapi.io/api/v1/Intro')
            .then(res => {
                setdata(res.data)
            })
    }, [])

    return (
        <Stack>
            <Box>
                <Typography style={{ marginBottom: 10, textAlign: 'center', marginLeft: 30, fontWeight: '900', color: '#3c3451', fontFamily: "cursive" }} fontSize={35}>MONA MEDIA</Typography>
                <img style={{ marginLeft: 150, height: 306, width: 1200, objectFit: 'fill' }} src='https://www.ferplast.co.uk/cdn/shop/collections/3000x750px_04_UCCELLI_Sottocategorie-1_ACCESSORI_1200x630.jpg?v=1604571800' alt='This is bird image' />
            </Box>
            {/* <Grid container spacing={15} style={{ justifyContent: 'center' }}> */}
                {
                    data.map(i => (
                        <Grid container spacing={15} style={{ justifyContent: 'center' }}>
                            <Grid item xs={3} key={i?.id} >
                                <div className='title'>
                                    <div className='icon-cus' style={{ margin: '0 auto' }}>
                                        <FlutterDashIcon />
                                    </div>
                                    <p className='nameStore'>{i.name}</p>
                                    <p>{i.title}</p>
                                    <Button variant='contained' style={{ alignContent: 'center', backgroundColor: '#64BE43', borderRadius: 20 }}>Click me</Button>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className='title'>
                                    <div className='icon-cusone' style={{ margin: '0 auto' }}>
                                        <HealingIcon />
                                    </div>
                                    <p className='nameStore'>Mona Shop</p>
                                    <p>Dịch vụ chăm sóc  thú nuôi với tác phong chuyên nghiệp các bạn hoàn toàn có thể yên tâm khi giao vật nuôi của các bạn cho chúng tôi.Chúng tôi rất mong được phục vụ quý khách.</p>
                                    <Button variant='contained' style={{ alignContent: 'center', backgroundColor: '#64BE43', borderRadius: 20 }}>Click me</Button>
                                </div>
                            </Grid>
                            <Grid item xs={3} >
                                <div className='title'>
                                    <div className='icon-cus' style={{ margin: '0 auto' }}>
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

            {/* </Grid> */}
        </Stack>
    )
}
