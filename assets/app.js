const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listProduct = [
    {
        id: 1,
        name: 'Mushroom Pizza',
        price: 7.49, 
        quantity: 1,
        image: "../img/pizza/pizza-mushroom.png",
        type: 'pizza'
    },
    {
        id: 2,
        name: 'Pepper\'s Pizza',
        price: 8.49, 
        quantity: 1,
        image: "../img/pizza/pizza_pepper.png",
        type: 'pizza'
    },
    {
        id: 3,
        name: 'Mix Pizza',
        price: 10.99, 
        quantity: 1,
        image: "../img/pizza/pizza-m.png",
        type: 'pizza'
    },
    {
        id: 4,
        name: 'Tomatoes Pizza',
        price: 6.49, 
        quantity: 1,
        image: "../img/pizza/pizza-tomatoes.png",
        type: 'pizza'
    },
    {
        id: 5,
        name: 'Cucumber Pizza',
        price: 5.49, 
        quantity: 1,
        image: "../img/pizza/pizza_cucumber.png",
        type: 'pizza'
    },
    {
        id: 6,
        name: 'Mushroom Pizza',
        price: 7.49, 
        quantity: 1,
        image: "../img/pizza/pizza-mushroom.png",
        type: 'pizza'
    }
    ,
    {
        id: 7,
        name: 'Chicken Pizza',
        price: 9.89, 
        quantity: 1,
        image: "../img/pizza/pizza-slice.png",
        type: 'pizza'
    }
    ,
    {
        id: 8,
        name: 'Sausage Pizza',
        price: 8.99, 
        quantity: 1,
        image: "../img/pizza/pizza-sausage.png",
        type: 'pizza'
    },
    {
        id: 9,
        name: 'Vegetables Pizza',
        price: 9.69, 
        quantity: 1,
        image: "../img/pizza/pizza-slice.png",
        type: 'pizza'
    },
    {
        id: 10,
        name: 'Mushroom Pizza',
        price: 7.49, 
        quantity: 1,
        image: "../img/pizza/pizza-mushroom.png",
        type: 'pizza'
    },
    {
        id: 16,
        name: '7UP soda cans',
        price: 1.49, 
        quantity: 1,
        image: "../img/drinks/7up.jpeg",
        type: 'drink'
    },
    {
        id: 17,
        name: '7UP 1.5l bottle',
        price: 3.49, 
        quantity: 1,
        image: "../img/drinks/7upbig.jpeg",
        type: 'drink'
    },
    {
        id: 18,
        name: 'Aquafina',
        price: 1.19, 
        quantity: 1,
        image: "../img/drinks/aquafina.png",
        type: 'drink'
    },
    {
        id: 19,
        name: 'Beer 333',
        price: 2.49, 
        quantity: 1,
        image: "../img/drinks/beer333.png",
        type: 'drink'
    },
    {
        id: 20,
        name: 'Strongbold Gold',
        price: 3.19, 
        quantity: 1,
        image: "../img/drinks/strongbowgold.png",
        type: 'drink'
    },
    {
        id: 21,
        name: 'Strongbow Honey',
        price: 3.19, 
        quantity: 1,
        image: "../img/drinks/strongbowhoney.jpeg",
        type: 'drink'
    },
    {
        id: 22,
        name: 'Mirinda',
        price: 1.99, 
        quantity: 1,
        image: "../img/drinks/mirinda.png",
        type: 'drink'
    }
    ,
    {
        id: 23,
        name: 'Pepsi Black',
        price: 1.79, 
        quantity: 1,
        image: "../img/drinks/pepsiblack.jpeg",
        type: 'drink'
    }
    ,
    {
        id: 24,
        name: 'Lipton Cans',
        price: 3.19, 
        quantity: 1,
        image: "../img/drinks/lipton.jpeg",
        type: 'drink'
    },
    {
        id: 11,
        name: 'Bacon Cheese Burger',
        price: 7.49, 
        quantity: 1,
        image: "../img/burger/burger1.png",
        type: 'burger'
    },
    {
        id: 12,
        name: 'Classic Burger',
        price: 6.49, 
        quantity: 1,
        image: "../img/burger/burger2.png",
        type: 'burger'
    },
    {
        id: 13,
        name: 'Double Bacon Cheese Burger',
        price: 6.99, 
        quantity: 1,
        image: "../img/burger/burger3.png",
        type: 'burger'
    },
    {
        id: 14,
        name: 'Bacon Cheese Burger',
        price: 8.49, 
        quantity: 1,
        image: "../img/burger/burger4.png",
        type: 'burger'
    },
    {
        id: 15,
        name: 'Bacon Cheese Burger',
        price: 8.49, 
        quantity: 1,
        image: "../img/burger/burger5.png",
        type: 'burger'
    },
    {
        id: 25,
        name: 'Hotdog #1',
        price: 4.19, 
        quantity: 1,
        image: "../img/hotdog/hotdog1.png",
        type: 'hotdog'
    },
    {
        id: 26,
        name: 'Hotdog #2',
        price: 3.19, 
        quantity: 1,
        image: "../img/hotdog/hotdog2.png",
        type: 'hotdog'
    },
    {
        id: 27,
        name: 'Hotdog #3',
        price: 6.49, 
        quantity: 1,
        image: "../img/hotdog/hotdog3.png",
        type: 'hotdog'
    },
    {
        id: 28,
        name: 'Hotdog #4',
        price: 2.99, 
        quantity: 1,
        image: "../img/hotdog/hotdog4.png",
        type: 'hotdog'
    },
    {
        id: 29,
        name: 'Hotdog #5',
        price: 1.99, 
        quantity: 1,
        image: "../img/hotdog/hotdog5.png",
        type: 'hotdog'
    },
    {
        id: 30,
        name: 'Snack Cheese',
        price: 0.99, 
        quantity: 1,
        image: "../img/snack/snackphomai.png",
        type: 'snack'
    },
    {
        id: 31,
        name: 'Snack Shrimp',
        price: 0.99, 
        quantity: 1,
        image: "../img/snack/snack2.png",
        type: 'snack'
    },
    {
        id: 32,
        name: 'Snack Red pumpkin',
        price: 0.99, 
        quantity: 1,
        image: "../img/snack/snack3.png",
        type: 'snack'
    },
    {
        id: 33,
        name: 'Snack Red pumpkin(Chicken)',
        price: 0.99, 
        quantity: 1,
        image: "../img/snack/snack4.png",
        type: 'snack'
    },
    {
        id: 34,
        name: 'Snack Onions',
        price: 0.99, 
        quantity: 1,
        image: "../img/snack/snack5.png",
        type: 'snack'
    },
    {
        id: 35,
        name: 'Snack Potatoes',
        price: 0.99, 
        quantity: 1,
        image: "../img/snack/snack6.png",
        type: 'snack'
    },
]

const paginationBtns = $$('.btn-pagination')

let newProducts = []
newProducts.push(...listProduct)
const itemPerPage = 6
let currentPage = JSON.parse(localStorage.getItem('localCurrentPage')) || 1
let startIndex = (currentPage - 1) * itemPerPage
let endIndex = currentPage * itemPerPage
const currentPagination = $$('.btn-pagination')
let totalPages = Math.ceil(listProduct.length / itemPerPage)
const formELement = $('.authentic__form-register')
const formELementLogin = $('.authentic__form-login')
let loggedUser = JSON.parse(localStorage.getItem('logged_user')) || {}
const localUserInfo = 'info'
const users = JSON.parse(localStorage.getItem(localUserInfo)) || []
const warningMsg = $('.slider-warning-msg')
const dangerMsg = $('.slider-danger-msg')
const successMsg = $('.slider-success-msg')
let inputs = formELement.querySelectorAll('.input')
const localName = 'product'
const productCarts = JSON.parse(localStorage.getItem(localName)) || []

function start() {
    renderProducts(listProduct)
    getCurrentPageOfNumber()
    getPreviousPage();
    getNextPage();
    renderCartProducts()
    getTotalMoney()
    $('.header__user-login').addEventListener('click', openLoginForm)
    $('.header-search').addEventListener('keyup', handleSearch)
    $('.product-form .category-icon').onclick = handleViewAllProduct
    $('.btn-signin').onclick = handleLogin
    inputs.forEach(input => input.onblur = handleValidate)
    $('.btn-signup').onclick = handleRegister
    handleCategoryClicked()
    changeStatusLogged()
}
start()

function handleCategoryClicked() {
    $$('.category-item').forEach((item, index) => {
        let itemName = item.querySelector('.category-name').textContent.toLowerCase()
        item.addEventListener('click', () => {
            handleFilter(itemName)
            getCategoryIndexClicked(index)
        })
    })
}

function handleSearch(e) {
    $$('.category-item').forEach(item => item.classList.remove('category-item--active'))
    currentPage = 1
    startIndex = 0
    endIndex = 6
    newProducts = listProduct.filter((item) => 
        item.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        )
    totalPages = Math.ceil(newProducts.length / itemPerPage)
    renderProducts(newProducts)
}

function getTotalMoney() {
    let money = productCarts.reduce((a, b) => a + b.price, 0)
    $('.cart__total-money').textContent = money.toFixed(2)
}

function handleViewAllProduct() {
    currentPage = 1
    startIndex = 0
    endIndex = 6
    newProducts = Object.assign(listProduct)
    totalPages = Math.ceil(newProducts.length / itemPerPage)
    renderProducts(listProduct)
    $$('.category-item').forEach(item => item.classList.remove('category-item--active'))
}

function getCategoryIndexClicked(index) {
    const category = $$('.category-item')
    for(let i in category) {
        if(category.hasOwnProperty(i)) {
            i == index ? category[i].classList.add('category-item--active')
             : category[i].classList.remove('category-item--active')
        }
    }
}

function handleFilter(name) {
    currentPage = 1
    startIndex = 0
    endIndex = 6
    newProducts = []
    listProduct.forEach(item => {
        if(item.type.toLowerCase().includes(name.toLowerCase())) {
            newProducts.push(item)
        }
    })
    totalPages = Math.ceil(newProducts.length / itemPerPage)
    renderProducts(newProducts)
}

function handleAddCartItem(id, callback) {
    const cartItem = listProduct.find(item => item.id === id)
    const index = productCarts.findIndex(item => item.id === id) 
    let priceOfCartItems = cartItem.price
    if(productCarts.find(item => item.id == id)) {
        productCarts[index].quantity++
        productCarts[index].price += priceOfCartItems
    } else {
        productCarts.push({
            name: cartItem.name,
            id: cartItem.id,
            image: cartItem.image,
            quantity: cartItem.quantity,
            price: cartItem.price,
            type: cartItem.type
        })
    }
    getTotalMoney()
    callback()
    localStorage.setItem(localName, JSON.stringify(productCarts))
}

function handleDeleteCartItem(id, callback) {
    const index = productCarts.findIndex(item => item.id === id)
    $('.order-item-' + id).classList.add('fall')
    setTimeout(() => {
        if( $('.order-item-' + id)) {
            $('.order-item-' + id).remove()
        }
        productCarts.splice(index, 1)
        localStorage.setItem(localName, JSON.stringify(productCarts))
        callback()
        renderCartProducts()
    }, 500);
}

function renderCartProducts() {
    const htmls = productCarts.map(item => `
        <div class="order-item order-item-${item.id}">
            <span class="order-item-thumbnail">
                <img src="${item.image}" alt="">
            </span>
            <span class="order-item-desc">
                <h3>${item.name}</h3>
                <p class="order-item-quantity-form">
                    <span class="order-item-quantity-wrap">
                        <span class="order-item-quantity-x">x</span>
                        <span class="order-item-quantity">&ThinSpace;${item.quantity}</span>
                    </span>
                <span class="btn btn-delete" onclick = "handleDeleteCartItem(${item.id}, getTotalMoney)"><i class="ti-trash"></i></span>
            </p>
            </span>
            <span class="order-item-price"><span style="color: var(--primary-color);">$</span> ${item.price.toFixed(2)}</span>
        </div>
    `).join('')
    let nocart = ` <div class="order-nocart">
    <img src="../img/empty-cart.png" alt="">
    <h3 class="order-nocart-notifi">Your cart is empty :(</h3>
    </div>`
    if(productCarts.length == 0) {
        $('.order-list').innerHTML = nocart
    } else {
        $('.order-list').innerHTML = htmls
    }
}

// Pagination test

function getNextPage() {
    $('.btn-pagination-next').addEventListener('click', () => {
        currentPage ++
        if(currentPage >= totalPages) {
            currentPage = totalPages
        }
        startIndex = (currentPage - 1) * itemPerPage
        endIndex = itemPerPage * currentPage
        localStorage.setItem('localCurrentPage', JSON.stringify(currentPage))
        renderProducts(newProducts) 
    })
}

function getPreviousPage() {
    $('.btn-pagination-prev').addEventListener('click', () => {
        currentPage --
        if(currentPage <= 1) {
            currentPage = 1
        }
        startIndex = (currentPage - 1) * itemPerPage
        endIndex = itemPerPage * currentPage
        localStorage.setItem('localCurrentPage', JSON.stringify(currentPage))
        renderProducts(newProducts)
    })
}

function totalPaginationButtons() {
    paginationBtns.forEach((item, index) => {
        if(!isNaN(item.textContent)) {
            if(index <= totalPages) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
    
            }
        } 
    })
}

function getCurrentPageOfNumber() { 
    paginationBtns.forEach((item, index) => item.addEventListener('click', () =>{
        if(!isNaN(item.textContent)) {
            currentPage = parseInt(item.textContent)
            startIndex = (currentPage - 1) * itemPerPage
            endIndex = itemPerPage * currentPage
            localStorage.setItem('localCurrentPage', JSON.stringify(currentPage))
            renderProducts(newProducts)
        }
    }))
}

function getCurrentPage() {
    paginationBtns.forEach((item, index) => {
        if(!isNaN(item.textContent)) {
            if(index == currentPage) {
                paginationBtns[index].classList.add('btn-pagination--active')
            } else {
                paginationBtns[index].classList.remove('btn-pagination--active')
            }
        }
    })
}

function renderProducts(products) {  
    totalPaginationButtons()
    getCurrentPage()
    if(products.length == 0) {
        $('.product-wrap').style.justifyContent = 'center'
        $('.pagination-wrap').style.display = 'none'
        const htmls = `
            <div class="product-not-found-form">
                <p>Product not found :(</p>
                <img src="../img/product-not-found.png" alt="">
            </div>
        `
        $('.product-wrap').innerHTML = htmls     
    }
    else {
        $('.product-wrap').style.justifyContent = 'unset'
        $('.pagination-wrap').style.display = 'flex'
        const htmls = products.map((item, index) => {
            if(index >= startIndex && index < endIndex) {
            return `
            <div data-type = "${item.type}" class="product-item product-item-${item.id}">
                <img src="${item.image}" alt="" class="product-thumbnail">,
                <div class="product-info">
                    <h3 class="product-name">${item.name}</h3>
                    <p class="product-rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </p>
                    <span class="product__price-form">$ <span class="product-price">${item.price}</span></span>
                    <button onclick = "handleAddCartItem(${item.id},renderCartProducts)" class="btn product-btn"><i class="ti-plus"></i></button>
                </div>
            </div>
        `}}).join('')
    $('.product-wrap').innerHTML = htmls
    }
}

// Validate
function openLoginForm(e) {
    e.preventDefault()
    $('.overlay-form-login').style.display = 'flex'
    $('.main').classList.add('blur')
    closeLoginForm()
}

$('.sign-in-link').onclick = (e) => { 
    e.preventDefault()
    $('.overlay-form').style.display = 'none'
    $('.overlay-form-login').style.display = 'flex' 
}

$('.overlay-login').onclick = () => {
    $('.overlay-form-login').style.display = 'none'
    $('.main').classList.remove('blur')
}

$('.sign-up-link').onclick = (e) => { 
    e.preventDefault()
    $('.overlay-form').style.display = 'flex'
    $('.overlay-form-login').style.display = 'none' 
}

function closeLoginForm() {
    $('.overlay').onclick = () => {
        $('.overlay-form').style.display = 'none'
        $('.overlay-form-login').style.display = 'none'
        $('.main').classList.remove('blur')
    }
}

const validateRules = {
    name: function(value) {
        return value.length >= 2 ? undefined : 'Name has atleast 2 character!'
    },
    email: function(value) {
        const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value) ? undefined : 'Please enter valid email!'
    }, 
    password: function(value) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        return regex.test(value) ? undefined : 'Password has more than 8 character, atleast one upperCase, one lowercase and one number!'
    }
}

function toast({message = '', type = 'warning', duration = 3000}) {
    const main = $('#slide')
    if(main) {
        const removeTimeOut =  setTimeout(() => { 
            main.removeChild(toast)
        }, duration + 1000)

        const icons = {
            warning: 'alert-icon fas fa-exclamation-triangle',
            success: 'alert-icon fas fa-check-circle',
            danger: 'alert-icon fas fa-times-circle'
        }
        const icon = icons[type]
        const toast = document.createElement('div')
        toast.onclick = (e) => {
            if(e.target.closest('.delete-msg-btn')) {
                main.removeChild(toast)
                clearTimeout(removeTimeOut)
            }
        }
        toast.classList.add('slider-msg', `slider-${type}-msg`)
        toast.innerHTML = `
            <i class="${icon}"></i>
            <span class="msg">${message}</span>
            <button class="delete-msg-btn"><i class="fas fa-times"></i></i></button>
        `
        toast.style.animation =  `loginMessage 0.3s ease, fadeOut 0.5s linear forwards ${duration / 1000}s`
        main.appendChild(toast)
    }
}

function handleValidate(e) {
    let rules = validateRules[e.target.name]
    let errorMsg = rules(e.target.value)
    if(errorMsg) {
        toast({message: errorMsg, type: 'warning', duration: 3000})
    }
    return !errorMsg
}

function handleSuccess() {
    $('.overlay-form').style.display = 'none'
    $('.overlay-form-login').style.display = 'none'
    $('.main').classList.add('blur')
    $('.loader-wrapper').classList.add('show-flex')
    setTimeout(() => {
        $('.main').classList.remove('blur')
        $('.loader-wrapper').classList.remove('show-flex')
       
    }, 2000)
    setTimeout(() => {
        toast({message: 'Successfully!', type: 'success', duration: 3000})
    },1800)
}

function handleRegister(e) {
    e.preventDefault()
    let name = inputs[0].value
    let password = inputs[2].value
    let email = inputs[1].value
    let isValid = true
    inputs.forEach(input => {
        if (!handleValidate({target: input})) {
            isValid = false
        }
    })
    let ischecked = false
    if($('.input-radio').checked) {
        ischecked = true
    } else {
        toast({message: 'Please check the policy to continue', type: 'danger', duration: 3000})
        ischecked = false
    }

    let id = users.length == 0 ? 1 : users.length + 1
    
    let isDuplicate = users.some(user => {
        return user.email.localeCompare(email) == 0 || user.name.localeCompare(name) == 0
    })
    if(isDuplicate) {
        toast({message: 'UserName or Email is duplicate!', type: 'danger', duration: 3000})
    } else {
        if(isValid) {
           if(ischecked) {
            let userRegister = { id, name, email, password }
            handleSubmit(userRegister)
           }
        }
    }
}

function handleSubmit(userRegister) {
    handleSuccess()
    loggedUser = Object.assign(userRegister)
    localStorage.setItem('logged_user', JSON.stringify(loggedUser))
    changeStatusLogged()
    users.push(userRegister)
    localStorage.setItem(localUserInfo, JSON.stringify(users))
}

function handleLogin() {
    const inputs = formELementLogin.querySelectorAll('.input')
    let email = inputs[0].value
    let password = inputs[1].value
    let userLogin = { email, password }
    let isValid = false
    users.forEach(user => {
        if(user.email.localeCompare(userLogin.email) == 0 && user.password.localeCompare(userLogin.password) == 0) {
            isValid = true
            handleRequest(user)
        } else if (email == '' || password == '') {
        toast({message: 'Email or Password can\'t be blank!', type: 'danger', duration: 3000})
        }
    })
    if(!isValid)  {
        toast({message: 'Email or Password is invalid', type: 'danger', duration: 3000})
    }
}

function changeStatusLogged() {
    if(Object.keys(loggedUser).length !== 0) {
        $('.header__user-login').style.display = 'none'
        $('.banner__text-user').textContent = 'Hello ' + loggedUser.name
        $('.header__user-name').textContent = loggedUser.name
        $('.header__user-logged').classList.add('show')
    } else {
        $('.banner__text-user').textContent = 'Hello'
        $('.header__user-login').style.display = 'flex'
        $('.header__user-logged').classList.remove('show')
    }
}

function handleRequest(user) {
    handleSuccess()
    loggedUser = Object.assign(user)
    localStorage.setItem('logged_user', JSON.stringify(loggedUser))
    changeStatusLogged()
}

$('.log-out').onclick = () => {
    loggedUser = {}
    localStorage.setItem('logged_user', JSON.stringify(loggedUser))
    changeStatusLogged()
}






