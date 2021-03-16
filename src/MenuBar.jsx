import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';


var appBarStyles = makeStyles({
    appBarTop: {
        background: 'transparent',
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
        transition: '1s ease-in-out',
    },
    appBarRegular: {
        background: 'rgba(0, 0, 0, 0.4);',
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
        backdropFilter: 'blur(20px)',
        transition: '.5s ease-in-out',
    }
});

const MenuBar = (props) => {
    const [isTop, setIsTop] = useState(true);
    const classes = appBarStyles();

    const titleStyle = {
        color: 'white',
        fontFamily: 'Audhistine',
        fontSize: '1em',
        marginLeft: '3em'
    };

    const handleScroll = () => {
        if (document.documentElement.scrollTop === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    });


    return (
        <AppBar
            // className={clsx(classes.root, className)}
            position='fixed'
            className={isTop ? classes.appBarTop : classes.appBarRegular}
        >
            <span style={titleStyle}>B & Z</span>
        </AppBar>
    );
};

export default MenuBar;