import React from 'react'
import AccountCard from '../../../components/AccountCard'
import { savings_account, current_account } from '../../../data/account-cards'

function AllAccountsPage() {
  return (
    <div>
      <section className="client_section">
        <h2>Savings Accounts</h2>
        <hr className="loan_header_divider" />

        <div className="account_card_items">
          {
            savings_account.map((account, index) => {
              return <AccountCard title={account['title']} number={account['number']} />
            })
          }
        </div>
      </section>
      <section className="client_section">
        <h2>Current Accounts</h2>
        <hr className="loan_header_divider" />

        <div className="account_card_items">
          {
            current_account.map((account, index) => {
              return <AccountCard title={account['title']} number={account['number']} />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default AllAccountsPage