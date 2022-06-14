import React from "react";

import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header(){
    return(
        <div className="header">
            <img className="header_logo" src = "https://us.123rf.com/450wm/rclassenlayouts/rclassenlayouts1709/rclassenlayouts170900036/86347723-%EC%BE%B0%EB%A5%B8-%EB%8F%85%EC%9D%BC-9-%EC%9B%94-2017-%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%95%84%EB%A7%88%EC%A1%B4-%EB%A1%9C%EA%B3%A0-%EC%95%84%EB%A7%88%EC%A1%B4%EC%9D%80-%EB%AF%B8%EA%B5%AD-%EC%A0%84%EC%9E%90-%EC%A0%84%EC%9E%90-%EC%83%81%EA%B1%B0%EB%9E%98-%ED%9A%8C%EC%82%AC-%EB%B0%B0%ED%8F%AC%ED%8C%90%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg?ver=6"/>

            <div className="header_search">
                <input className="header_searchInput" type = "text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                
                <div className="header_option">
                    
                    <span className="header_optionLineOne">안녕하세요</span>
                    <span className="header_optionLineTwo">로그인하기</span>
                    
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">안녕</span>
                    <span className="header_optionLineTwo">하이</span>
                </div>

                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwoheader_basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;