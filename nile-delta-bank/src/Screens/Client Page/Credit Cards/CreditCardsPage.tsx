import React from 'react';
import '../../../css/client-page.css';
import CustomCreditCard from "../../../components/CustomCreditCard";
import creditCardData from '../../../data/credit-card-data';
import { CreditCardProps } from '../../../components/CustomCreditCard';
import { useState } from 'react';
import CustomButton from '../../../components/CustomButton';
import { Table } from 'antd';

function CreditCardsPage() {
  const [showCards, setShowCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(1);

  const [showBalance, setShowBalance] = useState(false);

  const dataSource = [
    {
      key: '1',
      description: 'Business Loan Withdrawal',
      date: '01-06-2023',
      time:'8:23:42',
      amount: <p><span className='bold'>175,000</span> EGP</p>,
    },
    {
      key: '2',
      description: 'Car Loan Withdrawal',
      date: '01-02-2023',  
      time:'22:17:42',
      amount: <p><span className='bold'>171,000</span> EGP</p>,
    },
  ];
  
  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    }
  ];

  return (
    <section className="client_section">
      <h2>
        My Cards
      </h2>
      <hr className="loan_header_divider" />

      {
          showCards ? (
            <div className="credit_card_items">
              {
                creditCardData.map((props: any) => {
                  return (
                    <CustomCreditCard
                      key={props.id}
                      creditCardNum={props.creditCardNumber}
                      type={props.type}
                      onClick={() => {
                        setShowCards(false);
                        setSelectedCard(props.id)
                      }}
                    />
                  );
                })
              }
            </div>
       ): 
          (
            <div className="w-full flex flex-col gap-y-16">
              <div className="card-num flex flex-row items-center gap-x-16">
                <img onClick={() => setShowCards(true)} className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                <h2>
                  {
                    creditCardData.find(item => item.id === selectedCard)?.creditCardNumber
                  }
                </h2>
              </div>
              <div className='ml-28 flex flex-col items-start'>
                <div className='w-full '>
                  <div className="w-full flex flex-row justify-between">
                    <h1 style={{
                      fontFamily:"outfit", fontWeight:300, color: "#505050", fontSize:"5rem", margin:0, zIndex:-5
                    }} 
                    className={showBalance ? '' : 'blurred-balance'}
                    >
                    437,912 EGP
                    </h1>
                    <CustomButton 
                      type="button"
                      body={showBalance ? "Hide Balance" : "Show Balance"}
                      style="px-24 h-18 py-0 bodia-border"
                      handleClick={() => setShowBalance(!showBalance)}
                    />
                  </div>
                  <hr style={{marginBottom:12}} className="loan_header_divider" />
                  <div className='w-full flex flex-row justify-end'>
                    <p>
                      {
                        creditCardData.find(item => item.id === selectedCard)?.creditCardNumber
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-28 flex flex-col items-start">
                <h1 style={{
                      fontFamily:"outfit", fontWeight:300, color: "#505050", fontSize:"5rem", margin:0
                    }}
                >
                  Transactions
                </h1>
                <hr className="loan_header_divider" />
                <Table className='w-full' sortDirections={["descend", "ascend"]} dataSource={dataSource} columns={columns} pagination={false} />
              </div>
            </div>
          )
      }
    </section>
  )
}

export default CreditCardsPage