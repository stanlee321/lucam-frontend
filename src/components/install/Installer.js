import React from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import Image from './Image.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})


const coordHandler = (data) => {
  console.log('HEY here is the coord!! D:')
  console.log(data)
}

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className="container-slider">

      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={24}>

                  <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper} >
                      <ReactCursorPosition  activationInteractionMouse={INTERACTIONS.CLICK}
                        getCoord={coordHandler}>
                        <Image />

                      </ReactCursorPosition>
                    </Paper>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}> xs=6 sm=3</Paper>
                  </Grid>

              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);