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