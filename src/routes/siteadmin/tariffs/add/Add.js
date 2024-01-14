import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

import fetch from "../../../../core/fetch";

// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "../Styles.css";
import "../Styles.css";

// Component

import Loader from "../../../../components/Loader";

import history from "../../../../core/history";

class Tariffs extends React.Component {
  constructor() {
    super();
    this.values = {
      name: "",
      description: "",
      host_commision: "",
      guest_commision: "",
      host_is_percent: 1,
      guest_is_percent: 1,
      is_only_commission: 0,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getAllTariffs: PropTypes.object,
    }),
  };

  static defaultProps = {
    data: {
      loading: true,
      getAllTariffs: [],
    },
  };

  async onSubmit(e) {
    const query = `
    query (
        $name:String,
        $description:String,
        $host_commision:Int,
        $guest_commision:Int,
        $host_is_percent:Int,
        $guest_is_percent:Int,
        $is_only_commission:Int,
      ) {
          addTariff (
            name:$name,
            description:$description,
            host_commision:$host_commision,
            guest_commision:$guest_commision,
            host_is_percent:$host_is_percent,
            guest_is_percent:$guest_is_percent,
            is_only_commission:$is_only_commission,
          ) {
            id
          }
        }
  `;

    const resp = await fetch("/graphql", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: this.values,
      }),
      credentials: "include",
    });

    history.push("/siteadmin/tariffs");
  }

  render() {
    const {
      data: { loading, getAllTariffs },
    } = this.props;
    if (loading) {
      return <Loader type={"text"} />;
    } else {
      return (
        <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div>
                    <form onSubmit={() => {}}>
                      <div className="form-group">
                        <label htmlFor="nameInput">Название</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nameInput"
                          defaultValue={this.values.name}
                          onChange={(e) => (this.values.name = e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="descriptionInput">Описание</label>
                        <input
                          type="text"
                          className="form-control"
                          id="descriptionInput"
                          defaultValue={this.values.description}
                          onChange={(e) =>
                            (this.values.description = e.target.value)
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="percentInput">Тип для хоста</label>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="hostPercentType"
                              id="po1"
                              defaultValue={this.values.host_is_percent}
                              onChange={(e) => (this.values.host_is_percent = 0)}
                            />
                            Фиксированная сумма
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="hostPercentType"
                              id="po2"
                              defaultValue={this.values.host_is_percent}
                              onChange={(e) => (this.values.host_is_percent = 1)}
                            />
                            Процент
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="percentInput">Комиссия хоста</label>
                        <input
                          type="number"
                          className="form-control"
                          id="percentInput"
                          defaultValue={this.values.host_commision}
                          onChange={(e) =>
                            (this.values.host_commision = e.target.value)
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="percentInput">Тип для гостья</label>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="guestPercentType"
                              id="po1"
                              defaultValue={this.values.guest_is_percent}
                              onChange={(e) => (this.values.guest_is_percent = 0)}
                            />
                            Фиксированная сумма
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="guestPercentType"
                              id="po2"
                              defaultValue={this.values.guest_is_percent}
                              onChange={(e) => (this.values.guest_is_percent = 1)}
                            />
                            Процент
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="percentInput">Комиссия гостья</label>
                        <input
                          type="number"
                          className="form-control"
                          id="percentInput"
                          defaultValue={this.values.guest_commision}
                          onChange={(e) =>
                            (this.values.guest_commision = e.target.value)
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="percentInput">Только комиссия</label>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="onlyCommission"
                              id="po1"
                              defaultValue={this.values.is_only_commission}
                              onChange={(e) => (this.values.is_only_commission = 1)}
                            />
                            Да
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="onlyCommission"
                              id="po2"
                              defaultValue={this.values.is_only_commission}
                              onChange={(e) => (this.values.is_only_commission = 0)}
                            />
                            Нет
                          </label>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-success w-100"
                        onClick={(e) => this.onSubmit()}
                      >
                        Сохранить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default compose(
  withStyles(s),
  graphql(
    gql`
      {
        getAllTariffs {
          id
          name
          description
          host_commision
          guest_commision
          host_is_percent
          guest_is_percent
          is_only_commission
        }
      }
    `,
    {
      options: {
        fetchPolicy: "network-only",
      },
    }
  )
)(Tariffs);
