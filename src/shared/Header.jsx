import PropTypes from 'prop-types'
import { memo } from 'react'

const Header = memo(function Header({ title }) {
    return (
        <div className='header-wrapper'>
            <span className='header-title'>{title}</span>
        </div>
    )
})

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header