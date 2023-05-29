import React from 'react'
import '../../../css/client-page.css'

function CreditCardsPage() {
  return (
    <section className="client_section">
      <h2>My Cards</h2>
      <hr className="loan_header_divider" />

      <div className="credit_card_items">

      <div className="credit_card">
        <div className='credit_card_header'>
          <img src="/res/Nile Delta Icons/mastercard colored.svg" alt="" />
          <p>**** **** **** 5764</p>
        </div>
        <p style={{fontSize: 17}}>View Transactions</p>
      </div>

      <div className="credit_card">
        <div className='credit_card_header'>
          <img className='visa' src="/res/Nile Delta Icons/visa.svg" alt="" />
          <p>**** **** **** 9124</p>
        </div>
        <p style={{fontSize: 17}}>View Transactions</p>
      </div>
      </div>
    </section>
  )
}

export default CreditCardsPage