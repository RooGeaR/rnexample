/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import ListItem from './src/components/ListItem';
import { connect } from 'react-redux';
import { addPlace, setPlaceName } from './src/actions/place';

class App extends Component {
  
  placeSubmitHandler = () => {
    if (this.props.placeName.trim() === '') {
      return;
    }

    this.props.add(this.props.placeName);
  }

  placeNameChangeHandler = (value) => {
    this.props.setPlaceName(value);
  }

  placesOutput = () => {
    return (
      <FlatList style={styles.listContainer} 
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
          />
        )}
      />
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={styles.placesText}>Places</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Place"
            style={styles.placeInput}
            value={this.props.placeName}
            onChangeText={this.placeNameChangeHandler}>
          </TextInput>

          <TouchableOpacity
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          >
            <Text style={styles.placeButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  placeInput: {
    width: '70%',
    height: 40,
    margin: 15,
    borderColor: 'skyblue',
    borderWidth: 1
  },
  placeButtonText: {
    color: 'white'
  },
  placeButton: {
    width: '30%',
    height:40,
    backgroundColor: 'skyblue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 2,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%'
  },
  placesText: {
    color: 'steelblue',
    fontSize: 20,
    marginTop: 15,
  },
});


const mapStateToProps = state => {
  return {
    placeName: state.places.placeName,
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => dispatch(addPlace(name)),
    setPlaceName: (name) => dispatch(setPlaceName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)