// @flow
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Typography, Space, Spin } from 'antd'
import styles from './styles.module.css'
import type { Employee } from '../types/employee'
import { fetchEmployees } from '../state/employees/slice'

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

export const EmployeesList = (): React.Node => {
  const { Text } = Typography
  const [selectedEmployees, setSelectedEmployees] = useState([])

  const dispatch = useDispatch()
  const employeesData = useSelector((state) => state.employees.data)
  const isLoadingData = useSelector((state) => state.employees.isLoading)

  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        await dispatch(fetchEmployees())
      } catch (err) {
        console.error(err)
      }
    }

    fetchEmployeesData()
  }, [])

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedEmployees(selectedRows)
    },
  }

  if (isLoadingData) {
    return (
      <div className={styles.spinWrapper}>
        <Spin size="large" />
      </div>
    )
  }

  return (
    <>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={employeesData}
        pagination={false}
        rowKey={(rowData) => String(rowData.id)}
      />
      <div className={styles.summary}>
        <Text strong>Пользователи: </Text>
        {selectedEmployees.length === 0 && (
          <Text type="secondary">не выбраны</Text>
        )}
        {selectedEmployees.length > 0 && (
          <Text>{selectedEmployees.map((item) => item.name).join(', ')}</Text>
        )}
      </div>
    </>
  )
}
