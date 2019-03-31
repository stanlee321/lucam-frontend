import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';

import Image from './Image.js';
import Options from './Options.js';


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



class FullWidthGrid extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    coords: {
      x: 0,
      y: 0
    }
  }


  updateCoods = (data) => {
    this.setState({ coords: data })
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="container-slider">

        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={24}>

                  <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper} >
                      <ReactCursorPosition activationInteractionMouse={INTERACTIONS.CLICK}
                        getData={this.updateCoods}>

                        <Image />

                      </ReactCursorPosition>
                    </Paper>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                      <Options x={this.state.coords.x} y={this.state.coords.y} />
                    </Paper>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}


FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);