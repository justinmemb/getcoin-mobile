import React, { Component } from 'react';
import {
    Image,
    CameraRoll,
    TouchableOpacity,
    Text,
    View,
    Switch,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';

import styles from './Styles';

export default class TakePhoto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photo: '',
            camera_type: Camera.constants.Type.back,
            referer_screen: '',
        }
    }

    componentDidMount() {
        const{params} = this.props.navigation.state;
        
        this.get_latest_photo();
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            title: 'Take Photo',
        }
    };

    render() {
        return(

        );
    }

    switch_camera_type = () => {
        let newType;

        const { back, front } = Camera.constants.Type;

        if (this.state.camera_type === back) {
            newType = front;
        } else if (this.state.camera_type === front) {
            newType = back;
        }

        this.setState({
            camera_type: newType
        });
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                console.log(data);

                this.setState({
                    photo: data.path
                });
            })
            .catch(err => console.error(err));
    }

    render_latest_photo = () => {
        let img;

        // if (this.state.photo.length > 0) {
        //     img = <TouchableOpacity onPress={() => {this.set_photo()}}>
        //         <Image style={{width: 50, height: 50, borderColor: '#fff', borderWidth: 1,}} source={{uri: this.state.photo}} />
        //     </TouchableOpacity>;
        // }

        return img;
    }

    get_latest_photo = () => {
        CameraRoll.getPhotos({
            first: 1,
            assetType: 'All',
        })
        .then(r = >this.setState({
            photo: r.edges[0].node.image.uri
        }))
    }

    set_photo = () => {
        var options = {
            image_path: this.state.photo,
            upload: true,
        };

        return this.props.navigation.dispatch(NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'}),
                NavigationActions.navigate({ routeName: 'ProfilePhoto', params: options })
            ]
        }));
    }
}