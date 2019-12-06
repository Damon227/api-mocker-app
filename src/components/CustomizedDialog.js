import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const MyDialog = props => {
  let myDialogStyle = {
    //root: { backgroundColor: "blue" },
    paper: {
      maxWidth: props.maxWidth,
      maxHeight: props.maxHeight,
      minWidth: "40%",
      minHeight: "50%"
    }
  };

  const classes = makeStyles(() => myDialogStyle)();

  return (
    <Dialog classes={classes} onClose={props.onClose} open={props.open} scroll="paper">
      {props.children}
    </Dialog>
  );
};

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

//展示类对话框
function CustomizedDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getStyle = () => {
    let style = { disabled: false };
    if (props.customStyle.variant) {
      style["variant"] = props.customStyle.variant;
    }
    if (props.customStyle.color) {
      style["color"] = props.customStyle.color;
    }

    return style;
  };

  return (
    <div style={{ display: "inline" }}>
      <Button {...getStyle()} onClick={handleClickOpen} disabled={props.disabled}>
        {props.openButtonName}
      </Button>
      <MyDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxHeight={props.customStyle.maxHeight}
        maxWidth={props.customStyle.maxWidth}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          {React.cloneElement(props.children, { onClose: handleClose })}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant={props.customStyle.variant}
            color={props.customStyle.color}
          >
            {props.closeButtonName}
          </Button>
        </DialogActions>
      </MyDialog>
    </div>
  );
}

CustomizedDialog.propTypes = {
  openButtonName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  closeButtonName: PropTypes.string.isRequired,
  customStyle: PropTypes.shape({
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.string,
    variant: PropTypes.oneOf(["contained", "outlined"]),
    color: PropTypes.oneOf(["primary", "secondary"])
  })
};

CustomizedDialog.defaultProps = {
  disabled: false,
  customStyle: {
    maxWidth: "80%",
    maxHeight: "60%",
    variant: "contained",
    color: "primary"
  }
};

export default CustomizedDialog;
