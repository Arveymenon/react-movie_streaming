import * as React from 'react';

import { Button, ButtonProps, ButtonTypeMap, Card, CardActions, CardContent, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const useStyles = makeStyles({
    root: {
    //   minWidth: 275,
      width: '75vh',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

type TileCardProps = {
    name: string;
    count: number;
    image?: string;
    counting: React.Dispatch<React.SetStateAction<number>>;
    styleProps?: string;
    children?: ButtonProps;
}


export default function TileCard(props: TileCardProps) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
    <Card className={classes.root}>
        {props.children}
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name} {props.count}
        </Typography>
        {props.count > 0 ? <Button onClick={()=>props.counting(props.count - 1)}>Count Down</Button> : null }
      </CardContent>
    </Card>
    );
}