import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from "react";

const ViewAllRequests = () => {
    interface StatusStatesType {
        key: string,
        value: string
    }

    const state_status: StatusStatesType[] = [
        {
            key: '3498',
            value: 'Pending'
        },
        {
            key: '38',
            value: 'Pending'
        },
        {
            key: '324',
            value: 'Pending'
        },
        {
            key: '31',
            value: 'Pending'
        }
    ]

    // var status_states = {
    //     '3498' : 'Balabizo 1',
    //     '38' : 'Balabizo 2',
    //     '324' : 'Balabizo 3',
    //     '31' : 'Balabizo 4',
    // }

    const [statusStates, setStatusStates] = useState(state_status);

    function updateStatus(reportID: string, handleValue: string) {
        setStatusStates((items: StatusStatesType[]) => {
            return items.map((item) => item.key === reportID ? { key: item.key, value: handleValue } : item);
        });
        console.log(statusStates);
    }

    interface DataType {
        key: string;
        name: string;
        requestID: string
        description: string
        status: string
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Report ID',
            dataIndex: 'reportID',
            key: 'reportID',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => { updateStatus(record.requestID, "Handled") }}>Handle</a>
                    <a onClick={() => { updateStatus(record.requestID, "Ignored") }}>Ignore</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            requestID: '3498',
            name: 'John Brown',
            description: 'Loan money Req',
            status: statusStates[0].value
        },
        {
            key: '2',
            requestID: '38',
            name: 'Jim Green',
            description: 'I need money',
            status: statusStates[1].value
        },
        {
            key: '3',
            requestID: '324',
            name: 'Joe Black',
            description: 'Loan Plz??',
            status: statusStates[2].value
        },
        {
            key: '4',
            requestID: '31',
            name: 'Seif',
            description: 'Loan',
            status: statusStates[3].value
        }
    ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default ViewAllRequests;