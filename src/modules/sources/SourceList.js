// bikin static komponen nya
// panggil via api
// yang mau di tampilkan adalah sumber berita
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

const key = "2348a18e4c3248abab1d460740881ee1";
const sources = `https://newsapi.org/v2/sources?apiKey=${key}`;
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class SourceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(sources)
      .then(result => {
        console.log(result, "ini sukses");
        this.setState({
          data: result.data.sources,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "ini error");
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map(source => {
          return (
            <Card key={source.id}>
              <Image src={`${iconLocator}&url=${source.url}`} />
              <Card.Content>
                <Card.Header>
                  {source.name} {source.description}"
                </Card.Header>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default SourceList;
