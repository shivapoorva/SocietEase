import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

/**
 * @function useStyles
 * @desc Custom hook for styling the Featurespage component.
 * @returns {Object} The classes object containing the CSS classes.
 */
const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[3],
        "&:hover": {
            backgroundColor: "#3baee7",
        },
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
    },
    description: {
        textAlign: "center",
    },
}));

const FeatureBox = ({ image, title, description, link }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
                <CardMedia className={classes.image} image={image} />
                <Link to={`/${link}`}>
                    <CardContent>
                        <div variant="h6" className={classes.title}>
                            {title}
                        </div>
                        <Typography variant="body2" className={classes.description}>
                            {description}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        </>

    );
};




export default FeatureBox;