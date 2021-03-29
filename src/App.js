import MainItemList from './components/MainItemList'

import logo from './assets/DeSmart-logo-black-500px.png'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>Please select one item:</p>
      </header>
      <div>
        <MainItemList />
      </div>
    </div>
  )
}

export default App
