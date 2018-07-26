import React, { Component } from "react";
import { Table, Header, Segment, Grid, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ApiService from "../js/ApiService";

class SingleCase extends Component {
  constructor({ match }) {
    super();
    this.state = {
      id: match.params.id,
      singleCase: null
    };
  }

  async fetchData(id) {
    let singleCase = await ApiService.getCase({ id: parseInt(id) });
    this.setState({ singleCase });
  }

  async componentDidMount() {
    this.fetchData(this.state.id);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchData(this.props.match.params.id);
    }
  }

  render() {
    if (!this.state.singleCase) {
      return <p>Loading</p>;
    }

    let cites = this.state.singleCase.cites ? (
      this.state.singleCase.cites.length === 0 ? (
        <p>No cases</p>
      ) : (
        <ul>
          {this.state.singleCase.cites.map(function(obj) {
            <li>
              <Link to={`/case/${obj.id}`}>{obj.case_name}</Link>
            </li>;
          })}
        </ul>
      )
    ) : (
      ""
    );

    return (
      <React.Fragment>
        <Header as="h2">{this.state.singleCase.case_name}</Header>
		<br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Segment>
                <iframe
                  src={`https://docs.google.com/gview?url=https://s3-ap-southeast-2.amazonaws.com/openlaw-pdfs/${
                    this.state.singleCase.PDF.bucket_key
                  }&embedded=true`}
                  style={{ width: "100%", height: 500 }}
                  frameBorder={0}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h3">Cites</Header>
              {this.state.singleCase.cites ? (
                this.state.singleCase.cites.length === 0 ? (
                  <p>No cases</p>
                ) : (
                  <List relaxed="very" divided>
                    {this.state.singleCase.cites.map(function(obj) {
                      return (
                        <List.Item key={`cites-reference-${obj.id}`}>
                          <Link to={`/case/${obj.id}`}>{obj.case_name}</Link>
                        </List.Item>
                      );
                    })}
                  </List>
                )
              ) : (
                ""
              )}

              <Header as="h3">Cited By</Header>
              {this.state.singleCase.cited_by ? (
                this.state.singleCase.cited_by.length === 0 ? (
                  <p>No cases</p>
                ) : (
                  <List relaxed="very" divided>
                    {this.state.singleCase.cited_by.map(function(obj) {
                      return (
                        <List.Item key={`cited-by-reference-${obj.id}`}>
                          <Link to={`/case/${obj.id}`}>{obj.case_name}</Link>
                        </List.Item>
                      );
                    })}
                  </List>
                )
              ) : (
                ""
              )}

              <Header as="h3">Legislation Referenced</Header>
              {this.state.singleCase.legislationReferences ? (
                this.state.singleCase.legislationReferences.length === 0 ? (
                  <p>No legislation</p>
                ) : (
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Section</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.state.singleCase.legislationReferences.map(function(
                        obj,
                        i
                      ) {
                        return (
                          <Table.Row key={`legislation-reference-${i}`}>
                            <Table.Cell>{obj.legislation.title}</Table.Cell>
                            <Table.Cell>{obj.section}</Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                )
              ) : (
                ""
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SingleCase;
