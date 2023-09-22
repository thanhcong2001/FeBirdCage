import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div style={{ marginBottom: 120 }}>
            <AppBar style={{ backgroundColor: '#64BE43', height: 100, justifyContent: 'center', paddingLeft: 120 }}>
                <Toolbar variant="dense" >
                    <Link style={{ textDecoration: 'none' }} to={'/'}><img className='logo' src='http://mauweb.monamedia.net/birdshop/wp-content/uploads/2018/04/logo-robin-white.png' /></Link>
                    <Link style={{ textDecoration: 'none',marginLeft:30 }} to={'/intro'}><p className='category'>Giới Thiệu</p></Link>
                    <p className='category'>Chim Cảnh</p>
                    <p className='category'>Gà Cảnh</p>
                    <Link style={{ textDecoration: 'none' }} to={'/birdCage'}><p className='category'>Lồng Chim</p></Link>
                    <p className='category'>Cám Chim</p>
                    <p className='category'>Phụ Kiện</p>
                    <Link style={{ textDecoration: 'none' }} to={'/news'}><p className='category'>Tin Tức</p></Link>
                    <p className='category'>Liên Hệ</p>
                    <div style={{ marginLeft: 80 }}>
                        <SearchIcon style={{ marginRight: 15, marginLeft: 20 }} />
                        <PersonIcon style={{ marginRight: 15 }} />
                        <LocalMallIcon />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
