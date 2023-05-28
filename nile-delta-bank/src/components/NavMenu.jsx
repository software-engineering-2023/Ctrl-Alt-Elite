import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../css/nav-menu.css';
import { useNavigate } from 'react-router-dom';
import * as Routes from '../Routes/paths';
import { get, set } from 'mongoose';
// import { use } from 'express/lib/router';

function NavMenu({ children }) {
  const getPageTitle = (path) => {
    switch (path) {
      case Routes.CLIENT_MY_ACCOUNTS:
        return "My Accounts";
      case Routes.CLIENT_CREDIT_CARDS:
        return "Credit Cards";
      case Routes.CLIENT_LOANS:
        return "Loans";
      case Routes.CLIENT_PAY_BILLS:
        return "Pay Bills";
      case Routes.CLIENT_REPORT:
        return "Report Request";
      case Routes.CLIENT_SETTINGS:
        return "Settings";
      default:
        return "My Accounts";
    }
  }

  const getIndex = (path) => {
    switch (path) {
      case Routes.CLIENT_MY_ACCOUNTS:
        return 0;
      case Routes.CLIENT_CREDIT_CARDS:
        return 1;
      case Routes.CLIENT_LOANS:
        return 2;
      case Routes.CLIENT_PAY_BILLS:
        return 3;
      case Routes.CLIENT_REPORT:
        return 4;
      case Routes.CLIENT_SETTINGS:
        return 5;
      default:
        return 0;
    }
  }

  const [activeTab, setActiveTab] = useState(getIndex(window.location.pathname));
  const [pageTitle, setPageTitle] = useState(getPageTitle(window.location.pathname));
  const navigate = useNavigate();

  const handleTabClick = (index, route, newTitle) => {
    setActiveTab(index);
    setPageTitle(newTitle);
    navigate(route);
  }


  return (
    <div className="main_page">
      <div className="nav_menu">
        <div className="nav_menu_header">
          <img src="/res/banner-white.svg" alt="banner" />
        </div>

        <div className="profile-image">
          <img src="/res/youssef-hany.svg" alt="" />
          <div className="profile_element">
            <h1>Youssef Hany</h1>
            <div className="edit-button">
              <p>Edit</p>
            </div>
          </div>
        </div>

        <div className="nav_menu_links">
          <ul>
            <li className={`list-item ${activeTab == 0 ? "selected_item" : ""}`} onClick={() => handleTabClick(0, Routes.CLIENT_MY_ACCOUNTS, "My Accounts")}>
              <img src="/res/Nile Delta Icons/Left Panel/my-accounts.svg"
                className={activeTab == 0 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">My Accounts</a>
            </li>
            <li className={`list-item ${activeTab == 1 ? "selected_item" : ""}`} onClick={() => handleTabClick(1, Routes.CLIENT_CREDIT_CARDS, "Credit Score: 693")}>
              <img src="/res/Nile Delta Icons/Left Panel/credit-cards.svg"
                className={activeTab == 1 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Credit Cards</a>
            </li>
            <li className={`list-item ${activeTab == 2 ? "selected_item" : ""}`} onClick={() => handleTabClick(2, Routes.CLIENT_LOANS, "Loans")}>
              <img src="/res/Nile Delta Icons/Left Panel/loans.svg"
                className={activeTab == 2 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Loans</a>
            </li>
            <li className={`list-item ${activeTab == 3 ? "selected_item" : ""}`} onClick={() => handleTabClick(3, Routes.CLIENT_PAY_BILLS, "Pay Bills")}>
              <img src="/res/Nile Delta Icons/Left Panel/pay-bills.svg"
                className={activeTab == 3 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Pay Bills</a>
            </li>
            <li className={`list-item ${activeTab == 4 ? "selected_item" : ""}`} onClick={() => handleTabClick(4, Routes.CLIENT_REPORT, "Report an issue")}>
              <img src="/res/Nile Delta Icons/Left Panel/report.svg"
                className={activeTab == 4 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Report an issue</a>
            </li>
            <li className={`list-item ${activeTab == 5 ? "selected_item" : ""}`} onClick={() => handleTabClick(5, Routes.CLIENT_NOTIFICATIONS, "Notifications")}>
              <img src="/res/Nile Delta Icons/Left Panel/notifications.svg"
                className={activeTab == 5 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Notifications</a>
            </li>
          </ul>
        </div>

        <hr className="divider panel_divider" />
        <div className="nav_menu_links">
          <ul>
            <li className={`list-item ${activeTab == 6 ? "selected_item" : ""}`} onClick={() => handleTabClick(6, Routes.CLIENT_SETTINGS, "Settings")}>
              <img src="/res/Nile Delta Icons/Left Panel/settings.svg"
                className={activeTab == 6 ? "selected_item_icon" : ""} alt="" />
              <a className="list-item-link">Settings</a>
            </li>
            <li className={`list-item`}>
              <img src="/res/Nile Delta Icons/Left Panel/logout.svg" alt="" />
              <a className="list-item-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main_page_right">
        <div className="main_page_header">
          <h1 className="main_page_right_body">{pageTitle}</h1>
          <hr className="divider"/>
        </div>
        <div className="main_page_right_body scrollable_body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default NavMenu