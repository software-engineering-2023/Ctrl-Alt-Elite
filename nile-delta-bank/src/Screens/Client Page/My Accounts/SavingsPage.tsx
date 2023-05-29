import React from 'react'
import { savings_account } from '../../../data/account-cards'
import AccountCard from '../../../components/AccountCard'

function SavingsPage() {
  return (
    <div className="account_card_items">
      {
        savings_account.map((account, index) => {
          return <AccountCard title={account['title']} number={account['number']} />
        })
      }
    </div>
  )
}

export default SavingsPage