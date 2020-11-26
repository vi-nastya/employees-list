// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import { Layout } from 'antd'
import Icon, { GithubFilled } from '@ant-design/icons'
import styles from './styles.module.css'
import { Typography } from 'antd'
const { Title, Link, Text } = Typography
import { EmployeesList } from './components/EmployeesList'

export const App = (): React.Node => {
  const { Header, Footer, Content } = Layout

  return (
    <Provider store={store}>
      <Layout className={styles.layout}>
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

        <Content className={styles.content}>
          <EmployeesList />
        </Content>

        <Footer className={styles.footer}>
          <Text>© Anastasia Videneeva</Text>
          <Link href="https://github.com/vi-nastya" target="_blank">
            View source code
          </Link>
        </Footer>
      </Layout>
    </Provider>
  )
}
