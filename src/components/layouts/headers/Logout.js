/**
 * logout header widget
 */
/* eslint-disable */
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import * as checkoutAction from "../../../actions/checkoutAction";
import { withRouter } from "react-router";
import SignInTwo from "../../global/forms/SignInTwo";
import "../../../routes/session/sign-in/signin.scss";

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

class Logout extends React.Component {
  state = {
    anchorEl: null,
    user: {
      url: require("../../../assets/avatars/no-login.png"),
      alt: "user"
    },
    open: false,
    token: "",
    login: true,
    menus: [
      {
        id: 1,
        title: "Profile",
        icon: "account_circle",
        path: "/sign-in"
      },
      {
        id: 2,
        title: "Account",
        icon: "settings",
        path: "/sign-in"
      },
      {
        id: 3,
        title: "Message",
        icon: "email",
        path: "/sign-in"
      },
      {
        id: 4,
        title: "Logout",
        icon: "power_settings_new",
        path: "/sign-in"
      }
    ]
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    if (localStorage.token !== undefined && localStorage.token.length > 0) {
      this.setState({
        menus: [
          {
            id: 1,
            title: "Profile",
            icon: "account_circle",
            path: "/account/profile"
          },
          {
            id: 2,
            title: "Account",
            icon: "settings",
            path: "/account/profile"
          },
          {
            id: 3,
            title: "Message",
            icon: "email",
            path: "/account/profile"
          },
          {
            id: 4,
            title: "Logout",
            icon: "power_settings_new",
            path: "/log-out"
          }
        ],
        login: true
      });
    } else if (localStorage.token === undefined) {
      this.setState({
        menus: [
          {
            id: 4,
            title: "Login",
            icon: "input",
            path: "/sign-in"
          }
        ],
        login: false
      });
    }
  }

  logIn() {
    this.handleClickOpen();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      console.log(nextProps);
      if (
        nextProps.sign_up_data.token !== undefined &&
        nextProps.sign_up_data.token.length > 0
      ) {
        this.setState({
          token: nextProps.sign_up_data.token,
          menus: [
            {
              id: 1,
              title: "Profile",
              icon: "account_circle",
              path: "/account/profile"
            },
            {
              id: 2,
              title: "Account",
              icon: "settings",
              path: "/account/profile"
            },
            {
              id: 3,
              title: "Message",
              icon: "email",
              path: "/account/profile"
            },
            {
              id: 4,
              title: "Logout",
              icon: "power_settings_new",
              path: "/log-out"
            }
          ],
          login: true
        });
      } else if (
        nextProps.log_in_data.token !== undefined &&
        nextProps.log_in_data.token.length > 0
      ) {
        this.setState({
          token: nextProps.log_in_data.token,
          menus: [
            {
              id: 1,
              title: "Profile",
              icon: "account_circle",
              path: "/account/profile"
            },
            {
              id: 2,
              title: "Account",
              icon: "settings",
              path: "/account/profile"
            },
            {
              id: 3,
              title: "Message",
              icon: "email",
              path: "/account/profile"
            },
            {
              id: 4,
              title: "Logout",
              icon: "power_settings_new",
              path: "/log-out"
            }
          ],
          login: true
        });
      }
    }
    if (nextProps.log_out) {
      this.setState({
        menus: [
          {
            id: 4,
            title: "Login",
            icon: "input",
            path: "/sign-in"
          }
        ],
        login: false
      });
    }
  }

  //define function for open dropdown
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  //define function for close dropdown

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const user = this.state.user;
    return this.state.login ? (
      <div  style={{marginLeft:15}} className="iron-logout-wrap menu_wrapper">
        <Avatar
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          className="icon-btn"
          alt={user.alt}
          src={user.url}
        />
        <ul className="nav_menu_ul">
          {this.state.menus.map((menu, index) => (
            <li key={index} onClick={this.handleClose} className="nav_menu_li">
              <Link to={menu.path}>
                <i className="material-icons">{menu.icon}</i>
                <span className="mb-0">{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div style={{marginLeft:15}}>
        <div onClick={this.logIn.bind(this)} style={{ cursor: "pointer" }}>
          Login &amp; SignUp
        </div>
        <Dialog
          classes={{
            container: "sign_in_modal_container",
            paper: "sign_in_modal",
            paperScrollBody: "sign_in_body"
          }}
          disableBackdropClick={true}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          {this.state.open ? (
            <IconButton
              aria-label="Close"
              className={"closeButton"}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
          <DialogContent>
            <div className="image_sign_in" />
            <div className="form_modal">
              <SignInTwo />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sign_up_data: state.checkout.sign_up_data,
  log_in_data: state.checkout.log_in_data,
  log_out: state.checkout.log_out
});

export default withRouter(
  connect(
    mapStateToProps,
    checkoutAction
  )(Logout)
);
