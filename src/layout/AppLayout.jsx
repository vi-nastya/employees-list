// @flow
import * as React from 'react'
import { Layout } from 'antd'
import Icon, { GithubFilled } from '@ant-design/icons'
import styles from './styles.module.css'
import { Typography } from 'antd'
const { Title, Link, Text } = Typography

type LayoutProps = {
  children?: React.Node,
}

export const AppLayout = (props: LayoutProps): React.Node => {
  const { Header, Footer, Content } = Layout

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Icon
          type="github"
          component={() => <GithubFilled style={{ fontSize: 28 }} />}
          style={{ color: 'white', marginRight: 16 }}
        />
        <Title level={2} className={styles.title}>
          Сотрудники
        </Title>
      </Header>

      <Content className={styles.content}>{props.children}</Content>

      <Footer className={styles.footer}>
        <Text>© Виденеева Анастасия</Text>
        <Link
          href="https://github.com/vi-nastya/employees-list"
          target="_blank"
        >
          Исходный код
        </Link>
      </Footer>
    </Layout>
  )
}
