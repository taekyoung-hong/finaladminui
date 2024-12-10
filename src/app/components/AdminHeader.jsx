"use client";
import { useState } from "react";
import "../globals.css";

function Page() {
    // 각 메뉴의 상태를 관리하는 객체 형태
    const [hoverMenu, setHoverMenu] = useState({
        userManagement: false,
        adminManagement: false,
        pageManagement: false,
        communityManagement: false,
    });

    const [hoverSubMenu, setHoverSubMenu] = useState({
        userManagementSub1: false,
        userManagementSub2: false,
        adminManagementSub1: false,
        adminManagementSub2: false,
        pageManagementSub1: false,
        communityManagementSub1: false


    }); // 서브메뉴 상태

    // 특정 메뉴의 hover 상태를 변경하는 함수
    const handleMouseEnter = (menu) => {
        setHoverMenu((prev) => ({ ...prev, [menu]: true }));
    };

    const handleMouseLeave = (menu) => {
        setHoverMenu((prev) => ({ ...prev, [menu]: false }));
    };

    // 서 메뉴를 hover 상태를 변경하는 함수
    const handleSubMouseEnter = (menu) => {
        setHoverMenu((prev) => ({ ...prev, [menu]: true }));
    };

    const handleSubMouseLeave = (menu) => {
        setHoverMenu((prev) => ({ ...prev, [menu]: false }));
    };

    return (
        <div className="admin-Header">
            {/* 상단 사용자 정보 */}
            <div className="admin-user-color">
                <div className="admin-user">
                    <p>아이콘</p>
                    <p>내 정보</p>
                    <p>로그아웃</p>
                </div>
            </div>
            {/* 메뉴 바 */}
            <div className="menubar-color">
                <div className="menubar">
                    <ul>
                        <li className="menu-Home">HOME</li>
                        <div className="li-list">
                            <li className="menu-options">대쉬보드</li>
                            {/* 사용자 관리 */}
                            <li
                                className="menu-options"
                                onMouseEnter={() => handleMouseEnter("userManagement")}
                                onMouseLeave={() => handleMouseLeave("userManagement")}
                            >
                                사용자 관리
                                {hoverMenu.userManagement && (
                                    <ul className="dropdown">
                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("userManagementSub1")}
                                            onMouseLeave={() => handleSubMouseLeave("userManagementSub1")}
                                        >일반 회원 관리
                                            {hoverSubMenu.userManagementSub1 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right">회원 목록 조회</li>
                                                    <li className="dropdown-item-right">회원 신고 내역</li>
                                                    <li className="dropdown-item-right">경고 및 정지</li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("userManagementSub2")}
                                            onMouseLeave={() => handleSubMouseLeave("userManagementSub2")}
                                        >
                                            전문 회원 관리
                                            {hoverSubMenu.userManagementSub2 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right">회원 목록 조회</li>
                                                    <li className="dropdown-item-right">회원 신고 내역</li>
                                                    <li className="dropdown-item-right">경고 및 정지</li>
                                                    <li className="dropdown-item-right">면허 승인 관리</li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>


                            {/* 관리자 관리 */}
                            <li
                                className="menu-options"
                                onMouseEnter={() => handleMouseEnter("adminManagement")}
                                onMouseLeave={() => handleMouseLeave("adminManagement")}
                            >
                                관리자 관리
                                {hoverMenu.adminManagement && (
                                    <ul className="dropdown">
                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("adminManagementSub1")}
                                            onMouseLeave={() => handleSubMouseLeave("adminManagementSub1")}
                                        >관리자 생성
                                            {hoverSubMenu.adminManagementSub1 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right">슈퍼 관리자가 일반 관리자들을 등록</li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("adminManagementSub2")}
                                            onMouseLeave={() => handleSubMouseLeave("adminManagementSub2")}
                                        > 관리자 목록
                                            {hoverSubMenu.adminManagementSub2 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right"> 일반 관리자 정보를 수정</li>
                                                    <li className="dropdown-item-right"> 일반 관리자들에 대한 영역별 권한 지정</li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>


                            {/* 페이지 관리 */}
                            <li
                                className="menu-options"
                                onMouseEnter={() => handleMouseEnter("pageManagement")}
                                onMouseLeave={() => handleMouseLeave("pageManagement")}
                            >
                                페이지 관리
                                {hoverMenu.pageManagement && (
                                    <ul className="dropdown">
                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("pageManagementSub1")}
                                            onMouseLeave={() => handleSubMouseLeave("pageManagementSub1")}
                                        >의약품이란?
                                            {hoverSubMenu.pageManagementSub1 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right">의약품의 정의</li>
                                                    <li className="dropdown-item-right">의약품의 종류</li>
                                                    <li className="dropdown-item-right">의약품의 허가과정</li>
                                                    <li className="dropdown-item-right">신약과 제네릭</li>
                                                    <li className="dropdown-item-right">의약품의 관련 법령</li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("pageManagementSub2")}
                                            onMouseLeave={() => handleSubMouseLeave("pageManagementSub2")}
                                        >
                                            안전한 의약 생활
                                            {hoverSubMenu.pageManagementSub2 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right">의약품 검색하기</li>
                                                    <li className="dropdown-item-right">부작용 검색하기</li>
                                                    <li className="dropdown-item-right">병용금기 검색하기</li>
                                                </ul>
                                            )}
                                        </li>

                                        <li className="dropdown-item"
                                            onMouseEnter={() => handleSubMouseEnter("pageManagementSub3")}
                                            onMouseLeave={() => handleSubMouseLeave("pageManagementSub3")}
                                        >
                                            생활 속 의약
                                            {hoverSubMenu.pageManagementSub3 && (
                                                <ul className="dropdown-right">
                                                    <li className="dropdown-item-right">약국 찾아보기</li>
                                                    <li className="dropdown-item-right">폐의약품 수거함 찾아보기</li>
                                                    <li className="dropdown-item-right">보도자료 찾아보기</li>
                                                </ul>
                                            )}
                                        </li>
                                        <li className="dropdown-item">팝업 관리</li>
                                    </ul>
                                )}
                            </li>


                            {/* 커뮤니티 관리 */}
                            <li
                                className="menu-options"
                                onMouseEnter={() => handleMouseEnter("communityManagement")}
                                onMouseLeave={() => handleMouseLeave("communityManagement")}
                            >
                                커뮤니티 관리
                                {hoverMenu.communityManagement && (
                                    <ul className="dropdown">
                                        <li className="dropdown-item">공지사항</li>
                                        <li className="dropdown-item">자주 묻는 질문</li>
                                        <li className="dropdown-item">전문가와의 상담</li>
                                        <li className="dropdown-item">운영진에게 문의</li>
                                    </ul>
                                )}
                            </li>
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    );
}

export default Page;
