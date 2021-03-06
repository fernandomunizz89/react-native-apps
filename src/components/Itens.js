import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const star = require('../imgs/rate-star-button.png');
const fork = require('../imgs/code-fork-symbol.png');

export default class Itens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItemPullRequest: [] };
  }

  render() {
    return (
      <TouchableOpacity 
        onPress={() => { Actions.listaPullRequest({ url: this.props.item.url, complemento: '/pulls' }); }}
      >
        <View style={styles.item} >
          <View style={styles.txtContainer} >
            <Text style={styles.txtTitulo} >{ this.props.item.name }</Text>
            <Text numberOfLines={3} style={styles.txtDescricao} >
              { this.props.item.description }
            </Text>
            <View style={styles.statistics} >
              <View style={styles.statistics} >
                <Image style={styles.statisticsImage} source={star} />
                <Text style={styles.statisticStar} >{ this.props.item.stargazers_count }</Text>
               </View>
               <View style={styles.statistics} >
                <Image style={styles.statisticsImage} source={fork} />
                <Text style={styles.statisticFork} >{ this.props.item.forks_count }</Text>
              </View>
            </View>
          </View>
          <View style={styles.imagemContainer}>
            <Image style={styles.imagem} source={{ uri: this.props.item.owner.avatar_url }} />
            <Text  style={styles.txtNome} >{ this.props.item.owner.login }</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderStyle: 'solid',
    borderWidth: 0,
    borderColor: '#DDD',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 0,
    margin: 0
  },
  statistics: {
   flexDirection: 'row',
   marginTop: 5,
   marginRight: 5,
   justifyContent: 'space-between'
  },
  statisticsImage: {
    height: 23, 
    width: 23
  },
  txtTitulo: {
    color: 'steelblue',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold'
  },  
  txtDescricao: {
    fontSize: 15
  },
  txtNome: {
    fontSize: 15,
    width: 100
  },
  
  statisticStar: {
    fontSize: 17,
    color: '#FFC300',
    fontWeight: 'bold'
  },
  statisticFork: {
    fontSize: 17,
    color: '#FFC300',
    fontWeight: 'bold'
  },
  imagem: {
    height: 100, 
    width: 100,
    borderRadius: 5,
  },
  imagemContainer: {
    alignItems: 'center'
  },
  txtContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between'
  }
});
