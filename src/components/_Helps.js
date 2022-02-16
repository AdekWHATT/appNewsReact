<List>
{['Новости1', 'Новости2', 'Новости3', 'Новости4'].map((text, index) => (
  <ListItem  button key={text}>
    <ListItemIcon >
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List>




// Загрузка Новостей старый код
const goToNews = () => {
  console.log('Загрузка новостей')
  let url = `https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=a63ddc24567546db8b9c3141919af3ee`;
  let req = new Request(url);
  fetch(req)
      .then(function (response) {
          response.json()
              .then(function (data) {
                  console.log(data);
              })

      })

}







//  <div className="news">
//                     {console.log(news)}
//                     {news &&
//                         news.map(item => {
//                             const name = item.source.name
//                             const title = item.title
//                             const author = item.author
//                             const url = item.url
//                             const publishedAt = item.publishedAt
//                             return (
//                                 <div>
//                                     <p>Источник: {name}</p>
//                                     <p>Автор: {author}</p>
//                                     <h4>{title}</h4>
//                                     <p>Размещено: {publishedAt}</p>
//                                 </div>
//                             )
//                         })


//                     }
//                 </div>