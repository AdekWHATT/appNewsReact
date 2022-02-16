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