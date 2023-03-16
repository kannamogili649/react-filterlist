import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabitem = () => {
    updateActiveTabId(tabId)
  }

  const activeTab = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={onClickTabitem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
