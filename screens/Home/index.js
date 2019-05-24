import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Header } from '../../components';
import PlayButtonIcon from '../../assets/icons/play_arrow.png';
import TrophyIcon from '../../assets/icons/trophy.png';
import LeaderboardIcon from '../../assets/icons/leaderboard.png';
import styles from './styles';

const ViewContainer = styled.View`
  flex: 1;
  background-color: #0a0a0a;
  align-items: center;
  justify-content: center;
`;

export default class Home extends Component {

  state = {
    isSoundOn: true
  }

  onPlayPress = () => {
    console.log("onPlayPress event handler");
  }

  onToggleSound = () => {
    console.log("onToggleSound event handler");
  }

  render() {
    const imageSource = this.state.isSoundOn
      ? require("../../assets/icons/speaker-on.png")
      : require("../../assets/icons/speaker-off.png");
    return (
      <ViewContainer>
        <Header />
        <TouchableOpacity
          onPress={this.onPlayPress} 
          style={{
            flexDirection: 'row', alignItems: 'center', marginTop: 80
          }}>
          <Image
            source={PlayButtonIcon}
            style={styles.playIcon}
          />
          <Text style={styles.play}>PLAY!</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={TrophyIcon}
            style={styles.trophyIcon}
          />
          <Text style={styles.hiscore}>Hi-score: 0</Text>
        </View>
        <TouchableOpacity
          onPress={this.onPlayPress} 
          style={{
            flexDirection: 'row', alignItems: 'center', marginTop: 80
          }}>
          <Image
            source={LeaderboardIcon}
            style={styles.playIcon}
          />
          <Text style={styles.play}>Leaderboard</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={[styles.copyrightText, { color: "#E64C3C"}]}>
              Music: Komiku
            </Text>
            <Text style={[styles.copyrightText, { color: "#F1C431"}]}>
              SFX: SubspaceAudio
            </Text>
            <Text style={[styles.copyrightText, { color: "#3998DB"}]}>
              Development: RisingStack
            </Text>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={this.onToggleSound}>
            <Image source={imageSource} style={styles.soundIcon} />
          </TouchableOpacity>
        </View>
      </ViewContainer>
    );
  }
}
