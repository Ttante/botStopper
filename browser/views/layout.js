const html = require('choo/html')

module.exports = (pageFns) => {
  return  (state, emit) => {
    function navigateTo(page) {
      emit('pushState', page ? `/${page}` : '/')
    }

    if (!state.user && (state.route !== '/' && state.route !== '/login')) {
      emit('login')
    }

    return html`
      <div>
        <header class="nav-header dark-navbar">
          <div class="row">
            <div class="col-md-2 nav-header-title">
              Littlstar / Creators
            </div>
            <div class="col-md-2"></div>
            <div id="navBar" class="col-md-4 nav-navigation d-flex justify-content-center row align-items-end">
              ${(() => {
                if (state.user && state.user.isLoggedIn) {
                  return html`
                    <div class="container">
                      <div class="row navbar-nav-btns">
                        <div class="col-md-4">
                          <a>My Experiences</a>
                        </div>
                        <div class="col-md-4">
                          <a>Analytics</a>
                        </div>
                        <div class="col-md-4">
                          <a>Support</a>
                        </div>
                      </div>
                    </div>`
                } else {
                  return html``
                }
              })()}
            </div>
            <div class="col-md-2"></div>
            <div id="userBox" class="nav-userbox col-md-2 nav-navigation d-flex justify-content-end row align-items-end">
              <div class="row">
                <div style="margin-right:25px">
                  <img src="icons/search.png" height="25" width="25" />
                </div>
                ${(function () {
                  if (state.user && state.user.isLoggedIn) {
                    return html`
                      <div class="user-box">
                        <img src="icons/user.png" height="25" width="25" style="margin-right: 12.5px"/>
                        <span class="username">Username</span>
                      </div>
                    `
                  } else {
                    return html`
                      <div class="navbar-user-btns"><a onclick=${(function(){navigateTo('login')})}>Login</a>  /  <a href="#">Get access</a></div>
                    `
                  }
                })()}
              </div>
            </div>
          </div>
        </header>
        <div>
          ${pageFns[0](state, emit)}
        </div>
      </div>
      `
    }
}