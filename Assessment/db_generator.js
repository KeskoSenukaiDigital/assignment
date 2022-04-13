
var casual = require('casual');
var request = require('request');

module.exports = () => {
  const data = { books: [], book: [], lists: [] }

  for (let i = 100; i <= 500; i++) {
    var r = request(`https://api.lorem.space/image/book`, function (e, response) {
      var rListId = casual.integer(from = 1, to = 9)
      var rTitle = casual.title
      var rImg = response.request.uri.href

      data.books.push({
        id: i,
        list_id: rListId,
        title: rTitle,
        img: rImg
      })
      data.book.push({
        id: i,
        list_id: rListId,
        isbn: casual.card_number(),
        publication_date: casual.date(format = 'YYYY-MM-DD') + `T` + casual.time(format = 'HH:mm:ss') + `+02:00`,
        author: casual.full_name,
        title: rTitle,
        img: rImg,
        description: casual.sentences(n = casual.integer(from = 3, to = 50))
      })
    })
  }

  for (let i = 1; i <= 10; i++) {
    var rTitle = casual.word

    data.lists.push({
      id: i,
      title: rTitle.charAt(0).toUpperCase() + rTitle.slice(1)
    })
  }

  return data
}
