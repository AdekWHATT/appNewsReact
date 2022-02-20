import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import NewsCard from './NewsCard/NewsCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PsychologyIcon from '@mui/icons-material/Psychology';
import axios from 'axios';


const drawerWidth = 290;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



// ***'Загрузка Погоды'******************
const goToWeather = () => {
    console.log('Загрузка Погоды')

}

export default function MiniDrawer() {
    const [news, Setnews] = React.useState(null)
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [catRu, setCatRu] = React.useState('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // ***'Загрузка новостей'******************
    const goToNewsBus = async () => {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=ru&category=${'business'}&apiKey=a63ddc24567546db8b9c3141919af3ee`;
        const responce = await axios.get(newsURL)
        Setnews(responce.data.articles)
    }
    const goToNewsSport = async () => {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=ru&category=${'sport'}&apiKey=a63ddc24567546db8b9c3141919af3ee`;
        const responce = await axios.get(newsURL)
        Setnews(responce.data.articles)
    }
    const goToNewsTeh = async () => {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=ru&category=${'technology'}&apiKey=a63ddc24567546db8b9c3141919af3ee`;
        const responce = await axios.get(newsURL)
        Setnews(responce.data.articles)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Новости
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <StarPurple500Icon /> : <WidgetsIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List onClick={goToNewsBus}>
                    <ListItem button>
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText>Новости бизнеса</ListItemText>
                    </ListItem>
                    <Divider />
                </List>
                <List onClick={goToNewsSport}>
                    <ListItem button>
                        <ListItemIcon>
                            <SportsBasketballIcon />
                        </ListItemIcon>
                        <ListItemText>Новости Спорта</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List onClick={goToNewsTeh}>
                    <ListItem button>
                        <ListItemIcon>
                            <PsychologyIcon />
                        </ListItemIcon>
                        <ListItemText>Новости Технологий</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                {/* <List onClick={goToWeather}>
                    <ListItem button>
                        <ListItemIcon>
                            <WbSunnyIcon />
                        </ListItemIcon>
                        <ListItemText>Погода</ListItemText>
                    </ListItem>
                </List> */}
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {news &&
                    news.map(item => (
                        <>
                            <NewsCard
                                name={item.source.name}
                                urlToImage={item.urlToImage}
                                author={item.author}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                publishedAt={item.publishedAt}
                            />
                            <br />
                        </>
                    )

                    )
                }

            </Box>
        </Box>
    );
}