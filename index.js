//SIDEBAR

// THEME

const theme = document.querySelector('.theme .input')
const bullTheme = document.querySelector('.theme .input .bull')

const menuItems = document.querySelectorAll('.menu-items')

//MESSAGES

const messagesNotifications = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

//enlever la class active
const changeActiveClass = () => {
    menuItems.forEach(item => {
        if (item.classList.contains('active'))
            item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveClass()
        item.classList.add('active')
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none'
        } else {
            document.querySelector('#notifications .notification-count').style.display = 'none'
            document.querySelector('.notifications-popup').style.display = 'block'
        }
    })
})

// MESSAGES NOTIFICATIONS

// FONCTION DE RECHERCHE DES MESSAGES

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase()
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex'
        } else {
            user.style.display = 'none'
        }
    })
}

// CHERCHER UN MESSAGE

messageSearch.addEventListener('keyup', searchMessage)

// MISE EN SURBRILLANCE DE LA PARTIE MESSAGE LORSQU'ON CLIQUE SUR MESSAGES

messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messagesNotifications.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
        messages.style.transition = 'all ease 300ms'
    }, 1000)
})

// CHANGER LE THEME

theme.addEventListener('click', () => {
    if (bullTheme.style.marginLeft === '0px') {
        bullTheme.style.marginLeft = '1rem'
    } else {
        bullTheme.style.marginLeft = '0px'
    }
})
