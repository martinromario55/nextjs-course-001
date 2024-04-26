type Props = {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}

const DashBoardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: Props) => {
  const isLoggedIn = false
  return isLoggedIn ? (
    <div>
      <div className="">{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  )
}

export default DashBoardLayout
