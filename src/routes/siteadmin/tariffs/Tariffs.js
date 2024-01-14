import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Styles.css";
import "./Styles.css";

import history from "../../../core/history";

// Component
import { Table, Button } from "react-bootstrap";

import Loader from "../../../components/Loader";

class Tariffs extends React.Component {
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

  render() {
    const {
      data: { loading, getAllTariffs },
    } = this.props;
    if (loading) {
      return <Loader type={"text"} />;
    } else {
      return (
        <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
          <div>
            <div className={cx(s.dFlex, s.dJcr, s.mb3)}>
              <Button
                bsStyle="primary"
                onClick={(e) => {
                  history.push("/siteadmin/tariffs/add");
                }}
              >
                Добавить
              </Button>
            </div>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Название</th>
                  <th>Описание</th>
                  <th>Тип для хоста</th>
                  <th>Комиссия хоста</th>
                  <th>Тип для гостья</th>
                  <th>Комиссия гостья</th>
                  <th>Только комиссия</th>
                </tr>
              </thead>
              <tbody>
                {getAllTariffs.map((x) => {
                  return (
                    <tr key={"tItem-" + x.id}>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.description}</td>
                      <td>
                        {x.host_is_percent == 1 ? "Процент" : "Фиксированная сумма"}
                      </td>
                      <td>{x.host_commision}</td>
                      <td>
                        {x.guest_is_percent == 1 ? "Процент" : "Фиксированная сумма"}
                      </td>
                      <td>{x.guest_commision}</td>
                      <td>{x.is_only_commission == 1 ? "Да" : "Нет"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
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
