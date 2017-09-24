const html = require('choo/html')

module.exports = (pageFns) => {
  return  (state, emit) => {
    return html`
      <div>
        <div>
          ${pageFns[0](state, emit)}
        </div>
      </div>
      `
    }
}