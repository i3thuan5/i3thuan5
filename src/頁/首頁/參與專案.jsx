import React, { Component, PropTypes } from 'react';
import { Menu, Container, Card, Segment, Header, Grid, Image, Item, Step, Icon, Divider } from 'semantic-ui-react';
import LogoItaigi from '../../圖/itaigi.svg';
import LogoSu5lui7 from '../../圖/su5lui7_hun1kip4.png';
import { Link } from 'react-router';

class 參與專案 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Segment basic className="submasthead stripe slogan">

        <Grid container centered stackable verticalAlign='middle'>
          <Grid.Column width={5} textAlign="center">
            <Segment basic>
              <Header>即時台語發音服務
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Segment basic><Image src={LogoItaigi} size='medium'/></Segment>
          </Grid.Column>
        </Grid>

      </Segment>

      <Segment basic className="stripe">
          <Grid container centered stackable verticalAlign='middle'>
            <Grid.Column width={5} textAlign="center">
              <Segment basic>
                <Header>客製化語料庫
                <Header.Subheader>擁有豐富的協助校對工具，偵測文本錯誤、顯示字詞是否收錄，輸出詞頻報表。</Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5} textAlign="center">
              <Segment basic><Image src={LogoSu5lui7} size='medium'/></Segment>
            </Grid.Column>
          </Grid>
      </Segment>
    </div>
    );
  }
}

export default 參與專案;
