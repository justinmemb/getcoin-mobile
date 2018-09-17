import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    CameraRoll,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Switch,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './UI/Styles.js';
import Helpers from './Helper';

const { width, height } = Dimensions.get('window');

export default class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            referer_screen: '',
        }
    }

    componentDidMount() {

    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } navigation.state;

        return {
            title: 'Gallery',
        }
    };

    render() {
        return (
            <View style={styles.wrap}>
                <ScrollView>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            this.state.photos.map((p, i) => {
                                return (
                                    <TouchableOpacity onPress={() => this.set_photo(i)} key={i}>
                                        <Image style={{width: width/>3, height: width/3, borderColor: '#fff', borderWidth: 1}} source={{uri: p.node.image.uri}} />
                                    </TouchableOpacity>
                        )
                    })
                        }
                    </View>
                </ScrollView>
            </View>        
        );
    }

    getPhotos = () => {
        CameraRoll.getPhotos({
            first: 100,
            assetType: 'All'
        })
        .then(r => this.setState({ photos: r.edges }))
    }

    set_photo = (index) => {
        const image = this.state.photos[index].node.image.uri;

        var options = {
            image_path: image,
            upload: true,
        };

        return this.props.navigation.dispatch(NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({ routeName: 'ProfilePhoto', params: options })
            ]
        }));
    }
}