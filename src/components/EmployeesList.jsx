// @flow
import * as React from 'react'
import { useState } from 'react'
import { Table, Typography, Space } from 'antd'
import styles from './styles.module.css'
import type { Employee } from '../types/employee'

const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
  },
  {
    title: 'Фамилия',
    dataIndex: 'secondName',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
  },
]

const data: Employee[] = [
  {
    key: '1',
    name: 'Александр',
    secondName: 'Кузнецов',
    age: 32,
  },
  {
    key: '2',
    name: 'Иван',
    secondName: 'Иванов',
    age: 27,
  },
  {
    key: '3',
    name: 'Мария',
    secondName: 'Смирнова',
    age: 30,
  },
]

export const EmployeesList = (): React.Node => {
  const { Text } = Typography
  const [selectedEmployees, setSelectedEmployees] = useState([])

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
      setSelectedEmployees(selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  }

  return (
    <>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <div className={styles.summary}>
        <Text strong>Пользователи: </Text>
        {selectedEmployees.length === 0 && (
          <Text type="secondary">нет выбранных</Text>
        )}
        {selectedEmployees.length > 0 && (
          <Text>{selectedEmployees.map((item) => item.name).join(', ')}</Text>
        )}
      </div>
    </>
  )
}
