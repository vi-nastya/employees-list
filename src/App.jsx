// @flow
import * as React from 'react'
import { Layout } from 'antd'
import Icon, { GithubFilled } from '@ant-design/icons'
import styles from './styles.module.css'
import { Typography } from 'antd'
const { Title, Link, Text } = Typography

type Employee = {
  name: string,
  secondName: string,
  age: number,
  isSelected: boolean,
}

const employees: Employee[] = [
  {
    name: 'John',
    secondName: 'Smith',
    age: 40,
    isSelected: false,
  },
]

export const App = (): React.Node => {
  const { Header, Footer, Content } = Layout

  return (
    <Layout>
      <Header className={styles.header}>
        <Icon
          type="github"
          component={() => <GithubFilled style={{ fontSize: 28 }} />}
          style={{ color: 'white', marginRight: 16 }}
        />
        <Title style={{ color: 'white', fontSize: '28px', marginBottom: 0 }}>
          Employee List
        </Title>
      </Header>

      <Content>CONTENT GOES HERE</Content>

      <Footer className={styles.footer}>
        <Text>© Anastasia Videneeva</Text>
        <Link href="https://github.com/vi-nastya" target="_blank">
          View source code
        </Link>
      </Footer>
    </Layout>
  )
}
