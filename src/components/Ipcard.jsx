import React, { Component } from "react";
import GetInfo from "../GetIpInfo";
import LoadSpinner from "./LoaderSpinner";
import IpInfo from "./Ipinfo";

export default class IpCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      loading: true,
    };
  }
  componentDidMount() {
    GetInfo().then((data) => {
      this.setState({
        info: data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <LoadSpinner />
        ) : (
          <IpInfo data={this.state.info} />
        )}
      </>
    );
  }
}
