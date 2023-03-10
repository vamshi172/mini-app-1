import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'

import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {ImCross} from 'react-icons/im'

import './index.css'

class Header extends Component {
  state = {isIcon: false, menuSection: false, searchInput: ''}

  closeMenu = () => {
    this.setState(prevState => ({menuSection: !prevState.menuSection}))
  }

  openmenus = () => {
    this.setState(prevState => ({menuSection: !prevState.menuSection}))
  }

  showSearchBar = () => {
    this.setState(prevState => ({
      isIcon: !prevState.isIcon,
    }))
  }

  changeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  renderHiden = () => (
    <ul className="hiden-section">
      <Link className="link" to="/">
        <li className="test1">Home</li>
      </Link>
      <Link to="/popular" className="link">
        <li className="test1">Popular</li>
      </Link>
      <Link to="/account" className="link">
        <li className="test1">Account</li>
      </Link>
      <button onClick={this.closeMenu} className="button-style" type="button">
        <ImCross className="wrong" />
      </button>
    </ul>
  )

  render() {
    const {menuSection, isIcon, searchInput} = this.state
    return (
      <nav className="nav-container">
        <div className="heder-container">
          <div className="large-section">
            <Link to="/" className="link">
              <img
                src="https://res.cloudinary.com/dqkmordkl/image/upload/v1678364630/Group_7399bb_uc0rco.png"
                className="movie-home"
                alt="home icon"
              />
            </Link>
            <ul className="main-function">
              <Link to="/" className="link">
                <li className="test2">Home</li>
              </Link>
              <Link className="link" to="/popular">
                <li className="test2">Popular</li>
              </Link>
            </ul>
          </div>
          <div className="right-side">
            {isIcon && (
              <div className="search-container">
                <input
                  placeholder="Search"
                  value={searchInput}
                  className="search-hide-input"
                  onChange={this.changeSearch}
                  type="search"
                />
                <HiOutlineSearch className="search-icon-hide" />
              </div>
            )}
            {!isIcon && (
              <button className="button-style" type="button">
                <HiOutlineSearch
                  onClick={this.showSearchBar}
                  className="search-icon"
                />
              </button>
            )}

            <button
              onClick={this.openmenus}
              className="button-style"
              type="button"
            >
              <MdMenuOpen className="menu-icon" />
            </button>
            <Link className="link" to="/account">
              <button className="button-style" type="button">
                <img
                  src="https://res.cloudinary.com/dqkmordkl/image/upload/v1678382998/Avatar_ycwmjg.png"
                  className="profile"
                  alt="profile"
                />
              </button>
            </Link>
          </div>
        </div>
        {menuSection && this.renderHiden()}
      </nav>
    )
  }
}

export default withRouter(Header)
