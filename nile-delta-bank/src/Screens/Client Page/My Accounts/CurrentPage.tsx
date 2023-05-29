import React from 'react'
import { current_account } from '../../../data/account-cards'
import AccountCard from '../../../components/AccountCard'

function CurrentPage() {
  return (
    <div className="account_card_items">
      {
        current_account.map((account, index) => {
          return <AccountCard title={account['title']} number={account['number']} />
        })
      }
    </div>
  )
}

export default CurrentPage