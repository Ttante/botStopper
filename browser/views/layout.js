const layout = require('choo-layout')
const html = require('choo/html')

module.exports = (pageFns) => {
  return (function (state, emit) {
    function navigateTo(page) {
      emit('pushState', page ? `/${page}` : '/')
    }
    return html`
      <div>
        <header role="banner" id="fh5co-header">
          <nav class="navbar navbar-expand-lg dark-navbar">
            <a class="navbar-brand" onclick=${(function(){navigateTo()})}>Littlstar / Creators</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
              </ul>
              <div style="padding-right:20px">
                <img src="img/search.png" height="20" width="20" />
              </div>
              <form class="form-inline my-2 my-lg-0">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <form class="form-inline my-2 my-lg-0">
                    <span><a onclick=${(function(){navigateTo('login')})}>Login</a>  /  <a href="#">Get access</a></span>
                  </form>
                </div>
              </form>
            </div>
          </nav>
        </header>
        <div>
          ${pageFns[0](state, emit)}
        </div>
      </div>
      `
    })
}