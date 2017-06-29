import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        <Aside />
        <div className="content-wrapper main-default">
          <div className="main-info">
            <div className="env-info clear">
              <AppWeather />
              <div className="clear"></div>
              <AppTable />
              <div className="clear"></div>
              <AppChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Current Location"
    }
  }
  componentDidMount() {
    let thisSelf = this;

  }
  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="myenv-location">
            <div>myENV</div>
            <div className="myenv-locationname">
              {/*{<span className="myenv-selectlocation">{Current Location}</span>}*/}
              <span className="myenv-selectlocation">{this.state.cityName}</span>
              <span className="glyphicon glyphicon-chevron-down down-top" aria-hidden="true"></span>
            </div>
          </div>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>);
  }
}

class Aside extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active"><a href="#"><i className="fa fa-circle-o text-aqua"></i> Dashboard 1</a></li>
                <li><a href="#"><i className="fa fa-circle-o text-red"></i> Dashboard 2</a></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
class AppWeather extends Component {
  render() {
    return (
      <div className="env-weather">
        <div className="env-weatherleft"><img src={"./img/cloudy.png"} />
        </div>
        <div className="env-weatherright">
          <div className="env-weathermsg">Cloudy</div>
          <div className="env-weatherdata">
            <img className="env-weatherdata-tem" src={"./img/temperature.png"} /><span>29.2℃</span>
            <img className="env-weatherdata-wat" src={"./img/water.png"} /><span>73%</span>
          </div>

        </div>
      </div>
    );
  }
}
class AppTable extends Component {
  render() {
    return (
      <div className="env-table">
        <AppPSI />
        <div className="env-item-split"></div>
        <AppRain />
        <div className="env-item-split"></div>
        <AppDengue />
        <div className="env-item-split"></div>
        <AppItemAdd />
      </div >)
  }
}
class AppPSI extends Component {
  render() {
    return (
      <div className="env-item">
        <div>
          <span>PSI</span>
        </div>
        <div className="psi-data">
          <span>40</span>
        </div>
        <div>
          <span>Good</span>
        </div>
      </div>
    )
  }
}
class AppRain extends Component {
  render() {
    return (

      <div className="env-item">
        <div>
          RAIN
							</div>
        <div className="env-itemrain-num">
          <span>0</span>
        </div>
        <div>
          mm
					</div>
      </div>)
  }
}
class AppDengue extends Component {
  render() {
    return (

      <div className="env-item">
        <div>
          DENGUE
						    	</div>
        <div>
          <img src={"./img/dengue.png"} style={{ height: '40px' }} />
        </div>
        <div>

        </div>
      </div>)
  }
}
class AppItemAdd extends Component {
  render() {
    return (
      <div className="env-item env-item-add">
        <div className="env-item-addbtn">
          <li className="ion-ios-plus-outline" data-pack="ios" data-tags="add, include, new, invite, +"></li>
        </div>
        <div className="env-item-addword">
          Add
							</div>
      </div>
    )
  }
}
class AppChart extends Component {
  render() {
    return (
      <div className="env-chart">
        <div className="env-chart-title"><span className="et-tide">Tide</span>

          <div className="env-chart-titlepoint">
            <li className="ion-record" data-pack="default" data-tags="music, circle"></li>
          </div>
          <span className="et-sun">Sunrise &amp; Sunset</span>
        </div>
        <div style={{ height: "300px", width: "1080px" }}  >
          <canvas id="areaChart" width="1080" height="300"></canvas>
        </div>

      </div>)
  }
}

export default App;
