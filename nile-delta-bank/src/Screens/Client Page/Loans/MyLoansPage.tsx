import React from 'react'
import '../../../css/client-page.css'
import { Table } from 'antd';

function MyLoansPage() {

  const dataSource = [
    {
      key: '1',
      description: 'Business Loan',
      next_due_date: '01-06-2023',
      days_left: '4',
      amount_due: <p><span className='bold'>175,000</span> EGP</p>,
      remaining: <p><span className='bold'>175,000</span> EGP</p>,
      total: <p><span className='bold'>700,000</span> EGP</p>,
    },
    {
      key: '2',
      description: 'Car Loan',
      next_due_date: '01-02-2024',
      days_left: '249',
      amount_due: <p><span className='bold'>171,000</span> EGP</p>,
      remaining: <p><span className='bold'>342,000</span> EGP</p>,
      total: <p><span className='bold'>855,000</span> EGP</p>
    },
  ];
  
  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Next Due Date',
      dataIndex: 'next_due_date',
      key: 'next_due_date',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    },
    {
      title: 'Days Left',
      dataIndex: 'days_left',
      key: 'days_left',
      sorter: (a: any, b: any) => a.days_left - b.days_left,
      showSorterTooltip: false,
    },
    {
      title: 'Amount Due',
      dataIndex: 'amount_due',
      key: 'amount_due',
    },
    {
      title: 'Remaining',
      dataIndex: 'remaining',
      key: 'remaining',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    }
  ];
  
  
  return (
    <section className="client_section">
      <div className="my_loans_header">
        <h2>My Loans</h2>
        <img src="/res/Nile Delta Icons/add.svg" alt="" />
      </div>
      <hr className="loan_header_divider"/>
      <Table sortDirections={["descend", "ascend"]} dataSource={dataSource} columns={columns} pagination={false} />
    </section>
  )
}

export default MyLoansPage