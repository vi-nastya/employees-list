// @flow
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Typography, Space } from 'antd'
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

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedEmployees(selectedRows)
    },
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
          <Text type="secondary">нет выбранных</Text>
        )}
        {selectedEmployees.length > 0 && (
          <Text>{selectedEmployees.map((item) => item.name).join(', ')}</Text>
        )}
      </div>
    </>
  )
}
